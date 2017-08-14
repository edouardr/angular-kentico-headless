import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk';

import { ContentTypes } from '../content-types.class'

export class HeroUnit extends ContentItem {
  public title: Fields.TextField;
  public image: Fields.AssetsField;
  public marketingMessage: Fields.RichTextField;

  constructor() {
    super({
      propertyResolver: (fieldName: string) => {
        if (fieldName === ContentTypes.HeroUnit.fields.marketingMessage) {
          return 'marketingMessage';
        }
      }
    });
  }
}
