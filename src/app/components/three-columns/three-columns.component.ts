import { Component, OnInit, Input } from '@angular/core';
import { CafeVM } from '../../view-models/cafe-vm.class';

@Component({
  selector: 'app-three-columns',
  templateUrl: './three-columns.component.html',
  styleUrls: ['./three-columns.component.scss']
})
export class ThreeColumnsComponent implements OnInit {
  @Input() model: CafeVM[];

  constructor() { }

  ngOnInit() {
  }

}
