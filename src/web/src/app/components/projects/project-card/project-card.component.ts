import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProjectMetaItem } from '../../../types/content/project.interface';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project!: ProjectMetaItem;

  constructor(private router: Router) {}

  navigateToDetail(event: Event, id: string): void {
    // Prevent navigation if clicking on links within the card
    if ((event.target as HTMLElement).closest('a')) {
      return;
    }
    this.router.navigate(['/projects', id]);
  }
}
