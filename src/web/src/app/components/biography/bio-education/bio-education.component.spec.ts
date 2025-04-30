import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioEducationComponent } from './bio-education.component';

describe('BioEducationComponent', () => {
  let component: BioEducationComponent;
  let fixture: ComponentFixture<BioEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioEducationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
