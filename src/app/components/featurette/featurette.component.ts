import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article.class';

@Component({
  selector: 'app-featurette',
  templateUrl: './featurette.component.html',
  styleUrls: ['./featurette.component.scss']
})
export class FeaturetteComponent implements OnInit {

  @Input() model: Article;

  constructor() { }

  ngOnInit() {
  }

}
