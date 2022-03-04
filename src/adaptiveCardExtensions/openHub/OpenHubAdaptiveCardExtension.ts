import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { OpenHubPropertyPane } from './OpenHubPropertyPane';
import { SPHttpClient, SPHttpClientResponse, SPHttpClientConfiguration } from '@microsoft/sp-http';  
import { isMobile, isMobileOnly, isTablet, isDesktop, isIOS, isAndroid } from 'react-device-detect';


export interface IOpenHubAdaptiveCardExtensionProps {
  title: string;
}

export interface IOpenHubAdaptiveCardExtensionState {
  primaryText: any;
  description: any;
  url: any;
  buttonText: any;
}

const CARD_VIEW_REGISTRY_ID: string = 'OpenHub_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'OpenHub_QUICK_VIEW';

export default class OpenHubAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IOpenHubAdaptiveCardExtensionProps,
  IOpenHubAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: OpenHubPropertyPane | undefined;

  public onInit(): Promise<void> {
    this.state = {
      primaryText: "My Card",
      description: "This is my card.",
      url: "https://www.bing.com", 
      buttonText: "Open Bing"
     };

    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

    if (isMobile)
    {
    this.context.spHttpClient.get(`${this.context.pageContext.site.absoluteUrl}/_api/SP.SPHSite/Details`,  
        SPHttpClient.configurations.v1)  
        .then((response: SPHttpClientResponse) => {  
          response.json().then((responseJSON: any) => {
            
            this.setState({
              primaryText: responseJSON.Title,
	            buttonText: "Open Site",
              description: "Click to open up your Home Site",
              url: responseJSON.Url
            });

          });  
        });  
        this.isVisible = true;
       
      } else {
        this.isVisible = false;
      }


    return Promise.resolve();
  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'OpenHub-property-pane'*/
      './OpenHubPropertyPane'
    )
      .then(
        (component) => {
          this._deferredPropertyPane = new component.OpenHubPropertyPane();
        }
      );
  }

  protected renderCard(): string | undefined {
    return CARD_VIEW_REGISTRY_ID;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return this._deferredPropertyPane!.getPropertyPaneConfiguration();
  }
}
