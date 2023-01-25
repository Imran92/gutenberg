const stories = [
	process.env.NODE_ENV !== 'test' && './stories/**/*.@(js|tsx|mdx)',
	'../packages/block-editor/src/**/stories/*.@(js|tsx|mdx)',
	'../packages/components/src/**/stories/*.@(js|tsx|mdx)',
	'../packages/icons/src/**/stories/*.@(js|tsx|mdx)',
].filter( Boolean );

module.exports = {
	core: {
		builder: 'webpack5',
	},
	stories,
	addons: [
		{
			name: '@storybook/addon-docs',
			options: { configureJSX: true },
		},
		'@storybook/addon-controls',
		'@storybook/addon-viewport',
		'@storybook/addon-a11y',
		'@storybook/addon-toolbars',
		'@storybook/addon-actions',
		'storybook-source-link',
	],
	framework: '@storybook/react',
	features: {
		babelModeV7: true,
		emotionAlias: false,
		storyStoreV7: true,
	},
	env: ( config ) => ( {
		...config,
		// Pretend we're in the Gutenberg plugin.
		// Disable reason: We're defining IS_GUTENBERG_PLUGIN, not using it.
		// eslint-disable-next-line @wordpress/is-gutenberg-plugin
		IS_GUTENBERG_PLUGIN: true,
	} ),
};
