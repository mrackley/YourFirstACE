(window["webpackJsonp_5eb14058_beb9_48e7_9c87_2b07d2658cbf_0_0_1"] = window["webpackJsonp_5eb14058_beb9_48e7_9c87_2b07d2658cbf_0_0_1"] || []).push([["OpenHub-property-pane"],{

/***/ "u0hr":
/*!*******************************************************************!*\
  !*** ./lib/adaptiveCardExtensions/openHub/OpenHubPropertyPane.js ***!
  \*******************************************************************/
/*! exports provided: OpenHubPropertyPane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenHubPropertyPane", function() { return OpenHubPropertyPane; });
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var OpenHubAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! OpenHubAdaptiveCardExtensionStrings */ "hV2x");
/* harmony import */ var OpenHubAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(OpenHubAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__);


var OpenHubPropertyPane = /** @class */ (function () {
    function OpenHubPropertyPane() {
    }
    OpenHubPropertyPane.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: { description: OpenHubAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneDescription"] },
                    groups: [
                        {
                            groupFields: [
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__["PropertyPaneTextField"])('title', {
                                    label: OpenHubAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__["TitleFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return OpenHubPropertyPane;
}());



/***/ })

}]);
//# sourceMappingURL=chunk.OpenHub-property-pane.js.map