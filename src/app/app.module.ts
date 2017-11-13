import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import 'automapper-ts';
import { DeliveryClientProvider } from './providers/kentico-client.provider';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/main/app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThreeColumnsComponent } from './components/three-columns/three-columns.component';
import { FeaturetteComponent } from './components/featurette/featurette.component';

import { ContentTypes } from './content-types.class';
import { HeroUnitToViewModelResolver, ArticleToViewModelResolver, CafeToViewModelResolver } from './resolvers';
import { HeroUnitVM, ArticleVM, CafeVM } from './view-models';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CarouselComponent,
    FooterComponent,
    ThreeColumnsComponent,
    FeaturetteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  providers: [
    DeliveryClientProvider,
    NgbCarouselConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  private _sanitizerService: DomSanitizer;

  constructor(private sanitization: DomSanitizer) {
    this._sanitizerService = sanitization;
    this.InitializeMapper();
  }

  public InitializeMapper(): void {

    automapper.initialize((config: any) => {
      config
        .createMap(ContentTypes.HeroUnit.codeName, ContentTypes.HeroUnit.codeName + 'VM')
        .convertUsing((resolutionContext: any): HeroUnitVM => HeroUnitToViewModelResolver(resolutionContext, this._sanitizerService));

      config
        .createMap(ContentTypes.Article.codeName, ContentTypes.Article.codeName + 'VM')
        .convertUsing((resolutionContext: any): ArticleVM => ArticleToViewModelResolver(resolutionContext, this._sanitizerService));

      config
        .createMap(ContentTypes.Cafe.codeName, ContentTypes.Cafe.codeName + 'VM')
        .convertUsing((resolutionContext: any): CafeVM => CafeToViewModelResolver(resolutionContext, this._sanitizerService));
    });
  }
}
