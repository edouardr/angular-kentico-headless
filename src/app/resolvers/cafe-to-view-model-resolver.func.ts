import { DomSanitizer } from '@angular/platform-browser';
import { CafeVM } from '../view-models/cafe-vm.class';
import { Cafe } from '../models/cafe.class';

export var CafeToViewModelResolver = (resolutionContext: any, sanitizer: DomSanitizer): CafeVM => {
  let target: CafeVM = new CafeVM();
  let source: Cafe = resolutionContext.sourceValue;
  target.street = source.street.text;
  target.city = source.city.text;
  target.country = source.country.text;
  target.state = source.state.text;
  target.zipCode = source.zipCode.text;
  target.phone = source.phone.text;
  target.email = source.email.text;

  if (source.photo.assets) {
    target.photo = sanitizer.bypassSecurityTrustUrl(source.photo.assets[0].url);
  } else {
    target.photo = null;
  }

  return target;
}
