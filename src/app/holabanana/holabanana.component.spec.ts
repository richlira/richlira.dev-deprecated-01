import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolabananaComponent } from './holabanana.component';

describe('HolabananaComponent', () => {
  let component: HolabananaComponent;
  let fixture: ComponentFixture<HolabananaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolabananaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolabananaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
