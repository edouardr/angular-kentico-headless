import { DomSanitizer } from '@angular/platform-browser';
import { HeroUnitVM } from '../view-models/hero-unit-vm.class';
import { IResolutionContext, TypeConverter } from 'automapper-ts';

export class HeroUnitToViewModelResolver extends TypeConverter{

  private _sanitizerService: DomSanitizer;

  constructor(private sanitization: DomSanitizer) {
    super();
    this._sanitizerService = sanitization;
  }

  public convert(resolutionContext: IResolutionContext): any {
    let target: HeroUnitVM = new HeroUnitVM();
    let source = resolutionContext.sourceValue;
    target.title = source.title.text;

    if (target.image && source.image.assets) {
      target.image =
        this._sanitizerService.bypassSecurityTrustUrl(source.image.assets[0].url);
    } else {
      target.image = null;
    }

    target.marketingMessage =
      this._sanitizerService.bypassSecurityTrustHtml(source.marketingMessage.value);

    return target;
  };
}
