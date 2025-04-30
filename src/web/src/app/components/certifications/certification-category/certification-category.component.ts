import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificationCategory } from '../../../types/content/certification.interface';
import { CertificationCardComponent } from '../certification-card/certification-card.component';

@Component({
  selector: 'app-certification-category',
  templateUrl: './certification-category.component.html',
  styleUrls: ['./certification-category.component.css'],
  standalone: true,
  imports: [CommonModule, CertificationCardComponent],
})
export class CertificationCategoryComponent {
  @Input() category!: CertificationCategory;
  isExpanded = false;

  toggleAccordion(): void {
    this.isExpanded = !this.isExpanded;
  }
}
