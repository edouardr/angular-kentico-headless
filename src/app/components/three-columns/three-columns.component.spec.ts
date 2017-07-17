import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColumnsComponent } from './three-columns.component';

describe('ThreeColumnsComponent', () => {
  let component: ThreeColumnsComponent;
  let fixture: ComponentFixture<ThreeColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
