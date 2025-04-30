import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAboutComponent } from './bio-about.component';

describe('BioAboutComponent', () => {
  let component: BioAboutComponent;
  let fixture: ComponentFixture<BioAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
