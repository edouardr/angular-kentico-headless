import { ContentTypes } from '../content-types.class'
import { SafeUrl } from '@angular/platform-browser';

export class ArticleVM {
  public title: string;
  public image: SafeUrl;
  public summary: string;

  constructor() { }
}
