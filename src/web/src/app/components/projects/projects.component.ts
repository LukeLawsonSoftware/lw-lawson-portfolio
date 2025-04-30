import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectMetaItem } from '../../types/content/project.interface';
import { ContentService } from '../../services/content/content.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects: ProjectMetaItem[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getAllProjectMetaItems().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
    });
  }
}
