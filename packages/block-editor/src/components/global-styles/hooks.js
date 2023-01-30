/**
 * External dependencies
 */
import fastDeepEqual from 'fast-deep-equal/es6';
import { get, set } from 'lodash';

/**
 * WordPress dependencies
 */
import { useContext, useCallback, useMemo } from '@wordpress/element';
import {
	getBlockType,
	__EXPERIMENTAL_STYLE_PROPERTY as STYLE_PROPERTY,
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { getValueFromVariable, getPresetVariableFromValue } from './utils';
import { GlobalStylesContext } from './context';

const EMPTY_CONFIG = { settings: {}, styles: {} };

const VALID_SETTINGS = [
	'appearanceTools',
	'useRootPaddingAwareAlignments',
	'border.color',
	'border.radius',
	'border.style',
	'border.width',
	'shadow.presets',
	'shadow.defaultPresets',
	'color.background',
	'color.custom',
	'color.customDuotone',
	'color.customGradient',
	'color.defaultDuotone',
	'color.defaultGradients',
	'color.defaultPalette',
	'color.duotone',
	'color.gradients',
	'color.link',
	'color.palette',
	'color.text',
	'custom',
	'dimensions.minHeight',
	'layout.contentSize',
	'layout.definitions',
	'layout.wideSize',
	'position.fixed',
	'position.sticky',
	'spacing.customSpacingSize',
	'spacing.spacingSizes',
	'spacing.spacingScale',
	'spacing.blockGap',
	'spacing.margin',
	'spacing.padding',
	'spacing.units',
	'typography.fuild',
	'typography.customFontSize',
	'typography.dropCap',
	'typography.fontFamilies',
	'typography.fontSizes',
	'typography.fontStyle',
	'typography.fontWeight',
	'typography.letterSpacing',
	'typography.lineHeight',
	'typography.textDecoration',
	'typography.textTransform',
];

export const useGlobalStylesReset = () => {
	const { user: config, setUserConfig } = useContext( GlobalStylesContext );
	const canReset = !! config && ! fastDeepEqual( config, EMPTY_CONFIG );
	return [
		canReset,
		useCallback(
			() => setUserConfig( () => EMPTY_CONFIG ),
			[ setUserConfig ]
		),
	];
};

export function useGlobalSetting( propertyPath, blockName, source = 'all' ) {
	const { setUserConfig, ...configs } = useContext( GlobalStylesContext );

	const appendedBlockPath = blockName ? '.blocks.' + blockName : '';
	const appendedPropertyPath = propertyPath ? '.' + propertyPath : '';
	const contextualPath = `settings${ appendedBlockPath }${ appendedPropertyPath }`;
	const globalPath = `settings${ appendedPropertyPath }`;
	const sourceKey = source === 'all' ? 'merged' : source;

	const settingValue = useMemo( () => {
		const configToUse = configs[ sourceKey ];
		if ( ! configToUse ) {
			throw 'Unsupported source';
		}

		if ( propertyPath ) {
			return (
				get( configToUse, contextualPath ) ??
				get( configToUse, globalPath )
			);
		}

		const result = {};
		VALID_SETTINGS.forEach( ( setting ) => {
			const value =
				get(
					configToUse,
					`settings${ appendedBlockPath }.${ setting }`
				) ?? get( configToUse, `settings.${ setting }` );
			if ( value ) {
				set( result, setting, value );
			}
		} );
		return result;
	}, [
		configs,
		sourceKey,
		propertyPath,
		contextualPath,
		globalPath,
		appendedBlockPath,
	] );

	const setSetting = ( newValue ) => {
		setUserConfig( ( currentConfig ) => {
			// Deep clone `currentConfig` to avoid mutating it later.
			const newUserConfig = JSON.parse( JSON.stringify( currentConfig ) );
			set( newUserConfig, contextualPath, newValue );

			return newUserConfig;
		} );
	};

	return [ settingValue, setSetting ];
}

export function useGlobalStyle(
	path,
	blockName,
	source = 'all',
	{ shouldDecodeEncode = true } = {}
) {
	const {
		merged: mergedConfig,
		base: baseConfig,
		user: userConfig,
		setUserConfig,
	} = useContext( GlobalStylesContext );
	const appendedPath = path ? '.' + path : '';
	const finalPath = ! blockName
		? `styles${ appendedPath }`
		: `styles.blocks.${ blockName }${ appendedPath }`;

	const setStyle = ( newValue ) => {
		setUserConfig( ( currentConfig ) => {
			// Deep clone `currentConfig` to avoid mutating it later.
			const newUserConfig = JSON.parse( JSON.stringify( currentConfig ) );
			set(
				newUserConfig,
				finalPath,
				shouldDecodeEncode
					? getPresetVariableFromValue(
							mergedConfig.settings,
							blockName,
							path,
							newValue
					  )
					: newValue
			);
			return newUserConfig;
		} );
	};

	let rawResult, result;
	switch ( source ) {
		case 'all':
			rawResult =
				// The stlyes.css path is allowed to be empty, so don't revert to base if undefined.
				finalPath === 'styles.css'
					? get( userConfig, finalPath )
					: get( userConfig, finalPath ) ??
					  get( baseConfig, finalPath );
			result = shouldDecodeEncode
				? getValueFromVariable( mergedConfig, blockName, rawResult )
				: rawResult;
			break;
		case 'user':
			rawResult = get( userConfig, finalPath );
			result = shouldDecodeEncode
				? getValueFromVariable( mergedConfig, blockName, rawResult )
				: rawResult;
			break;
		case 'base':
			rawResult = get( baseConfig, finalPath );
			result = shouldDecodeEncode
				? getValueFromVariable( baseConfig, blockName, rawResult )
				: rawResult;
			break;
		default:
			throw 'Unsupported source';
	}

	return [ result, setStyle ];
}

const ROOT_BLOCK_SUPPORTS = [
	'background',
	'backgroundColor',
	'color',
	'linkColor',
	'buttonColor',
	'fontFamily',
	'fontSize',
	'fontStyle',
	'fontWeight',
	'lineHeight',
	'padding',
	'contentSize',
	'wideSize',
	'blockGap',
];

function filterElementBlockSupports( blockSuppots, name, element ) {
	const filteredBlockSupports = blockSuppots.filter( ( support ) => {
		if ( support === 'fontSize' && element === 'heading' ) {
			return false;
		}

		// This is only available for links
		if ( support === 'textDecoration' ) {
			return false;
		}

		return true;
	} );

	if ( ! name && element === 'heading' ) {
		filteredBlockSupports.push( 'textTransform' );
	}

	if ( ! name && element === 'link' ) {
		filteredBlockSupports.push( 'textDecoration' );
	}

	return filteredBlockSupports;
}

export function getSupportedGlobalStylesPanels( name, element ) {
	if ( ! name ) {
		return filterElementBlockSupports( ROOT_BLOCK_SUPPORTS, name, element );
	}

	const blockType = getBlockType( name );

	if ( ! blockType ) {
		return [];
	}

	const supportKeys = [];

	// Check for blockGap support.
	// Block spacing support doesn't map directly to a single style property, so needs to be handled separately.
	// Also, only allow `blockGap` support if serialization has not been skipped, to be sure global spacing can be applied.
	if (
		blockType?.supports?.spacing?.blockGap &&
		blockType?.supports?.spacing?.__experimentalSkipSerialization !==
			true &&
		! blockType?.supports?.spacing?.__experimentalSkipSerialization?.some?.(
			( spacingType ) => spacingType === 'blockGap'
		)
	) {
		supportKeys.push( 'blockGap' );
	}

	// check for shadow support
	if ( blockType?.supports?.shadow ) {
		supportKeys.push( 'shadow' );
	}

	Object.keys( STYLE_PROPERTY ).forEach( ( styleName ) => {
		if ( ! STYLE_PROPERTY[ styleName ].support ) {
			return;
		}

		// Opting out means that, for certain support keys like background color,
		// blocks have to explicitly set the support value false. If the key is
		// unset, we still enable it.
		if ( STYLE_PROPERTY[ styleName ].requiresOptOut ) {
			if (
				STYLE_PROPERTY[ styleName ].support[ 0 ] in
					blockType.supports &&
				get(
					blockType.supports,
					STYLE_PROPERTY[ styleName ].support
				) !== false
			) {
				return supportKeys.push( styleName );
			}
		}

		if (
			get(
				blockType.supports,
				STYLE_PROPERTY[ styleName ].support,
				false
			)
		) {
			return supportKeys.push( styleName );
		}
	} );

	return filterElementBlockSupports( supportKeys, name, element );
}
