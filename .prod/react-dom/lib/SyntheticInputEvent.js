"use strict";function SyntheticInputEvent(t,n,e,c){return SyntheticEvent.call(this,t,n,e,c)}var SyntheticEvent=require("./SyntheticEvent"),InputEventInterface={data:null};SyntheticEvent.augmentClass(SyntheticInputEvent,InputEventInterface);module.exports=SyntheticInputEvent;