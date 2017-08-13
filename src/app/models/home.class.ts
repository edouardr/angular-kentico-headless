import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk';
import { HeroUnit, Article } from './_models.namespace';
import { ContentTypes } from '../content-types.class'

export class Home extends ContentItem {
  public heroUnits: HeroUnit[];
  public articles: Article[];

  constructor() {
    super({
      propertyResolver: (fieldName: string) => {
        if (fieldName === ContentTypes.Home.fields.heroUnit) {
          return 'heroUnits';
        }
      }
    })
  }
}
