var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { SPHttpClient } from '@microsoft/sp-http';
import { isMobile } from 'react-device-detect';
var CARD_VIEW_REGISTRY_ID = 'OpenHub_CARD_VIEW';
export var QUICK_VIEW_REGISTRY_ID = 'OpenHub_QUICK_VIEW';
var OpenHubAdaptiveCardExtension = /** @class */ (function (_super) {
    __extends(OpenHubAdaptiveCardExtension, _super);
    function OpenHubAdaptiveCardExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenHubAdaptiveCardExtension.prototype.onInit = function () {
        var _this = this;
        this.state = {
            primaryText: "My Card",
            description: "This is my card.",
            url: "https://www.bing.com",
            buttonText: "Open Bing"
        };
        this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, function () { return new CardView(); });
        this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, function () { return new QuickView(); });
        if (isMobile) {
            this.context.spHttpClient.get(this.context.pageContext.site.absoluteUrl + "/_api/SP.SPHSite/Details", SPHttpClient.configurations.v1)
                .then(function (response) {
                response.json().then(function (responseJSON) {
                    _this.setState({
                        primaryText: responseJSON.Title,
                        buttonText: "Open Site",
                        description: "Click to open up your Home Site",
                        url: responseJSON.Url
                    });
                });
            });
            this.isVisible = true;
        }
        else {
            this.isVisible = false;
        }
        return Promise.resolve();
    };
    OpenHubAdaptiveCardExtension.prototype.loadPropertyPaneResources = function () {
        var _this = this;
        return import(
        /* webpackChunkName: 'OpenHub-property-pane'*/
        './OpenHubPropertyPane')
            .then(function (component) {
            _this._deferredPropertyPane = new component.OpenHubPropertyPane();
        });
    };
    OpenHubAdaptiveCardExtension.prototype.renderCard = function () {
        return CARD_VIEW_REGISTRY_ID;
    };
    OpenHubAdaptiveCardExtension.prototype.getPropertyPaneConfiguration = function () {
        return this._deferredPropertyPane.getPropertyPaneConfiguration();
    };
    return OpenHubAdaptiveCardExtension;
}(BaseAdaptiveCardExtension));
export default OpenHubAdaptiveCardExtension;
//# sourceMappingURL=OpenHubAdaptiveCardExtension.js.map