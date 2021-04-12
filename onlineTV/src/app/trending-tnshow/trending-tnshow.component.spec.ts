import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTNShowComponent } from './trending-tnshow.component';

describe('TrendingTNShowComponent', () => {
  let component: TrendingTNShowComponent;
  let fixture: ComponentFixture<TrendingTNShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingTNShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingTNShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
