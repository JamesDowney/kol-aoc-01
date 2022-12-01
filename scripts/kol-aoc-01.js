"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = function(to, from, except, desc) {
  if (from && typeof from == "object" || typeof from == "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++)
      key = keys[i], !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: function(k) {
        return from[k];
      }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
};

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: function() {
    return main;
  }
});
module.exports = __toCommonJS(main_exports);

// kolmafia-polyfill.js
var kolmafia = require("kolmafia"), console = {
  log: kolmafia.print
};

// src/main.ts
var import_kolmafia = require("kolmafia");
function main() {
  var input = (0, import_kolmafia.fileToBuffer)("input.txt").split(/\n/g), count = 0, solutionArray = [];
  input.forEach(function(element) {
    element.charCodeAt(0) != 13 ? count += parseInt(element) : (solutionArray.push(count), count = 0);
  }), solutionArray.sort(function(a, b) {
    return b - a;
  }), (0, import_kolmafia.print)("solution 1 is: " + solutionArray[0]), (0, import_kolmafia.print)("solution 2 is: " + (solutionArray[0] + solutionArray[1] + solutionArray[2]));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
