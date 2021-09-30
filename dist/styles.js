"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Svg = exports.Inner = exports.Wrapper = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
exports.Wrapper = styled_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-block;\n    width: 1em;\n    vertical-align: top;\n    fill: currentColor;\n"], ["\n    display: inline-block;\n    width: 1em;\n    vertical-align: top;\n    fill: currentColor;\n"])));
exports.Inner = styled_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 0;\n"], ["\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 0;\n"])));
exports.Svg = styled_1.default.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n"], ["\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
