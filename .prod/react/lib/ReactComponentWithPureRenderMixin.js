"use strict";var shallowCompare=require("./shallowCompare"),ReactComponentWithPureRenderMixin={shouldComponentUpdate:function(e,o){return shallowCompare(this,e,o)}};module.exports=ReactComponentWithPureRenderMixin;