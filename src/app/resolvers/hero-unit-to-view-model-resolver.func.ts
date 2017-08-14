import { DomSanitizer } from '@angular/platform-browser';
import { HeroUnitVM } from '../view-models/hero-unit-vm.class';

export var HeroUnitToViewModelResolver = (resolutionContext: any, sanitizer: DomSanitizer): HeroUnitVM => {
  let target: HeroUnitVM = new HeroUnitVM();
  let source = resolutionContext.sourceValue;
  target.title = source.title.text;

  if (source.image.assets) {
    target.image = sanitizer.bypassSecurityTrustUrl(source.image.assets[0].url);
  } else {
    target.image = null;
  }

  target.marketingMessage = sanitizer.bypassSecurityTrustHtml(source.marketingMessage.value);

  return target;
}
