import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../services/content/content.service';

@Component({
  selector: 'app-bio-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bio-hero.component.html',
  styleUrl: './bio-hero.component.css',
})
export class BioHeroComponent implements OnInit {
  myName: string;
  title: string;
  intro: string;

  private contentService: ContentService;

  constructor(contentService: ContentService) {
    this.contentService = contentService;
    this.myName = '';
    this.title = '';
    this.intro = '';
  }

  ngOnInit(): void {
    this.contentService.getProfileContent().subscribe({
      next: (profile) => {
        this.myName = profile.name;
        this.title = profile.title;
        this.intro = profile.intro;
      },
    });
  }
}
