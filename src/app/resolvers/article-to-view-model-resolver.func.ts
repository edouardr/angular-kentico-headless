import { DomSanitizer } from '@angular/platform-browser';
import { ArticleVM } from '../view-models/article-vm.class';

export var ArticleToViewModelResolver = (resolutionContext: any, sanitizer: DomSanitizer): ArticleVM => {
  let target: ArticleVM = new ArticleVM();
  let source = resolutionContext.sourceValue;
  target.title = source.title.text;

  if (source.teaserImage.assets) {
    target.image = sanitizer.bypassSecurityTrustUrl(source.teaserImage.assets[0].url);
  } else {
    target.image = null;
  }

  target.summary = source.summary.text;

  return target;
}
