"use strict";function createInternalComponent(n){genericComponentClass?void 0:_prodInvariant("111",n.type);return new genericComponentClass(n)}function createInstanceForText(n){return new textComponentClass(n)}function isTextComponent(n){return n instanceof textComponentClass}var _prodInvariant=require("./reactProdInvariant"),invariant=require("fbjs/lib/invariant"),genericComponentClass=null,textComponentClass=null,ReactHostComponentInjection={injectGenericComponentClass:function(n){genericComponentClass=n},injectTextComponentClass:function(n){textComponentClass=n}},ReactHostComponent={createInternalComponent:createInternalComponent,createInstanceForText:createInstanceForText,isTextComponent:isTextComponent,injection:ReactHostComponentInjection};module.exports=ReactHostComponent;