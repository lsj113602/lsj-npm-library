(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["vcc-i18n"] = {}));
})(this, (function (exports) { 'use strict';

  const add = (a, b) => {
    return a + b
  };

  const getI18n = (a, b) => {
    return add(a, b)
  };

  exports.getI18n = getI18n;

}));
