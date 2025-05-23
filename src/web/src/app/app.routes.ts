import { Routes } from '@angular/router';
import { BiographyComponent } from './components/biography/biography.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailComponent } from './components/projects/project-detail/project-detail.component';
import { CertificationsComponent } from './components/certifications/certifications.component';

export const routes: Routes = [
  { path: '', redirectTo: 'biography', pathMatch: 'full' },
  { path: 'biography', component: BiographyComponent, title: 'Biography' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects' },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent,
    title: 'Project - Blog',
  },
  {
    path: 'certifications',
    component: CertificationsComponent,
    title: 'Certifications',
  },
  { path: '**', redirectTo: 'biography' },
];
