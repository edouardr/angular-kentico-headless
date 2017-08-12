import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk';

import { ContentTypes } from '../content-types.class'

export class Cafe extends ContentItem {
  public title: Fields.TextField;

  constructor() {
    super()
  }
}
