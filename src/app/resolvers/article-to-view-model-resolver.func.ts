import { DomSanitizer } from '@angular/platform-browser';
import { ArticleVM } from '../view-models/article-vm.class';

export var ArticleToViewModelResolver = (resolutionContext: any, sanitizer: DomSanitizer): ArticleVM => {
  let source = resolutionContext.sourceValue;
  let target: ArticleVM = new ArticleVM();
  target.title = source.title.text;
  target.image = source.teaserImage.assets
    ? sanitizer.bypassSecurityTrustUrl(source.teaserImage.assets[0].url)
    : null;
  target.summary = source.summary.text;

  return target;
}
