import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolabananaprivacypolicyComponent } from './holabananaprivacypolicy.component';

describe('HolabananaprivacypolicyComponent', () => {
  let component: HolabananaprivacypolicyComponent;
  let fixture: ComponentFixture<HolabananaprivacypolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolabananaprivacypolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolabananaprivacypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
