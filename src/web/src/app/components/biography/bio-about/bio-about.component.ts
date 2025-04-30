import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../services/content/content.service';

@Component({
  selector: 'app-bio-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bio-about.component.html',
  styleUrl: './bio-about.component.css',
})
export class BioAboutComponent implements OnInit {
  paragraphs: string[];
  private contentService: ContentService;

  constructor(contentService: ContentService) {
    this.paragraphs = [];
    this.contentService = contentService;
  }

  ngOnInit(): void {
    this.contentService.getProfileContent().subscribe({
      next: (profile) => {
        this.paragraphs = profile.aboutMe;
      },
    });
  }
}
