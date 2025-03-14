import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetailComponent } from './heroes-detail.component';

describe('HeroesDetailComponent', () => {
  let component: HeroesDetailComponent;
  let fixture: ComponentFixture<HeroesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
