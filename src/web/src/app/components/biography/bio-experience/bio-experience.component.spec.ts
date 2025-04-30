import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioExperienceComponent } from './bio-experience.component';

describe('BioExperienceComponent', () => {
  let component: BioExperienceComponent;
  let fixture: ComponentFixture<BioExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
