import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk';
import { ContentTypes } from '../content-types.class'
import { codeName, getPropertyForField } from '../providers/codename-decorator';

export class Cafe extends ContentItem {
  public street: Fields.TextField;
  public city: Fields.TextField;
  public country: Fields.TextField;
  public state: Fields.TextField;

  @codeName(ContentTypes.Cafe.fields.zipCode, this)
  public zipCode: Fields.TextField;
  public phone: Fields.TextField;
  public email: Fields.TextField;
  public photo: Fields.AssetsField;

  constructor() {
    super({
      propertyResolver: (fieldName: string) => {
        let name = getPropertyForField(this, fieldName) || fieldName;
        return name;
      }
    });
  }
}
