"use strict";function isInDocument(e){return containsNode(document.documentElement,e)}var ReactDOMSelection=require("./ReactDOMSelection"),containsNode=require("fbjs/lib/containsNode"),focusNode=require("fbjs/lib/focusNode"),getActiveElement=require("fbjs/lib/getActiveElement"),ReactInputSelection={hasSelectionCapabilities:function(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&"text"===e.type||"textarea"===t||"true"===e.contentEditable)},getSelectionInformation:function(){var e=getActiveElement();return{focusedElem:e,selectionRange:ReactInputSelection.hasSelectionCapabilities(e)?ReactInputSelection.getSelection(e):null}},restoreSelection:function(e){var t=getActiveElement(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&isInDocument(n)){ReactInputSelection.hasSelectionCapabilities(n)&&ReactInputSelection.setSelection(n,o);focusNode(n)}},getSelection:function(e){var t;if("selectionStart"in e){t={start:e.selectionStart,end:e.selectionEnd}}else{if(document.selection&&e.nodeName&&"input"===e.nodeName.toLowerCase()){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else{t=ReactDOMSelection.getOffsets(e)}}return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,o=t.end;void 0===o&&(o=n);if("selectionStart"in e){e.selectionStart=n;e.selectionEnd=Math.min(o,e.value.length)}else{if(document.selection&&e.nodeName&&"input"===e.nodeName.toLowerCase()){var c=e.createTextRange();c.collapse(!0);c.moveStart("character",n);c.moveEnd("character",o-n);c.select()}else{ReactDOMSelection.setOffsets(e,t)}}}};module.exports=ReactInputSelection;