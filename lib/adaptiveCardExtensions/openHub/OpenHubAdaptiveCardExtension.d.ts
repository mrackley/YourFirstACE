import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
export interface IOpenHubAdaptiveCardExtensionProps {
    title: string;
}
export interface IOpenHubAdaptiveCardExtensionState {
    primaryText: any;
    description: any;
    url: any;
    buttonText: any;
}
export declare const QUICK_VIEW_REGISTRY_ID: string;
export default class OpenHubAdaptiveCardExtension extends BaseAdaptiveCardExtension<IOpenHubAdaptiveCardExtensionProps, IOpenHubAdaptiveCardExtensionState> {
    private _deferredPropertyPane;
    onInit(): Promise<void>;
    protected loadPropertyPaneResources(): Promise<void>;
    protected renderCard(): string | undefined;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=OpenHubAdaptiveCardExtension.d.ts.map