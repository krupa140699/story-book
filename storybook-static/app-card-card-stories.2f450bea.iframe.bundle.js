(self.webpackChunkangular_latest=self.webpackChunkangular_latest||[]).push([[946],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/card/card.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'html, body {\n  height: 100%;\n}\n\nbody, p, h1, h2, h3, h4, h5 {\n  margin: 0;\n  font-family: Roboto, "Helvetica Neue", sans-serif;\n}\n\n.card {\n  background: white;\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n  width: 300px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  /* Counter Badge */\n}\n.card.full-width {\n  width: calc(100% - 30px);\n}\n.card:hover {\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);\n  transform: translateY(-5px);\n}\n.card .counter-badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background-color: red;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 4px 8px;\n  border-radius: 12px;\n}\n.card .card-footer {\n  margin-top: 10px;\n  display: flex;\n  gap: 10px;\n}\n.card button {\n  border: none;\n  padding: 6px 12px;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background 0.3s;\n}\n.card button:hover {\n  background: lightgray;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card .card-header .card-logo {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n}\n.card .card-header .card-title h3 {\n  margin: 0;\n  font-size: 16px;\n}\n.card .card-header .card-title p {\n  margin: 0;\n  font-size: 12px;\n  color: gray;\n}\n.card .card-description {\n  font-size: 14px;\n  color: #555;\n}\n.card .card-icon {\n  align-self: flex-end;\n  width: 24px;\n  height: 24px;\n}\n.card .tabs {\n  display: flex;\n  gap: 10px;\n  margin-top: 10px;\n}\n.card .tabs button {\n  background: none;\n  border: none;\n  color: #333;\n  font-size: 14px;\n  padding: 8px;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  border-radius: 0;\n}\n.card .tabs button.active {\n  border-bottom: 2px solid #666;\n}\n.card .tab-content {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #111;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/card/card.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>CardComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var card_componentngResource=__webpack_require__("./src/app/card/card.component.scss?ngResource"),card_componentngResource_default=__webpack_require__.n(card_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let CardComponent=class CardComponent{imageSrc="";title="";subtitle="";description="";backgroundColor="#ffffff";titleColor="#000000";subtitleColor="#000000";descColor="#000000";hoverColor="#f0f0f0";fullWidth=!1;isLiked=!1;isSaved=!1;liked=new core.EventEmitter;saved=new core.EventEmitter;paid=new core.EventEmitter;counter=0;hover=!1;activeTab="description";toggleLike(){this.isLiked=!this.isLiked,this.liked.emit()}toggleSave(){this.isSaved=!this.isSaved,this.saved.emit()}pay(){confirm("Are you sure you want to pay?")&&(this.counter++,this.paid.emit(this.counter))}selectTab(tab){this.activeTab=tab}static propDecorators={imageSrc:[{type:core.Input}],title:[{type:core.Input}],subtitle:[{type:core.Input}],description:[{type:core.Input}],backgroundColor:[{type:core.Input}],titleColor:[{type:core.Input}],subtitleColor:[{type:core.Input}],descColor:[{type:core.Input}],hoverColor:[{type:core.Input}],fullWidth:[{type:core.Input}],isLiked:[{type:core.Input}],isSaved:[{type:core.Input}],liked:[{type:core.Output}],saved:[{type:core.Output}],paid:[{type:core.Output}]}};CardComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-card",standalone:!0,template:'<div class="card" [ngClass]="{\'full-width\': fullWidth}" [ngStyle]="{\'background-color\': hover ? hoverColor : backgroundColor}" (mouseover)="hover = true"\r\n(mouseleave)="hover = false">\r\n<div class="counter-badge" *ngIf="counter >= 0">\r\n    {{ counter }}\r\n  </div>\r\n    <div class="card-header">\r\n      <img [src]="imageSrc" alt="Logo" class="card-logo" />\r\n      <div class="card-title">\r\n        <h3 [ngStyle]="{\'color\': titleColor}">{{ title }}</h3>\r\n        <p [ngStyle]="{\'color\': subtitleColor}">By {{ subtitle }}</p>\r\n      </div>\r\n    </div>\r\n    <p class="card-description" [ngStyle]="{\'color\': descColor}">{{ description }}</p>\r\n    <div class="tabs">\r\n        <button [class.active]="activeTab === \'description\'" (click)="selectTab(\'description\')">Description</button>\r\n        <button [class.active]="activeTab === \'materials\'" (click)="selectTab(\'materials\')">Materials</button>\r\n      </div>\r\n      <div class="tab-content">\r\n        <div *ngIf="activeTab === \'description\'">\r\n          <p>{{ description }}</p>\r\n        </div>\r\n        <div *ngIf="activeTab === \'materials\'">\r\n          <p>Materials info will go here.</p>\r\n        </div>\r\n      </div>\r\n    <div class="card-footer">\r\n        <button (click)="toggleLike(); $event.stopPropagation()">{{ isLiked ? \'❤️ Liked\' : \'♡ Like\' }}</button>\r\n        <button (click)="toggleSave(); $event.stopPropagation()">{{ isSaved ? \'📌 Saved\' : \'📍 Save\' }}</button>\r\n        <button (click)="pay(); $event.stopPropagation()">💳 Pay</button>\r\n      </div>\r\n  </div>\r\n  \r\n  ',imports:[common.CommonModule],styles:[card_componentngResource_default()]})],CardComponent)},"./src/app/card/card.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>card_stories});var card_component=__webpack_require__("./src/app/card/card.component.ts"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),__defProp=Object.defineProperty,ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}var preview_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(preview_exports,{argsEnhancers:()=>argsEnhancers,loaders:()=>loaders});var isInInitialArgs=(name,initialArgs)=>typeof initialArgs[name]>"u"&&!(name in initialArgs),argsEnhancers=[context=>{let{initialArgs,argTypes,parameters:{actions:actions2}}=context;return actions2?.disable||!argTypes?{}:Object.entries(argTypes).filter((([name,argType])=>!!argType.action)).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action("string"==typeof argType.action?argType.action:name)),acc)),{})},context=>{let{initialArgs,argTypes,id,parameters:{actions:actions2}}=context;if(!actions2||actions2.disable||!actions2.argTypesRegex||!argTypes)return{};let argTypesRegex=new RegExp(actions2.argTypesRegex);return Object.entries(argTypes).filter((([name])=>!!argTypesRegex.test(name))).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action(name,{implicit:!0,id})),acc)),{})}],subscribed=!1,loaders=[context=>{let{parameters:{actions:actions2}}=context;if(!actions2?.disable&&!subscribed&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in external_STORYBOOK_MODULE_GLOBAL_.global&&"function"==typeof external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__){(0,external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__)(((mock,args)=>{let name=mock.getMockName();"spy"!==name&&(!/^next\/.*::/.test(name)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some((prefix=>name.startsWith(prefix))))&&action(name)(args)})),subscribed=!0}}],core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");const card_stories={title:"Components/Card",component:card_component.i,tags:["autodocs"],parameters:{layout:"padded"}},Default={args:{imageSrc:"https://picsum.photos/300",title:"Convert & Pay",subtitle:"Payment",description:"Get more from your money, save fees and send free regular payments",backgroundColor:"#83d0e3",titleColor:"#403c3c",subtitleColor:"#1a1a1a",descColor:"#1a1a1a",hoverColor:"#b3b452",fullWidth:!1,counter:0,isLiked:!1,isSaved:!1},render:args=>({props:{...args,liked:new core.EventEmitter,saved:new core.EventEmitter,paid:new core.EventEmitter},template:`\n        <app-card \n          [imageSrc]="imageSrc"\n          [title]="title"\n          [subtitle]="subtitle"\n          [description]="description"\n          [backgroundColor]="backgroundColor"\n          [titleColor]="titleColor"\n          [subtitleColor]="subtitleColor"\n          [descColor]="descColor"\n          [hoverColor]="hoverColor"\n          [fullWidth]="fullWidth"\n          [counter]="counter"\n          [isLiked]="isLiked"\n          [isSaved]="isSaved"\n          (liked)="liked.emit(); ${action("liked event triggered")()}"\n          (saved)="saved.emit(); ${action("saved event triggered")()}"\n          (paid)="paid.emit(counter); ${action("paid event triggered")(args.counter)}"\n        ></app-card>\n      `})},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    imageSrc: "https://picsum.photos/300",\n    title: "Convert & Pay",\n    subtitle: \'Payment\',\n    description: \'Get more from your money, save fees and send free regular payments\',\n    backgroundColor: "#83d0e3",\n    titleColor: "#403c3c",\n    subtitleColor: \'#1a1a1a\',\n    descColor: \'#1a1a1a\',\n    hoverColor: "#b3b452",\n    fullWidth: false,\n    counter: 0,\n    isLiked: false,\n    isSaved: false\n  },\n  render: args => ({\n    props: {\n      ...args,\n      liked: new EventEmitter<void>(),\n      saved: new EventEmitter<void>(),\n      paid: new EventEmitter<number>()\n    },\n    template: `\n        <app-card \n          [imageSrc]="imageSrc"\n          [title]="title"\n          [subtitle]="subtitle"\n          [description]="description"\n          [backgroundColor]="backgroundColor"\n          [titleColor]="titleColor"\n          [subtitleColor]="subtitleColor"\n          [descColor]="descColor"\n          [hoverColor]="hoverColor"\n          [fullWidth]="fullWidth"\n          [counter]="counter"\n          [isLiked]="isLiked"\n          [isSaved]="isSaved"\n          (liked)="liked.emit(); ${action(\'liked event triggered\')()}"\n          (saved)="saved.emit(); ${action(\'saved event triggered\')()}"\n          (paid)="paid.emit(counter); ${action(\'paid event triggered\')(args.counter)}"\n        ></app-card>\n      `\n  })\n}',...Default.parameters?.docs?.source}}}}}]);