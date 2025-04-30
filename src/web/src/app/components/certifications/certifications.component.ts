import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content/content.service';
import { CertificationCategory } from '../../types/content/certification.interface';
import { CertificationCategoryComponent } from './certification-category/certification-category.component';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
  standalone: true,
  imports: [CommonModule, CertificationCategoryComponent],
})
export class CertificationsComponent implements OnInit {
  certificationCategories: CertificationCategory[] = [];
  loading: boolean = true;
  error: boolean = false;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.loadCertifications();
  }

  loadCertifications(): void {
    this.contentService.getAllCertificationCategories().subscribe({
      next: (categories) => {
        this.certificationCategories = categories;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading certifications:', err);
        this.loading = false;
        this.error = true;
      },
    });
  }
}
