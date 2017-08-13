import { Component, OnInit } from '@angular/core';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { DeliveryClient, SortOrder } from 'kentico-cloud-delivery-typescript-sdk';
import { DeliveryClientProvider } from '../../providers/kentico-client.provider';
import { ContentTypes } from '../../content-types.class'
import { Home, HeroUnit } from '../../models/_models';
import { HeroUnitVM } from '../../view-models/hero-unit-vm.class';
import 'automapper-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public model: Home;
  private slides: HeroUnitVM[];

  constructor(private deliveryClient: DeliveryClient) {
    this.model = new Home();
   }

  ngOnInit() {
    this.deliveryClient.item<Home>('home')
      .get()
      .subscribe(response => {
        console.log(response);
        this.model = response.item;
        this.slides = this.model.heroUnits.map((value, index) => automapper.map(ContentTypes.HeroUnit.codeName,
          ContentTypes.HeroUnit.codeName+'VM', value));
      });
  }
}
