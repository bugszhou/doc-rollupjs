(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash/merge')) :
  typeof define === 'function' && define.amd ? define(['exports', 'lodash/merge'], factory) :
  (global = global || self, (function () {
    var current = global.demo;
    var exports = global.demo = {};
    factory(exports, global.merge);
    exports.noConflict = function () { global.demo = current; return exports; };
  }()));
}(this, function (exports, merge) { 'use strict';

  merge = merge && merge.hasOwnProperty('default') ? merge['default'] : merge;

  function add(a,b){for(var i=a.length-1,j=b.length-1,carry=0,ret="";0<=i||0<=j;){var x=0,y=0,sum=void 0;0<=i&&(x=a[i]-"0",i--),0<=j&&(y=b[j]-"0",j--),sum=x+y+carry,10<=sum?(carry=1,sum-=10):carry=0,ret=sum+ret;}return carry&&(ret=carry+ret),ret}

  exports.merge = merge;
  exports.add = add;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=demo.js.map
