!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);r(1);var n,a=document.getElementById("value"),u=document.getElementById("value2"),l="",o=[];function c(e,t,r){var n;switch(r){case"/":n=e/t;break;case"-":n=e-t;break;case"+":n=e+t;break;case"*":n=e*t}u.value=n}function i(e){u.value=l,a.value="",n=e}buttons.addEventListener("click",(function(e){if(!e.target.closest("button"))return;if(a.value.length>=13)return!1;var t=[0,1,2,3,4,5,6,7,8,9,"."];"clear"==e.target.innerText&&(a.value="",u.value="",l=null);for(var r=0;r<t.length;r++)e.target.innerText==t[r]&&(l+=t[r],a.value+=t[r]);if("="==e.target.innerText){var f=+a.value,s=+u.value;switch(n){case"/":c(s,f,"/"),l=u.value,a.value="";break;case"*":c(s,f,"*"),l=u.value,a.value="";break;case"+":c(s,f,"+"),l=u.value,a.value="";break;case"-":c(s,f,"-"),l=u.value,a.value=""}}else!function(e){switch(e){case"/":i("/");break;case"*":i("*");break;case"+":i("+");break;case"-":i("-")}}(e.target.innerText),console.log(o);o.push(e.target.innerText)}))},function(e,t,r){}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJvcGVyYXRvciIsImlucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlucHV0MiIsInRtcCIsImFyciIsIm9wZXJhdGlvbiIsImZpcnN0Iiwic2Vjb25kIiwicmVzdWx0Iiwic2V0VmFsIiwib3BlcmF0b3JhcyIsImJ1dHRvbnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJsZW5ndGgiLCJudW0iLCJpbm5lclRleHQiLCJ3aGljaE9wZXJhdG9yIiwiY29uc29sZSIsImxvZyIsInB1c2giXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWViLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFbUIsT0FBTyxLQVF2RHJCLEVBQW9Cc0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2QyxHQURVLEVBQVBBLElBQVVGLEVBQVFyQixFQUFvQnFCLElBQy9CLEVBQVBFLEVBQVUsT0FBT0YsRUFDcEIsR0FBVyxFQUFQRSxHQUE4QixpQkFBVkYsR0FBc0JBLEdBQVNBLEVBQU1HLFdBQVksT0FBT0gsRUFDaEYsSUFBSUksRUFBS1gsT0FBT1ksT0FBTyxNQUd2QixHQUZBMUIsRUFBb0JrQixFQUFFTyxHQUN0QlgsT0FBT0MsZUFBZVUsRUFBSSxVQUFXLENBQUVULFlBQVksRUFBTUssTUFBT0EsSUFDdEQsRUFBUEUsR0FBNEIsaUJBQVRGLEVBQW1CLElBQUksSUFBSU0sS0FBT04sRUFBT3JCLEVBQW9CVSxFQUFFZSxFQUFJRSxFQUFLLFNBQVNBLEdBQU8sT0FBT04sRUFBTU0sSUFBUUMsS0FBSyxLQUFNRCxJQUM5SSxPQUFPRixHQUlSekIsRUFBb0I2QixFQUFJLFNBQVMxQixHQUNoQyxJQUFJUyxFQUFTVCxHQUFVQSxFQUFPcUIsV0FDN0IsV0FBd0IsT0FBT3JCLEVBQWdCLFNBQy9DLFdBQThCLE9BQU9BLEdBRXRDLE9BREFILEVBQW9CVSxFQUFFRSxFQUFRLElBQUtBLEdBQzVCQSxHQUlSWixFQUFvQmEsRUFBSSxTQUFTaUIsRUFBUUMsR0FBWSxPQUFPakIsT0FBT2tCLFVBQVVDLGVBQWUxQixLQUFLdUIsRUFBUUMsSUFHekcvQixFQUFvQmtDLEVBQUksSUFJakJsQyxFQUFvQkEsRUFBb0JtQyxFQUFJLEcsK0JDakZyRCxnQkFHSUMsRUFIQUMsRUFBUUMsU0FBU0MsZUFBZSxTQUNoQ0MsRUFBU0YsU0FBU0MsZUFBZSxVQUNqQ0UsRUFBSyxHQUVMQyxFQUFLLEdBNERULFNBQVNDLEVBQVVDLEVBQU9DLEVBQVFULEdBTzlCLElBQUlVLEVBQ0osT0FBUVYsR0FDSixJQUFLLElBQ0RVLEVBQVNGLEVBQVFDLEVBQ2pCLE1BQ0osSUFBSyxJQUNEQyxFQUFTRixFQUFRQyxFQUNqQixNQUNKLElBQUssSUFDREMsRUFBU0YsRUFBUUMsRUFDakIsTUFDSixJQUFLLElBQ0RDLEVBQVNGLEVBQVFDLEVBVWpCTCxFQUFPbkIsTUFBUXlCLEVBd0IzQixTQUFTQyxFQUFPQyxHQUVaUixFQUFPbkIsTUFBUW9CLEVBQ2ZKLEVBQU1oQixNQUFRLEdBRWRlLEVBQVdZLEVBckhmQyxRQUFRQyxpQkFBaUIsU0FJekIsU0FBMEJDLEdBRXRCLElBQUtBLEVBQUVDLE9BQU9DLFFBQVEsVUFBVyxPQUNqQyxHQUFHaEIsRUFBTWhCLE1BQU1pQyxRQUFVLEdBQ3JCLE9BQU8sRUFFWCxJQUFJQyxFQUFNLENBQUMsRUFBRyxFQUFHLEVBQUcsRUFBRyxFQUFHLEVBQUcsRUFBRyxFQUFHLEVBQUcsRUFBRyxLQUNoQixTQUF0QkosRUFBRUMsT0FBT0ksWUE4SFpuQixFQUFNaEIsTUFBUSxHQUNkbUIsRUFBT25CLE1BQVEsR0FDZm9CLEVBQU0sTUE1SE4sSUFBSyxJQUFJckMsRUFBSSxFQUFHQSxFQUFJbUQsRUFBSUQsT0FBUWxELElBQ3hCK0MsRUFBRUMsT0FBT0ksV0FBYUQsRUFBSW5ELEtBQzFCcUMsR0FBT2MsRUFBSW5ELEdBQ1hpQyxFQUFNaEIsT0FBU2tDLEVBQUluRCxJQUszQixHQUEwQixLQUF0QitDLEVBQUVDLE9BQU9JLFVBQWtCLENBQzNCLElBQUlYLEdBQVVSLEVBQU1oQixNQUNoQnVCLEdBQVNKLEVBQU9uQixNQUNwQixPQUFRZSxHQUNKLElBQUssSUFDRE8sRUFBVUMsRUFBT0MsRUFBUSxLQUN6QkosRUFBTUQsRUFBT25CLE1BQ2JnQixFQUFNaEIsTUFBUSxHQUNkLE1BQ0osSUFBSyxJQUNEc0IsRUFBVUMsRUFBT0MsRUFBUSxLQUN6QkosRUFBTUQsRUFBT25CLE1BQ2JnQixFQUFNaEIsTUFBUSxHQUNkLE1BQ0osSUFBSyxJQUNEc0IsRUFBVUMsRUFBT0MsRUFBUSxLQUN6QkosRUFBTUQsRUFBT25CLE1BQ2JnQixFQUFNaEIsTUFBUSxHQUNkLE1BQ0osSUFBSyxJQUNEc0IsRUFBVUMsRUFBT0MsRUFBUSxLQUN6QkosRUFBTUQsRUFBT25CLE1BQ2JnQixFQUFNaEIsTUFBUSxTQWdEOUIsU0FBdUJBLEdBRW5CLE9BQVFBLEdBQ0osSUFBSyxJQUNEMEIsRUFBTyxLQUNQLE1BQ0osSUFBSyxJQUNEQSxFQUFPLEtBQ1AsTUFDSixJQUFLLElBQ0RBLEVBQU8sS0FDUCxNQUNKLElBQUssSUFDREEsRUFBTyxNQXREWFUsQ0FBY04sRUFBRUMsT0FBT0ksV0FDdkJFLFFBQVFDLElBQUlqQixHQUVoQkEsRUFBSWtCLEtBQUtULEVBQUVDLE9BQU9JLGUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXG52YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbHVlXCIpO1xudmFyIGlucHV0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsdWUyXCIpO1xudmFyIHRtcCA9XCJcIjtcbnZhciBvcGVyYXRvcjtcbnZhciBhcnIgPVtdO1xuYnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbnVtYmVyc1ZhbHVlRnVuYyk7XG52YXIgc2Vjb25kO1xudmFyIGZpcnN0O1xuXG5mdW5jdGlvbiBudW1iZXJzVmFsdWVGdW5jKGUpIHtcblxuICAgIGlmICghZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykpIHJldHVybjtcbiAgICBpZihpbnB1dC52YWx1ZS5sZW5ndGggPj0gMTMpe1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgdmFyIG51bSA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCBcIi5cIl07XG4gICAgaWYoZS50YXJnZXQuaW5uZXJUZXh0ID09IFwiY2xlYXJcIil7XG4gICAgICAgIGNsZWFyKCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PSBudW1baV0pIHtcbiAgICAgICAgICAgIHRtcCArPSBudW1baV07XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSArPSBudW1baV07XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGlucHV0LnZhbHVlLCB0bXApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09IFwiPVwiKSB7XG4gICAgICAgIHZhciBzZWNvbmQgPSAraW5wdXQudmFsdWU7XG4gICAgICAgIHZhciBmaXJzdCA9ICtpbnB1dDIudmFsdWU7XG4gICAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgXCIvXCI6XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uKGZpcnN0LCBzZWNvbmQsIFwiL1wiKTtcbiAgICAgICAgICAgICAgICB0bXAgPSBpbnB1dDIudmFsdWU7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIipcIjpcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24oZmlyc3QsIHNlY29uZCwgXCIqXCIpO1xuICAgICAgICAgICAgICAgIHRtcCA9IGlucHV0Mi52YWx1ZTtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiK1wiOlxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbihmaXJzdCwgc2Vjb25kLCBcIitcIik7XG4gICAgICAgICAgICAgICAgdG1wID0gaW5wdXQyLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCItXCI6XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uKGZpcnN0LCBzZWNvbmQsIFwiLVwiKTtcbiAgICAgICAgICAgICAgICB0bXAgPSBpbnB1dDIudmFsdWU7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgd2hpY2hPcGVyYXRvcihlLnRhcmdldC5pbm5lclRleHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnIpXG4gICAgfVxuICAgIGFyci5wdXNoKGUudGFyZ2V0LmlubmVyVGV4dCk7XG5cbn1cblxuZnVuY3Rpb24gb3BlcmF0aW9uKGZpcnN0LCBzZWNvbmQsIG9wZXJhdG9yKSB7XG4gICAgLy8gdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIC8vIHZhciB2YWx1ZXMgPSB7XG4gICAgLy8gICAgIGZpcnN0OmZpcnN0LFxuICAgIC8vICAgICBzZWNvbmQ6c2Vjb25kLFxuICAgIC8vICAgICBvcGVyYXRvcjpvcGVyYXRvclxuICAgIC8vIH07XG4gICAgbGV0IHJlc3VsdDtcbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgXCIvXCI6XG4gICAgICAgICAgICByZXN1bHQgPSBmaXJzdCAvIHNlY29uZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiLVwiOlxuICAgICAgICAgICAgcmVzdWx0ID0gZmlyc3QgLSBzZWNvbmQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIitcIjpcbiAgICAgICAgICAgIHJlc3VsdCA9IGZpcnN0ICsgc2Vjb25kO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIqXCI6XG4gICAgICAgICAgICByZXN1bHQgPSBmaXJzdCAqIHNlY29uZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyB2YXIgbmV3U3R1ZGVudFZhbHVlO1xuICAgIC8vIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9zZXJ2ZXIvXCIpO1xuICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAvLyB4aHIuc2VuZChKU09OLnN0cmluZ2lmeSh2YWx1ZXMpKTtcbiAgICAvLyB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2UpXG4gICAgICAgICAgICBpbnB1dDIudmFsdWUgPSByZXN1bHQ7XG4gICAgICAgIC8vIH1cbiAgICAvLyB9XG5cbn1cbmZ1bmN0aW9uIHdoaWNoT3BlcmF0b3IodmFsdWUpIHtcblxuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgY2FzZSBcIi9cIjpcbiAgICAgICAgICAgIHNldFZhbChcIi9cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIipcIjpcbiAgICAgICAgICAgIHNldFZhbChcIipcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIitcIjpcbiAgICAgICAgICAgIHNldFZhbChcIitcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgICAgIHNldFZhbChcIi1cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gc2V0VmFsKG9wZXJhdG9yYXMpIHtcblxuICAgIGlucHV0Mi52YWx1ZSA9IHRtcDtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgICBvcGVyYXRvciA9IG9wZXJhdG9yYXM7XG5cbn1cblxuZnVuY3Rpb24gc3VtKGZpcnN0LCBzZWNvbmQpIHtcbiAgICByZXR1cm4gIGZpcnN0ICsgc2Vjb25kO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBseShmaXJzdCwgc2Vjb25kKSB7XG4gICAgcmV0dXJuICBmaXJzdCAqIHNlY29uZDtcbn1cblxuZnVuY3Rpb24gZGl2aW5lKGZpcnN0LCBzZWNvbmQpIHtcbiAgICByZXR1cm4gIGZpcnN0IC8gc2Vjb25kO1xufVxuXG5mdW5jdGlvbiBtaW51cyhmaXJzdCwgc2Vjb25kKSB7XG4gICAgcmV0dXJuICBmaXJzdCAtIHNlY29uZDtcbn1cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBpbnB1dDIudmFsdWUgPSBcIlwiO1xuICAgIHRtcCA9IG51bGw7XG59XG4vLyBtb2R1bGUuZXhwb3J0cyA9e1xuLy8gICAgIHN1bSxcbi8vICAgICBtdWx0aXBseSxcbi8vICAgICBkaXZpbmUsXG4vLyAgICAgbWludXMsXG4vLyAgICAgc2V0VmFsLFxuLy8gICAgIHdoaWNoT3BlcmF0b3IsXG4vL1xuLy8gfVxuXG5cbmltcG9ydCBcIi4vcHVibGljL3N0eWxlL2luZGV4Lmxlc3NcIlxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9