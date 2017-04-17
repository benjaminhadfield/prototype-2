"use strict";function isPresto(){var t=window.opera;return"object"==typeof t&&"function"==typeof t.version&&parseInt(t.version(),10)<=12}function isKeypressCommand(t){return(t.ctrlKey||t.altKey||t.metaKey)&&!(t.ctrlKey&&t.altKey)}function getCompositionEventType(t){switch(t){case"topCompositionStart":return eventTypes.compositionStart;case"topCompositionEnd":return eventTypes.compositionEnd;case"topCompositionUpdate":return eventTypes.compositionUpdate}}function isFallbackCompositionStart(t,e){return"topKeyDown"===t&&e.keyCode===START_KEYCODE}function isFallbackCompositionEnd(t,e){switch(t){case"topKeyUp":return END_KEYCODES.indexOf(e.keyCode)!==-1;case"topKeyDown":return e.keyCode!==START_KEYCODE;case"topKeyPress":case"topMouseDown":case"topBlur":return!0;default:return!1}}function getDataFromCustomEvent(t){var e=t.detail;return"object"==typeof e&&"data"in e?e.data:null}function extractCompositionEvent(t,e,o,n){var i,r;canUseCompositionEvent?i=getCompositionEventType(t):currentComposition?isFallbackCompositionEnd(t,o)&&(i=eventTypes.compositionEnd):isFallbackCompositionStart(t,o)&&(i=eventTypes.compositionStart);if(!i){return null}useFallbackCompositionData&&(currentComposition||i!==eventTypes.compositionStart?i===eventTypes.compositionEnd&&currentComposition&&(r=currentComposition.getData()):currentComposition=FallbackCompositionState.getPooled(n));var s=SyntheticCompositionEvent.getPooled(i,e,o,n);if(r){s.data=r}else{var a=getDataFromCustomEvent(o);null!==a&&(s.data=a)}EventPropagators.accumulateTwoPhaseDispatches(s);return s}function getNativeBeforeInputChars(t,e){switch(t){case"topCompositionEnd":return getDataFromCustomEvent(e);case"topKeyPress":var o=e.which;if(o!==SPACEBAR_CODE){return null}hasSpaceKeypress=!0;return SPACEBAR_CHAR;case"topTextInput":var n=e.data;return n===SPACEBAR_CHAR&&hasSpaceKeypress?null:n;default:return null}}function getFallbackBeforeInputChars(t,e){if(currentComposition){if("topCompositionEnd"===t||!canUseCompositionEvent&&isFallbackCompositionEnd(t,e)){var o=currentComposition.getData();FallbackCompositionState.release(currentComposition);currentComposition=null;return o}return null}switch(t){case"topPaste":return null;case"topKeyPress":return e.which&&!isKeypressCommand(e)?String.fromCharCode(e.which):null;case"topCompositionEnd":return useFallbackCompositionData?null:e.data;default:return null}}function extractBeforeInputEvent(t,e,o,n){var i;i=canUseTextInputEvent?getNativeBeforeInputChars(t,o):getFallbackBeforeInputChars(t,o);if(!i){return null}var r=SyntheticInputEvent.getPooled(eventTypes.beforeInput,e,o,n);r.data=i;EventPropagators.accumulateTwoPhaseDispatches(r);return r}var EventPropagators=require("./EventPropagators"),ExecutionEnvironment=require("fbjs/lib/ExecutionEnvironment"),FallbackCompositionState=require("./FallbackCompositionState"),SyntheticCompositionEvent=require("./SyntheticCompositionEvent"),SyntheticInputEvent=require("./SyntheticInputEvent"),END_KEYCODES=[9,13,27,32],START_KEYCODE=229,canUseCompositionEvent=ExecutionEnvironment.canUseDOM&&"CompositionEvent"in window,documentMode=null;ExecutionEnvironment.canUseDOM&&"documentMode"in document&&(documentMode=document.documentMode);var canUseTextInputEvent=ExecutionEnvironment.canUseDOM&&"TextEvent"in window&&!documentMode&&!isPresto(),useFallbackCompositionData=ExecutionEnvironment.canUseDOM&&(!canUseCompositionEvent||documentMode&&documentMode>8&&documentMode<=11),SPACEBAR_CODE=32,SPACEBAR_CHAR=String.fromCharCode(SPACEBAR_CODE),eventTypes={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["topCompositionEnd","topKeyPress","topTextInput","topPaste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:["topBlur","topCompositionEnd","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:["topBlur","topCompositionStart","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:["topBlur","topCompositionUpdate","topKeyDown","topKeyPress","topKeyUp","topMouseDown"]}},hasSpaceKeypress=!1,currentComposition=null,BeforeInputEventPlugin={eventTypes:eventTypes,extractEvents:function(t,e,o,n){return[extractCompositionEvent(t,e,o,n),extractBeforeInputEvent(t,e,o,n)]}};module.exports=BeforeInputEventPlugin;