import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk';
import { ContentTypes } from '../content-types.class'
import { codeName, getPropertyForField } from '../providers/codename-decorator';

export class Article extends ContentItem {
  public title: Fields.TextField;

  @codeName(ContentTypes.Article.fields.teaserImage, this)
  public teaserImage: Fields.AssetsField;

  public summary: Fields.TextField;

  constructor() {
    super({
      propertyResolver: (fieldName: string) => {
        let name = getPropertyForField(this, fieldName) || fieldName;
        return name;
      }
    })
  }
}
