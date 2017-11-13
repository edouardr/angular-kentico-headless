import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk';
import { HeroUnit, Article, Cafe } from './';
import { ContentTypes } from '../content-types.class'
import { codeName, getPropertyForField } from '../providers/codename-decorator';

export class Home extends ContentItem {
  @codeName(ContentTypes.Home.fields.heroUnit, this)
  public heroUnits: HeroUnit[];
  public articles: Article[];
  public cafes: Cafe[];

  constructor() {
    super({
      propertyResolver: (fieldName: string) => {
        let name = getPropertyForField(this, fieldName) || fieldName;
        return name;
      }
    })
  }
}
