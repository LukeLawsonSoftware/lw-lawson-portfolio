import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../services/content/content.service';
import { ExperienceItem } from '../../../types/content/experience.interface';

@Component({
  selector: 'app-bio-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bio-experience.component.html',
  styleUrl: './bio-experience.component.css',
})
export class BioExperienceComponent implements OnInit {
  experienceList: ExperienceItem[];
  private contentService: ContentService;

  constructor(contentService: ContentService) {
    this.experienceList = [];
    this.contentService = contentService;
  }

  ngOnInit(): void {
    this.contentService.getAllExperienceItems().subscribe({
      next: (experienceItems) => {
        this.experienceList = experienceItems;
      },
    });
  }
}
