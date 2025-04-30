import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioHeroComponent } from './bio-hero.component';

describe('BioHeroComponent', () => {
  let component: BioHeroComponent;
  let fixture: ComponentFixture<BioHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
