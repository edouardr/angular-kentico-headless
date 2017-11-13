import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk';
import { ContentTypes } from '../content-types.class'
import { codeName, getPropertyForField } from '../providers/codename-decorator';

export class HeroUnit extends ContentItem {
  public title: Fields.TextField;
  public image: Fields.AssetsField;

  @codeName(ContentTypes.HeroUnit.fields.marketingMessage, this)
  public marketingMessage: Fields.RichTextField;

  constructor() {
    super({
      propertyResolver: (fieldName: string) => {
        let name = getPropertyForField(this, fieldName) || fieldName;
        return name;
      }
    });
  }
}
