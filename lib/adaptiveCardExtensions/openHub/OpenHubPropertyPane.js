import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import * as strings from 'OpenHubAdaptiveCardExtensionStrings';
var OpenHubPropertyPane = /** @class */ (function () {
    function OpenHubPropertyPane() {
    }
    OpenHubPropertyPane.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: { description: strings.PropertyPaneDescription },
                    groups: [
                        {
                            groupFields: [
                                PropertyPaneTextField('title', {
                                    label: strings.TitleFieldLabel
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
export { OpenHubPropertyPane };
//# sourceMappingURL=OpenHubPropertyPane.js.map