import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-sidebar',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent, RouterLink, RouterLinkActive],
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.css',
})
export class NavSidebarComponent {
  @Input() title: string = 'Portfolio';

  constructor(private router: Router) {}

  get currentRoute(): string {
    const route = this.router.url.split('/')[1] || 'biography';
    return route.charAt(0).toUpperCase() + route.slice(1);
  }
}
