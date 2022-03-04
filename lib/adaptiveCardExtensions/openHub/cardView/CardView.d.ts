import { BasePrimaryTextCardView, IPrimaryTextCardParameters, IExternalLinkCardAction, IQuickViewCardAction, ICardButton } from '@microsoft/sp-adaptive-card-extension-base';
import { IOpenHubAdaptiveCardExtensionProps, IOpenHubAdaptiveCardExtensionState } from '../OpenHubAdaptiveCardExtension';
export declare class CardView extends BasePrimaryTextCardView<IOpenHubAdaptiveCardExtensionProps, IOpenHubAdaptiveCardExtensionState> {
    get cardButtons(): [ICardButton] | [ICardButton, ICardButton] | undefined;
    get data(): IPrimaryTextCardParameters;
    get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined;
}
//# sourceMappingURL=CardView.d.ts.map