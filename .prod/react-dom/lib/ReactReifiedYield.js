"use strict";var _require=require("./ReactFiber"),createFiberFromElementType=_require.createFiberFromElementType;exports.createReifiedYield=function(e){var r=createFiberFromElementType(e.continuation,e.key);return{continuation:r,props:e.props}};exports.createUpdatedReifiedYield=function(e,r){return{continuation:e.continuation,props:r.props}};