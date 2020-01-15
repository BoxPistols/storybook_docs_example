(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{342:function(module,exports,__webpack_require__){__webpack_require__(343),__webpack_require__(446),module.exports=__webpack_require__(447)},447:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(203);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.load)(__webpack_require__(601),module),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.load)(__webpack_require__(602),module)}.call(this,__webpack_require__(239)(module))},601:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=601},602:function(module,exports,__webpack_require__){var map={"./components/Button/Button.stories.mdx":744};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=602},744:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var objectSpread=__webpack_require__(340),objectWithoutProperties=__webpack_require__(341),react=__webpack_require__(0),react_default=__webpack_require__.n(react),index_es=__webpack_require__(9),blocks=__webpack_require__(36),dist=__webpack_require__(112),style={color:"#fff",backgroundColor:"#1a29b0",borderColor:"#00e676",border:"1px solid transparent",borderRadius:"4px",fontWeight:400,fontSize:"14px",height:"32px",lineHeight:1.5,outline:0,padding:"0px 15px"},Button_Button=function Button(_a){var label=_a.label,onClick=_a.onClick,_b=_a.disabled,disabled=void 0!==_b&&_b;return react_default.a.createElement("button",{type:"button",style:style,onClick:onClick,disabled:disabled},label)};Button_Button.defaultProps={disabled:!1};var components_Button_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"ラベル：ボタンに表示される文字列",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"クリック時のイベントハンドラ",name:"onClick",required:!0,type:{name:"(event: any) => void"}},disabled:{defaultValue:{value:"false"},description:"使用不可にするか",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var slicedToArray=__webpack_require__(339),with_state=function(){var _useState=Object(react.useState)(1e3),_useState2=Object(slicedToArray.a)(_useState,2),counter=_useState2[0],setCounter=_useState2[1];return react_default.a.createElement(components_Button_Button,{label:counter,onClick:function handleClick(){setCounter(function(current){return current+1})}})};__webpack_require__.d(__webpack_exports__,"btn",function(){return Button_stories_btn}),__webpack_require__.d(__webpack_exports__,"basic",function(){return Button_stories_basic}),__webpack_require__.d(__webpack_exports__,"withState",function(){return Button_stories_withState});var layoutProps={},MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Object(objectWithoutProperties.a)(_ref,["components"]);return Object(index_es.mdx)(MDXLayout,Object.assign({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(index_es.mdx)(blocks.Meta,{title:"セクションA|Components/Button",parameters:{component:components_Button_Button,notes:"メモ：",info:"クリックカウンター"},mdxType:"Meta"}),Object(index_es.mdx)("h1",null,"Button"),Object(index_es.mdx)("h2",null,"解説"),Object(index_es.mdx)("h3",null,"マークダウン記述"),Object(index_es.mdx)("ul",null,Object(index_es.mdx)("li",{parentName:"ul"},"Buttonのコードを書きます")),Object(index_es.mdx)("h4",null,"チェックポイント"),Object(index_es.mdx)("ol",null,Object(index_es.mdx)("li",{parentName:"ol"},"チェックA"),Object(index_es.mdx)("li",{parentName:"ol"},"チェックB"),Object(index_es.mdx)("li",{parentName:"ol"},"チェックC")),Object(index_es.mdx)(blocks.Source,{code:"Copy出来るコードです",mdxType:"Source"}),Object(index_es.mdx)(blocks.Preview,{withSource:"close",mdxType:"Preview"},Object(index_es.mdx)(blocks.Story,{name:"btn",mdxType:"Story"},Object(index_es.mdx)(components_Button_Button,{label:"折りたたみコード",onClick:Object(dist.action)("clicked"),mdxType:"Button"}))),Object(index_es.mdx)(blocks.Preview,{withSource:"open",mdxType:"Preview"},Object(index_es.mdx)(blocks.Story,{name:"basic",mdxType:"Story"},Object(index_es.mdx)(components_Button_Button,{label:"this is src",onClick:Object(dist.action)("clicked"),mdxType:"Button"}))),Object(index_es.mdx)(blocks.Props,{of:".",mdxType:"Props"}),Object(index_es.mdx)(blocks.Description,{of:".",type:"notes",mdxType:"Description"}),Object(index_es.mdx)(blocks.Description,{of:".",type:"info",mdxType:"Description"}),Object(index_es.mdx)(blocks.Preview,{mdxType:"Preview"},Object(index_es.mdx)(blocks.Story,{name:"with state",mdxType:"Story"},Object(index_es.mdx)(with_state,{mdxType:"ButtonWithState"}))))}MDXContent.isMDXComponent=!0;var Button_stories_btn=function btn(){return Object(index_es.mdx)(components_Button_Button,{label:"折りたたみコード",onClick:Object(dist.action)("clicked")})};Button_stories_btn.parameters={mdxSource:"<Button label=\"折りたたみコード\" onClick={action('clicked')} />"};var Button_stories_basic=function basic(){return Object(index_es.mdx)(components_Button_Button,{label:"this is src",onClick:Object(dist.action)("clicked")})};Button_stories_basic.parameters={mdxSource:"<Button label=\"this is src\" onClick={action('clicked')} />"};var Button_stories_withState=function withState(){return Object(index_es.mdx)(with_state,null)};Button_stories_withState.title="with state",Button_stories_withState.parameters={mdxSource:"<ButtonWithState />"};var componentMeta={title:"セクションA|Components/Button",parameters:{component:components_Button_Button,notes:"メモ：",info:"クリックカウンター"}},mdxKind=componentMeta.title||componentMeta.displayName;componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=function WrappedMDXContent(_ref2){var context=_ref2.context;return Object(index_es.mdx)(blocks.DocsContainer,{context:Object(objectSpread.a)({},context,{mdxKind:mdxKind}),content:MDXContent})};__webpack_exports__.default=componentMeta;Button_stories_btn.__docgenInfo={description:"",methods:[],displayName:"btn"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.stories.mdx"]={name:"btn",docgenInfo:Button_stories_btn.__docgenInfo,path:"src/components/Button/Button.stories.mdx"}),Button_stories_basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.stories.mdx"]={name:"basic",docgenInfo:Button_stories_basic.__docgenInfo,path:"src/components/Button/Button.stories.mdx"}),Button_stories_withState.__docgenInfo={description:"",methods:[],displayName:"withState"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.stories.mdx"]={name:"withState",docgenInfo:Button_stories_withState.__docgenInfo,path:"src/components/Button/Button.stories.mdx"})}},[[342,1,2]]]);
//# sourceMappingURL=main.4db1ece37b5fad5a2e1e.bundle.js.map