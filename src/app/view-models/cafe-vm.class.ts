import { ContentTypes } from '../content-types.class'
import { SafeUrl } from '@angular/platform-browser';

export class CafeVM {
  public street: string;
  public city: string;
  public country: string;
  public state: string;
  public zipCode: string;
  public phone: string;
  public email: string;
  public photo: SafeUrl;

  constructor() { }
}
