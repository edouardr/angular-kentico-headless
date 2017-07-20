import { Component, OnInit, Input } from '@angular/core';
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
  @Input() model: HeroUnit;
  public viewModel: HeroUnitVM

  constructor(private sanitization: DomSanitizer) {  }

  ngOnInit() {
    this.viewModel.title = this.model.title.text;

    if (this.model.image && this.model.image.assets) {
      this.viewModel.image =
        this.sanitization.bypassSecurityTrustStyle('url(' + this.model.image.assets[0].url + ')');
    } else {
      this.viewModel.image = null;
    }

    this.viewModel.marketingMessage =
      this.sanitization.bypassSecurityTrustHtml(this.model.marketingMessage.value);

  }

}
