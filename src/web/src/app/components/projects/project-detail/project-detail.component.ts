import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import {
  ProjectMetaItem,
  ProjectBlogItem,
} from '../../../types/content/project.interface';
import { ContentService } from '../../../services/content/content.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectDetailComponent implements OnInit {
  projectMetaItem: ProjectMetaItem | undefined;
  projectBlogItem: ProjectBlogItem | undefined;
  projectId: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projectId = params['id'];
      this.loadProjectDetails();
    });
  }

  loadProjectDetails(): void {
    // Load meta data
    this.contentService.getProjectMetaItemById(this.projectId ?? '').subscribe({
      next: (metaItem) => {
        this.projectMetaItem = metaItem;
      },
    });

    // Load project content
    this.contentService.getProjectBlogItemById(this.projectId ?? '').subscribe({
      next: (blogItem) => {
        this.projectBlogItem = blogItem;
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/projects']);
  }
}
