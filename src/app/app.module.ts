import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/main/app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThreeColumnsComponent } from './components/three-columns/three-columns.component';

import { DeliveryClientProvider } from './providers/kentico-client.provider';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    FooterComponent,
    ThreeColumnsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DeliveryClientProvider],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() { }

}
