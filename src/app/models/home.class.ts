import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk';
import { HeroUnit } from './hero-unit.class';
import { ContentTypes } from '../content-types.class'

export class Home extends ContentItem {
  public heroUnits: HeroUnit[];

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
