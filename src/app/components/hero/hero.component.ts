import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DeliveryClient, SortOrder } from 'kentico-cloud-delivery-typescript-sdk';

import { HeroUnit } from '../../models/hero-unit.class';
import { HeroUnitVM } from '../../view-models/hero-unit-vm.class';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public viewModel: HeroUnitVM;

  constructor(private deliveryClient: DeliveryClient, private sanitization: DomSanitizer) { }

  ngOnInit() {
    this.viewModel = new HeroUnitVM();
    this.deliveryClient.item<HeroUnit>('home_page_promotion')
      .get()
      .subscribe(response => {
        var heroUnit = response.item;

        this.viewModel.title = heroUnit.title.text;

        if (heroUnit.image && heroUnit.image.assets) {
          this.viewModel.image =
            this.sanitization.bypassSecurityTrustStyle('url(' + heroUnit.image.assets[0].url + ')');
        } else {
          this.viewModel.image = null;
        }

        this.viewModel.marketingMessage =
          this.sanitization.bypassSecurityTrustHtml(heroUnit.marketingMessage.value);
      });
  }

}
