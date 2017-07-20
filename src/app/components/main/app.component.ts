import { Component, OnInit } from '@angular/core';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { DeliveryClient, SortOrder } from 'kentico-cloud-delivery-typescript-sdk';
import { DeliveryClientProvider } from '../../providers/kentico-client.provider';
import { ContentTypes } from '../../content-types.class'
import { Home } from '../../models/home.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public model: Home;

  constructor(private deliveryClient: DeliveryClient, private sanitization: DomSanitizer) {
    this.model = new Home();
   }

  ngOnInit() {
    this.deliveryClient.item<Home>('home')
      .elementsParameter([ContentTypes.HeroUnit.codeName,
        ContentTypes.HeroUnit.fields.title,
        ContentTypes.HeroUnit.fields.image,
        ContentTypes.HeroUnit.fields.marketingMessage
      ])
      .get()
      .subscribe(response => {
        console.log(response);
        this.model = response.item;
      });
  }
}
