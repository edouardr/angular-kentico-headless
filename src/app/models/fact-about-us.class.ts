import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk';

import { ContentTypes } from '../content-types.class'

export class FactAboutUs extends ContentItem {
  public title: Fields.TextField;
  public image: Fields.AssetsField;
  public description: Fields.RichTextField;

  constructor() {
    super();
  }
}
