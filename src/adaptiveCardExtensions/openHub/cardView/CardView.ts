import {
  BasePrimaryTextCardView,
  IPrimaryTextCardParameters,
  IExternalLinkCardAction,
  IQuickViewCardAction,
  ICardButton
} from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'OpenHubAdaptiveCardExtensionStrings';
import { IOpenHubAdaptiveCardExtensionProps, IOpenHubAdaptiveCardExtensionState, QUICK_VIEW_REGISTRY_ID } from '../OpenHubAdaptiveCardExtension';

export class CardView extends BasePrimaryTextCardView<IOpenHubAdaptiveCardExtensionProps, IOpenHubAdaptiveCardExtensionState> {
  public get cardButtons(): [ICardButton] | [ICardButton, ICardButton] | undefined {
    return [
      {
        title: this.state.buttonText,
        action: {
          type: 'ExternalLink',
          parameters: {
            target: this.state.url
          }
        }
      }
    ];
  }

  public get data(): IPrimaryTextCardParameters {
    return {
      primaryText: this.state.primaryText,
      description: this.state.description,
      title: this.properties.title
    };
  }

  public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
    return {
      type: 'ExternalLink',
      parameters: {
        target: 'https://www.bing.com'
      }
    };
  }
}
