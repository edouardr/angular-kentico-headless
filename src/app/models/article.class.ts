import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk';

import { ContentTypes } from '../content-types.class'

export class Article extends ContentItem {
  public title: Fields.TextField;
  public teaserImage: Fields.AssetsField;
  public summary: Fields.RichTextField;

  constructor() {
    super({
      propertyResolver: (fieldName: string) => {
        if (fieldName === ContentTypes.Artcile.fields.teaserImage) {
          return 'teaserImage';
        }
      }
    })
  }
}