import { ContentTypes } from '../content-types.class'
import { SafeHtml, SafeUrl } from '@angular/platform-browser';

export class HeroUnitVM {
  public title: string;
  public image: SafeUrl;
  public marketingMessage: SafeHtml;

  constructor() { }
}
