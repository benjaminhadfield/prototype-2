"use strict";function FallbackCompositionState(t){this._root=t;this._startText=this.getText();this._fallbackText=null}var _assign=require("object-assign"),PooledClass=require("./PooledClass"),getTextContentAccessor=require("./getTextContentAccessor");_assign(FallbackCompositionState.prototype,{destructor:function(){this._root=null;this._startText=null;this._fallbackText=null},getText:function(){return"value"in this._root?this._root.value:this._root[getTextContentAccessor()]},getData:function(){if(this._fallbackText){return this._fallbackText}var t,e,o=this._startText,s=o.length,a=this.getText(),l=a.length;for(t=0;t<s&&o[t]===a[t];t++){}var i=s-t;for(e=1;e<=i&&o[s-e]===a[l-e];e++){}var r=e>1?1-e:void 0;this._fallbackText=a.slice(t,r);return this._fallbackText}});PooledClass.addPoolingTo(FallbackCompositionState);module.exports=FallbackCompositionState;