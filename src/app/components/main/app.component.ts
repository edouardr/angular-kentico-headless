import { Component, OnInit } from '@angular/core';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { DeliveryClient, SortOrder } from 'kentico-cloud-delivery-typescript-sdk';
import { DeliveryClientProvider } from '../../providers/kentico-client.provider';
import { ContentTypes } from '../../content-types.class'
import { Home, HeroUnit } from '../../models/_models';
import { HeroUnitVM } from '../../view-models/hero-unit-vm.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public model: Home;
  private slides: HeroUnitVM[];
  private _sanitizerService: DomSanitizer;

  constructor(private deliveryClient: DeliveryClient, private sanitization: DomSanitizer) {
    this.model = new Home();
    this._sanitizerService = sanitization;
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
        this.slides = this.model.heroUnits.map((value, index) => this.mapToViewModel(value));
      });
  }

  public mapToViewModel(model: HeroUnit): HeroUnitVM {
    let viewModel: HeroUnitVM = new HeroUnitVM();
    viewModel.title = model.title.text;

    if (model.image && model.image.assets) {
      viewModel.image =
        this._sanitizerService.bypassSecurityTrustUrl(model.image.assets[0].url);
    } else {
      viewModel.image = null;
    }

    viewModel.marketingMessage =
      this._sanitizerService.bypassSecurityTrustHtml(model.marketingMessage.value);

    return viewModel;
  }
}
