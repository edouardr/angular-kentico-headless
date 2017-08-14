import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk';
import { ContentTypes } from '../content-types.class'

export class Cafe extends ContentItem {
  public street: Fields.TextField;
  public city: Fields.TextField;
  public country: Fields.TextField;
  public state: Fields.TextField;
  public zipCode: Fields.TextField;
  public phone: Fields.TextField;
  public email: Fields.TextField;
  public photo: Fields.AssetsField;

  constructor() {
    super({
      propertyResolver: (fieldName: string) => {
        if (fieldName === ContentTypes.Cafe.fields.zipCode) {
          return 'zipCode';
        }
      }
    });
  }
}
