import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../services/content/content.service';
import { EducationItem } from '../../../types/content/education.interface';

@Component({
  selector: 'app-bio-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bio-education.component.html',
  styleUrl: './bio-education.component.css',
})
export class BioEducationComponent implements OnInit {
  private contentService: ContentService;
  educationList: EducationItem[];

  constructor(contentService: ContentService) {
    this.contentService = contentService;
    this.educationList = [];
  }

  ngOnInit(): void {
    this.contentService.getAllEducationItems().subscribe({
      next: (educationItems) => {
        this.educationList = educationItems;
      },
    });
  }
}
