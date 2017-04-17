"use strict";var _require=require("./ReactChildFiber"),reconcileChildFibers=_require.reconcileChildFibers,ReactTypeOfWork=require("./ReactTypeOfWork"),IndeterminateComponent=ReactTypeOfWork.IndeterminateComponent,FunctionalComponent=ReactTypeOfWork.FunctionalComponent,ClassComponent=ReactTypeOfWork.ClassComponent,HostContainer=ReactTypeOfWork.HostContainer,HostComponent=ReactTypeOfWork.HostComponent,CoroutineComponent=ReactTypeOfWork.CoroutineComponent,CoroutineHandlerPhase=ReactTypeOfWork.CoroutineHandlerPhase,YieldComponent=ReactTypeOfWork.YieldComponent;module.exports=function(e){function t(e){if(e.firstEffect){e.nextEffect=e.firstEffect;e.firstEffect=e}else{e.firstEffect=e;e.lastEffect=e}}function o(e){e.lastEffect?e.lastEffect.nextEffect=e:e.firstEffect=e;e.lastEffect=e}function n(e,t){t.output=e&&!e.sibling?e.output:e;t.memoizedProps=t.pendingProps}function r(e,t){if(t){if(void 0!==t.tag){var o=t;do{r(e,o.output);o=o.sibling}while(o)}else{e.push(t)}}else{}}function i(e,t){var o=t.pendingProps;if(!o){throw new Error("Should be resolved by now")}t.tag=CoroutineHandlerPhase;for(var n=[],i=t.child;i;){r(n,i.output);i=i.sibling}var a=o.handler,s=o.props,l=a(s,n),u=e?e.stateNode:null,p=t.pendingWorkPriority;t.stateNode=reconcileChildFibers(t,u,l,p);return t.stateNode}function a(e,r){switch(r.tag){case FunctionalComponent:n(r.child,r);return null;case ClassComponent:n(r.child,r);var a=r.stateNode,u=a.state,p=a.props;r.memoizedState=u;r.memoizedProps=p;r.callbackList=r.updateQueue;o(r);return null;case HostContainer:n(r.child,r);t(r);return null;case HostComponent:var c=r.pendingProps,f=r.child,d=f&&!f.sibling?f.output:f;if(e&&null!=r.stateNode){var m=e.memoizedProps;c||(c=m);var C=r.stateNode;l(C,m,c,d)&&t(r);r.output=C}else{if(!c){if(null===r.stateNode){throw new Error("We must have new props for new mounts.")}return null}var h=s(r.type,c,d);r.stateNode=h;r.output=h}r.memoizedProps=c;return null;case CoroutineComponent:return i(e,r);case CoroutineHandlerPhase:n(r.stateNode,r);r.tag=CoroutineComponent;return null;case YieldComponent:return null;case IndeterminateComponent:throw new Error("An indeterminate component should have become determinate before completing.");default:throw new Error("Unknown unit of work tag")}}var s=e.createInstance,l=e.prepareUpdate;return{completeWork:a}};