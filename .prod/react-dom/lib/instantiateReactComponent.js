"use strict";function getDeclarationErrorAddendum(e){if(e){var t=e.getName();if(t){return" Check the render method of `"+t+"`."}}return""}function isInternalComponentType(e){return"function"==typeof e&&"undefined"!=typeof e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}function instantiateReactComponent(e,t){var n;if(null===e||e===!1){n=ReactEmptyComponent.create(instantiateReactComponent)}else{if("object"==typeof e){var o=e,r=o.type;if("function"!=typeof r&&"string"!=typeof r){var a="";a+=getDeclarationErrorAddendum(o._owner);_prodInvariant("130",null==r?r:typeof r,a)}if("string"==typeof o.type){n=ReactHostComponent.createInternalComponent(o)}else{if(isInternalComponentType(o.type)){n=new o.type(o);n.getHostNode||(n.getHostNode=n.getNativeNode)}else{n=new ReactCompositeComponentWrapper(o)}}}else{"string"==typeof e||"number"==typeof e?n=ReactHostComponent.createInstanceForText(e):_prodInvariant("131",typeof e)}}n._mountIndex=0;n._mountImage=null;return n}var _prodInvariant=require("./reactProdInvariant"),_assign=require("object-assign"),ReactCompositeComponent=require("./ReactCompositeComponent"),ReactEmptyComponent=require("./ReactEmptyComponent"),ReactHostComponent=require("./ReactHostComponent"),getNextDebugID=require("./getNextDebugID"),invariant=require("fbjs/lib/invariant"),warning=require("fbjs/lib/warning"),ReactCompositeComponentWrapper=function(e){this.construct(e)};_assign(ReactCompositeComponentWrapper.prototype,ReactCompositeComponent,{_instantiateReactComponent:instantiateReactComponent});module.exports=instantiateReactComponent;