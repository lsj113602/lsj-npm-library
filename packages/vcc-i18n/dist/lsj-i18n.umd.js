(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@lsj/lsj-utils')) :
  typeof define === 'function' && define.amd ? define(['exports', '@lsj/lsj-utils'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["lsj-i18n"] = {}, global.lsjUtils));
})(this, (function (exports, lsjUtils) { 'use strict';

  const getI18n = (a, b) => {
    return lsjUtils.add(a, b)
  };

  exports.getI18n = getI18n;

}));
