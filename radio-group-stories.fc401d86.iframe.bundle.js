"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[6643],{"./packages/components/src/button-group/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedButtonGroup(props,ref){const{className:className,...restProps}=props,classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("components-button-group",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{ref:ref,role:"group",className:classes,...restProps})}UnforwardedButtonGroup.displayName="UnforwardedButtonGroup";const ButtonGroup=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedButtonGroup);__webpack_exports__.Z=ButtonGroup;try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:'ButtonGroup can be used to group any related buttons together. To emphasize\nrelated buttons, a group should share a common container.\n\n```jsx\nimport { Button, ButtonGroup } from \'@wordpress/components\';\n\nconst MyButtonGroup = () => (\n  <ButtonGroup>\n    <Button variant="primary">Button 1</Button>\n    <Button variant="primary">Button 2</Button>\n  </ButtonGroup>\n);\n```',displayName:"ButtonGroup",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/button-group/index.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"packages/components/src/button-group/index.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}try{buttongroup.displayName="buttongroup",buttongroup.__docgenInfo={description:'ButtonGroup can be used to group any related buttons together. To emphasize\nrelated buttons, a group should share a common container.\n\n```jsx\nimport { Button, ButtonGroup } from \'@wordpress/components\';\n\nconst MyButtonGroup = () => (\n  <ButtonGroup>\n    <Button variant="primary">Button 1</Button>\n    <Button variant="primary">Button 2</Button>\n  </ButtonGroup>\n);\n```',displayName:"buttongroup",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/button-group/index.tsx#buttongroup"]={docgenInfo:buttongroup.__docgenInfo,name:"buttongroup",path:"packages/components/src/button-group/index.tsx#buttongroup"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/ui/context/constants.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{cT:function(){return COMPONENT_NAMESPACE},_3:function(){return CONNECTED_NAMESPACE},rE:function(){return CONNECT_STATIC_NAMESPACE}});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/ui/context/context-connect.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Iq:function(){return contextConnect},H:function(){return hasConnectNamespace}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/ui/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),process=__webpack_require__("./node_modules/process/browser.js");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function _contextConnect(Component,namespace,options){const WrappedComponent=null!=options&&options.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&void 0!==process&&process.env;let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/ui/context/context-system-provider.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{eb:function(){return useComponentsContext},G8:function(){return ContextSystemProvider}});var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0__),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/lodash.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),process=__webpack_require__("./node_modules/process/browser.js");const ComponentsContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createContext)({}),useComponentsContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(ComponentsContext);const BaseContextSystemProvider=_ref2=>{let{children:children,value:value}=_ref2;const contextValue=function useContextSystemBridge(_ref){let{value:value}=_ref;const parentContext=useComponentsContext(),valueRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0___default()(valueRef.current,value)&&valueRef.current!==value&&void 0!==process&&process.env}),[value]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)((()=>(0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)(JSON.parse(JSON.stringify(parentContext)),value)),[parentContext,value])}({value:value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ComponentsContext.Provider,{value:contextValue,children:children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/ui/context/context-system-provider.js"]={name:"BaseContextSystemProvider",docgenInfo:BaseContextSystemProvider.__docgenInfo,path:"packages/components/src/ui/context/context-system-provider.js"})},"./packages/components/src/ui/context/get-styled-class-name-from-key.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return getStyledClassNameFromKey}});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/lodash.js"),memize__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/memize/index.js");const getStyledClassNameFromKey=__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_1__)()((function getStyledClassName(namespace){return`components-${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(namespace)}`}))},"./packages/components/src/ui/context/use-context-system.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{y:function(){return useContextSystem}});var context_system_provider=__webpack_require__("./packages/components/src/ui/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/ui/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts"),process=__webpack_require__("./node_modules/process/browser.js");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&void 0!==process&&process.env;const contextProps=(null==contextSystemProps?void 0:contextSystemProps[namespace])||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/utils/hooks/use-update-effect.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/components/src/view/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View",__webpack_exports__.Z=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.",displayName:"View",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/reakit-utils/es/canUseDOM.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{N:function(){return canUseDOM}});var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/reakit-utils/es/getWindow.js");var canUseDOM=function checkIsBrowser(){var _window=(0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.J)();return Boolean(void 0!==_window&&_window.document&&_window.document.createElement)}()},"./node_modules/reakit-utils/es/dom.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{N:function(){return isUA}});var _canUseDOM_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/reakit-utils/es/canUseDOM.js");function isUA(string){return!!_canUseDOM_js__WEBPACK_IMPORTED_MODULE_0__.N&&-1!==window.navigator.userAgent.indexOf(string)}},"./node_modules/reakit-utils/es/getDocument.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function getDocument(element){return element?element.ownerDocument||element:document}__webpack_require__.d(__webpack_exports__,{M:function(){return getDocument}})},"./node_modules/reakit-utils/es/getWindow.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J:function(){return getWindow}});var _window,_getDocument_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/reakit-utils/es/getDocument.js");try{_window=window}catch(e){}function getWindow(element){return element&&(0,_getDocument_js__WEBPACK_IMPORTED_MODULE_0__.M)(element).defaultView||_window}},"./node_modules/reakit-utils/es/isSelfTarget.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function isSelfTarget(event){return event.target===event.currentTarget}__webpack_require__.d(__webpack_exports__,{U:function(){return isSelfTarget}})},"./node_modules/reakit-utils/es/useForkRef.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return useForkRef}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function setRef(ref,value){void 0===value&&(value=null),ref&&("function"==typeof ref?ref(value):ref.current=value)}function useForkRef(refA,refB){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return null==refA&&null==refB?null:function(value){setRef(refA,value),setRef(refB,value)}}),[refA,refB])}},"./node_modules/reakit-utils/es/useIsomorphicEffect.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Y:function(){return useIsomorphicEffect}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useIsomorphicEffect=__webpack_require__("./node_modules/reakit-utils/es/canUseDOM.js").N?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./node_modules/reakit-utils/es/useLiveRef.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return useLiveRef}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useIsomorphicEffect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/reakit-utils/es/useIsomorphicEffect.js");function useLiveRef(value){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return(0,_useIsomorphicEffect_js__WEBPACK_IMPORTED_MODULE_1__.Y)((function(){ref.current=value})),ref}},"./node_modules/reakit-utils/es/useSealedState.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{T:function(){return useSealedState}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useSealedState(initialState){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState)[0]}},"./node_modules/reakit-warning/es/index.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js")},"./node_modules/reakit/es/Id/IdProvider.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U:function(){return unstable_IdContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function generateRandomString(prefix){return void 0===prefix&&(prefix="id"),(prefix?prefix+"-":"")+Math.random().toString(32).substr(2,6)}var unstable_IdContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(generateRandomString)},"./node_modules/reakit/es/Id/IdState.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{C:function(){return unstable_useIdState}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/reakit-utils/es/useSealedState.js"),_IdProvider_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit/es/Id/IdProvider.js");function unstable_useIdState(initialState){void 0===initialState&&(initialState={});var initialBaseId=(0,reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__.T)(initialState).baseId,generateId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_IdProvider_js__WEBPACK_IMPORTED_MODULE_2__.U),idCountRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),_React$useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return initialBaseId||generateId()}));return{baseId:_React$useState[0],setBaseId:_React$useState[1],unstable_idCountRef:idCountRef}}},"./node_modules/reakit/es/Radio/Radio.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Y:function(){return Radio}});var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-1f0bf8c2.js"),reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/reakit-system/es/createComponent.js"),reakit_system_createHook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit-system/es/createHook.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/reakit-utils/es/useForkRef.js"),reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./node_modules/reakit-warning/es/index.js"),__webpack_require__("./node_modules/reakit-utils/es/useLiveRef.js")),reakit_utils_createEvent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit-utils/es/createEvent.js"),_Composite_CompositeItem_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/reakit/es/Composite/CompositeItem.js"),_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/reakit/es/__keys-d251e56b.js");function getChecked(options){return void 0!==options.checked?options.checked:void 0!==options.value&&options.state===options.value}function fireChange(element,onChange){var event=(0,reakit_utils_createEvent__WEBPACK_IMPORTED_MODULE_2__.y)(element,"change");Object.defineProperties(event,{type:{value:"change"},target:{value:element},currentTarget:{value:element}}),null==onChange||onChange(event)}var useRadio=(0,reakit_system_createHook__WEBPACK_IMPORTED_MODULE_3__.B)({name:"Radio",compose:_Composite_CompositeItem_js__WEBPACK_IMPORTED_MODULE_4__.E,keys:_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_5__.R,useOptions:function useOptions(_ref,_ref2){var _options$value,value=_ref2.value,checked=_ref2.checked,_ref$unstable_clickOn=_ref.unstable_clickOnEnter,unstable_clickOnEnter=void 0!==_ref$unstable_clickOn&&_ref$unstable_clickOn,_ref$unstable_checkOn=_ref.unstable_checkOnFocus,unstable_checkOnFocus=void 0===_ref$unstable_checkOn||_ref$unstable_checkOn,options=(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__._)(_ref,["unstable_clickOnEnter","unstable_checkOnFocus"]);return(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__.a)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__.a)({checked:checked,unstable_clickOnEnter:unstable_clickOnEnter,unstable_checkOnFocus:unstable_checkOnFocus},options),{},{value:null!=(_options$value=options.value)?_options$value:value})},useProps:function useProps(options,_ref3){var htmlRef=_ref3.ref,htmlOnChange=_ref3.onChange,htmlOnClick=_ref3.onClick,htmlProps=(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__._)(_ref3,["ref","onChange","onClick"]),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_React$useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),isNativeRadio=_React$useState3[0],setIsNativeRadio=_React$useState3[1],checked=getChecked(options),isCurrentItemRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__.c)(options.currentId===options.id),onChangeRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__.c)(htmlOnChange),onClickRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__.c)(htmlOnClick);!function useInitialChecked(options){var initialChecked=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return getChecked(options)}))[0],initialCurrentId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options.currentId)[0],id=options.id,setCurrentId=options.setCurrentId;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){initialChecked&&id&&initialCurrentId!==id&&(null==setCurrentId||setCurrentId(id))}),[initialChecked,id,setCurrentId,initialCurrentId])}(options),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var element=ref.current;element&&("INPUT"===element.tagName&&"radio"===element.type||setIsNativeRadio(!1))}),[]);var onChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){var _onChangeRef$current,_options$setState;null===(_onChangeRef$current=onChangeRef.current)||void 0===_onChangeRef$current||_onChangeRef$current.call(onChangeRef,event),event.defaultPrevented||options.disabled||null===(_options$setState=options.setState)||void 0===_options$setState||_options$setState.call(options,options.value)}),[options.disabled,options.setState,options.value]),onClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){var _onClickRef$current;null===(_onClickRef$current=onClickRef.current)||void 0===_onClickRef$current||_onClickRef$current.call(onClickRef,event),event.defaultPrevented||isNativeRadio||fireChange(event.currentTarget,onChange)}),[onChange,isNativeRadio]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var element=ref.current;element&&options.unstable_moves&&isCurrentItemRef.current&&options.unstable_checkOnFocus&&fireChange(element,onChange)}),[options.unstable_moves,options.unstable_checkOnFocus,onChange]),(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__.a)({ref:(0,reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.c)(ref,htmlRef),role:isNativeRadio?void 0:"radio",type:isNativeRadio?"radio":void 0,value:isNativeRadio?options.value:void 0,name:isNativeRadio?options.baseId:void 0,"aria-checked":checked,checked:checked,onChange:onChange,onClick:onClick},htmlProps)}}),Radio=(0,reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_9__.L)({as:"input",memo:!0,useHook:useRadio})},"./node_modules/reakit/es/Radio/RadioGroup.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return RadioGroup}});var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-1f0bf8c2.js"),reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/reakit-system/es/createComponent.js"),reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit-system/es/createHook.js"),reakit_system_useCreateElement__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/reakit-warning/es/index.js"),__webpack_require__("./node_modules/reakit-system/es/useCreateElement.js")),_Composite_Composite_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit/es/Composite/Composite.js"),_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/reakit/es/__keys-d251e56b.js"),useRadioGroup=(0,reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__.B)({name:"RadioGroup",compose:_Composite_Composite_js__WEBPACK_IMPORTED_MODULE_3__.Q,keys:_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_4__.a,useProps:function useProps(_,htmlProps){return(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_5__.a)({role:"radiogroup"},htmlProps)}}),RadioGroup=(0,reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_6__.L)({as:"div",useHook:useRadioGroup,useCreateElement:function useCreateElement$1(type,props,children){return(0,reakit_system_useCreateElement__WEBPACK_IMPORTED_MODULE_7__.C)(type,props,children)}})},"./node_modules/reakit/es/Radio/RadioState.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{i:function(){return useRadioState}});var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-1f0bf8c2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/reakit-utils/es/useSealedState.js"),_Composite_CompositeState_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit/es/Composite/CompositeState.js");function useRadioState(initialState){void 0===initialState&&(initialState={});var _useSealedState=(0,reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__.T)(initialState),initialValue=_useSealedState.state,_useSealedState$loop=_useSealedState.loop,loop=void 0===_useSealedState$loop||_useSealedState$loop,sealed=(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__._)(_useSealedState,["state","loop"]),_React$useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue),state=_React$useState[0],setState=_React$useState[1],composite=(0,_Composite_CompositeState_js__WEBPACK_IMPORTED_MODULE_3__.u)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)({},sealed),{},{loop:loop}));return(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)({},composite),{},{state:state,setState:setState})}},"./node_modules/reakit/es/__keys-d251e56b.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{R:function(){return RADIO_KEYS},a:function(){return RADIO_GROUP_KEYS}});var RADIO_STATE_KEYS=["baseId","unstable_idCountRef","unstable_virtual","rtl","orientation","items","groups","currentId","loop","wrap","shift","unstable_moves","unstable_hasActiveWidget","unstable_includesBaseElement","state","setBaseId","registerItem","unregisterItem","registerGroup","unregisterGroup","move","next","previous","up","down","first","last","sort","unstable_setVirtual","setRTL","setOrientation","setCurrentId","setLoop","setWrap","setShift","reset","unstable_setIncludesBaseElement","unstable_setHasActiveWidget","setState"],RADIO_KEYS=[].concat(RADIO_STATE_KEYS,["value","checked","unstable_checkOnFocus"]),RADIO_GROUP_KEYS=RADIO_STATE_KEYS},"./packages/components/src/radio-group/stories/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_default:function(){return _default},controlled:function(){return controlled},default:function(){return stories},disabled:function(){return disabled}});var react=__webpack_require__("./node_modules/react/index.js"),Radio=__webpack_require__("./node_modules/reakit/es/Radio/Radio.js"),src_button=__webpack_require__("./packages/components/src/button/index.tsx");var radio_context=(0,react.createContext)({state:null,setState:()=>{}}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function radio_Radio(_ref,ref){let{children:children,value:value,...props}=_ref;const radioContext=(0,react.useContext)(radio_context),checked=radioContext.state===value;return(0,jsx_runtime.jsx)(Radio.Y,{ref:ref,as:src_button.ZP,variant:checked?"primary":"secondary",value:value,...radioContext,...props,children:children||value})}radio_Radio.displayName="Radio",radio_Radio.__docgenInfo={description:"",methods:[],displayName:"Radio"};var radio_group_radio=(0,react.forwardRef)(radio_Radio);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/radio-group/radio/index.js"]={name:"Radio",docgenInfo:radio_Radio.__docgenInfo,path:"packages/components/src/radio-group/radio/index.js"});var RadioState=__webpack_require__("./node_modules/reakit/es/Radio/RadioState.js"),RadioGroup=__webpack_require__("./node_modules/reakit/es/Radio/RadioGroup.js"),button_group=__webpack_require__("./packages/components/src/button-group/index.tsx");function radio_group_RadioGroup(_ref,ref){let{label:label,checked:checked,defaultChecked:defaultChecked,disabled:disabled,onChange:onChange,...props}=_ref;const radioState=(0,RadioState.i)({state:defaultChecked,baseId:props.id}),radioContext={...radioState,disabled:disabled,state:null!=checked?checked:radioState.state,setState:null!=onChange?onChange:radioState.setState};return(0,jsx_runtime.jsx)(radio_context.Provider,{value:radioContext,children:(0,jsx_runtime.jsx)(RadioGroup.E,{ref:ref,as:button_group.Z,"aria-label":label,...radioState,...props})})}radio_group_RadioGroup.displayName="RadioGroup",radio_group_RadioGroup.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};var radio_group=(0,react.forwardRef)(radio_group_RadioGroup);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/radio-group/index.js"]={name:"RadioGroup",docgenInfo:radio_group_RadioGroup.__docgenInfo,path:"packages/components/src/radio-group/index.js"});var stories={title:"Components (Deprecated)/RadioGroup",subcomponents:{Radio:radio_group_radio},component:radio_group,parameters:{sourceLink:"packages/components/src/radio-group",storySource:{source:'/**\n * WordPress dependencies\n */\nimport { useState } from \'@wordpress/element\';\n\n/**\n * Internal dependencies\n */\nimport Radio from \'../radio\';\nimport RadioGroup from \'../\';\n\nexport default {\n\ttitle: \'Components (Deprecated)/RadioGroup\',\n\tsubcomponents: { Radio },\n\tcomponent: RadioGroup,\n\tparameters: {\n\t\tdocs: {\n\t\t\tdescription: {\n\t\t\t\tcomponent:\n\t\t\t\t\t\'This component is deprecated. Use `RadioControl` or `ToggleGroupControl` instead.\',\n\t\t\t},\n\t\t},\n\t},\n};\n\nexport const _default = () => {\n\t\n\treturn (\n\t\t<RadioGroup\n\t\t\t// id is required for server side rendering\n\t\t\tid="default-radiogroup"\n\t\t\tlabel="options"\n\t\t\tdefaultChecked="option2"\n\t\t>\n\t\t\t<Radio value="option1">Option 1</Radio>\n\t\t\t<Radio value="option2">Option 2</Radio>\n\t\t\t<Radio value="option3">Option 3</Radio>\n\t\t</RadioGroup>\n\t);\n\t\n};\n\nexport const disabled = () => {\n\t\n\treturn (\n\t\t<RadioGroup\n\t\t\t// id is required for server side rendering\n\t\t\tid="disabled-radiogroup"\n\t\t\tdisabled\n\t\t\tlabel="options"\n\t\t\tdefaultChecked="option2"\n\t\t>\n\t\t\t<Radio value="option1">Option 1</Radio>\n\t\t\t<Radio value="option2">Option 2</Radio>\n\t\t\t<Radio value="option3">Option 3</Radio>\n\t\t</RadioGroup>\n\t);\n\t\n};\n\nconst ControlledRadioGroupWithState = () => {\n\tconst [ checked, setChecked ] = useState( 1 );\n\n\t\n\treturn (\n\t\t<RadioGroup\n\t\t\t// id is required for server side rendering\n\t\t\tid="controlled-radiogroup"\n\t\t\tlabel="options"\n\t\t\tchecked={ checked }\n\t\t\tonChange={ setChecked }\n\t\t>\n\t\t\t<Radio value={ 0 }>Option 1</Radio>\n\t\t\t<Radio value={ 1 }>Option 2</Radio>\n\t\t\t<Radio value={ 2 }>Option 3</Radio>\n\t\t</RadioGroup>\n\t);\n\t\n};\n\nexport const controlled = () => {\n\treturn <ControlledRadioGroupWithState />;\n};\n',locationsMap:{default:{startLoc:{col:24,line:26},endLoc:{col:1,line:41},startBody:{col:24,line:26},endBody:{col:1,line:41}},disabled:{startLoc:{col:24,line:43},endLoc:{col:1,line:59},startBody:{col:24,line:43},endBody:{col:1,line:59}},controlled:{startLoc:{col:26,line:81},endLoc:{col:1,line:83},startBody:{col:26,line:81},endBody:{col:1,line:83}}}},docs:{description:{component:"This component is deprecated. Use `RadioControl` or `ToggleGroupControl` instead."}}}};const _default=()=>(0,jsx_runtime.jsxs)(radio_group,{id:"default-radiogroup",label:"options",defaultChecked:"option2",children:[(0,jsx_runtime.jsx)(radio_group_radio,{value:"option1",children:"Option 1"}),(0,jsx_runtime.jsx)(radio_group_radio,{value:"option2",children:"Option 2"}),(0,jsx_runtime.jsx)(radio_group_radio,{value:"option3",children:"Option 3"})]});_default.displayName="_default";const disabled=()=>(0,jsx_runtime.jsxs)(radio_group,{id:"disabled-radiogroup",disabled:!0,label:"options",defaultChecked:"option2",children:[(0,jsx_runtime.jsx)(radio_group_radio,{value:"option1",children:"Option 1"}),(0,jsx_runtime.jsx)(radio_group_radio,{value:"option2",children:"Option 2"}),(0,jsx_runtime.jsx)(radio_group_radio,{value:"option3",children:"Option 3"})]});disabled.displayName="disabled";const ControlledRadioGroupWithState=()=>{const[checked,setChecked]=(0,react.useState)(1);return(0,jsx_runtime.jsxs)(radio_group,{id:"controlled-radiogroup",label:"options",checked:checked,onChange:setChecked,children:[(0,jsx_runtime.jsx)(radio_group_radio,{value:0,children:"Option 1"}),(0,jsx_runtime.jsx)(radio_group_radio,{value:1,children:"Option 2"}),(0,jsx_runtime.jsx)(radio_group_radio,{value:2,children:"Option 3"})]})};ControlledRadioGroupWithState.displayName="ControlledRadioGroupWithState";const controlled=()=>(0,jsx_runtime.jsx)(ControlledRadioGroupWithState,{});controlled.displayName="controlled",_default.__docgenInfo={description:"",methods:[],displayName:"_default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/radio-group/stories/index.js"]={name:"_default",docgenInfo:_default.__docgenInfo,path:"packages/components/src/radio-group/stories/index.js"}),disabled.__docgenInfo={description:"",methods:[],displayName:"disabled"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/radio-group/stories/index.js"]={name:"disabled",docgenInfo:disabled.__docgenInfo,path:"packages/components/src/radio-group/stories/index.js"}),controlled.__docgenInfo={description:"",methods:[],displayName:"controlled"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/radio-group/stories/index.js"]={name:"controlled",docgenInfo:controlled.__docgenInfo,path:"packages/components/src/radio-group/stories/index.js"})}}]);