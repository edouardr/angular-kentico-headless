import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/main/app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThreeColumnsComponent } from './components/three-columns/three-columns.component';
import { FeaturetteComponent } from './components/featurette/featurette.component';

import { DeliveryClientProvider } from './providers/kentico-client.provider';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { ContentTypes } from './content-types.class';
import { HeroUnitToViewModelResolver } from './resolvers/HeroUnitToViewModelResolver.class';
import { automapper, IConfiguration } from 'automapper-ts';

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

  constructor() {
    this.InitializeMapper();
  }

  public InitializeMapper(): void {

    automapper.initialize((config: IConfiguration) => {
      config.createMap(ContentTypes.HeroUnit.codeName, ContentTypes.HeroUnit.codeName + 'VM')
      .converUsing(HeroUnitToViewModelResolver);
    });
  }
}
