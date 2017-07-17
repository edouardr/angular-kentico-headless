import { ContentTypes } from '../content-types.class'
import { SafeHtml, SafeStyle } from '@angular/platform-browser';

export class HeroUnitVM {
  public title: string;
  public image: SafeStyle;
  public marketingMessage: SafeHtml;

  constructor() { }
}
