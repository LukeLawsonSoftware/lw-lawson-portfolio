import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienceItem } from '../../types/content/experience.interface';
import { EducationItem } from '../../types/content/education.interface';
import {
  ProjectMetaItem,
  ProjectBlogItem,
} from '../../types/content/project.interface';
import { Profile } from '../../types/content/profile.interface';
import { CertificationCategory } from '../../types/content/certification.interface';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private URLS = environment.urls;

  constructor(private http: HttpClient) {}

  getProfileContent(): Observable<Profile> {
    return this.http.get<Profile>(this.URLS.content.profile);
  }

  getAllExperienceItems(): Observable<ExperienceItem[]> {
    return this.http.get<ExperienceItem[]>(this.URLS.content.experience);
  }

  getAllEducationItems(): Observable<EducationItem[]> {
    return this.http.get<EducationItem[]>(this.URLS.content.education);
  }

  getAllCertificationCategories(): Observable<CertificationCategory[]> {
    return this.http.get<CertificationCategory[]>(
      this.URLS.content.certifications
    );
  }

  getAllProjectMetaItems(): Observable<ProjectMetaItem[]> {
    return this.http.get<ProjectMetaItem[]>(this.URLS.content.projects.meta);
  }

  getProjectMetaItemById(projectId: string): Observable<ProjectMetaItem> {
    const metaItems = this.getAllProjectMetaItems();
    return new Observable<ProjectMetaItem>((observer) => {
      metaItems.subscribe((items) => {
        const item = items.find((i) => i.id === projectId);
        if (item) {
          observer.next(item);
          observer.complete();
        } else {
          observer.error(new Error('Project not found'));
        }
      });
    });
  }

  getProjectBlogItemById(projectId: string): Observable<ProjectBlogItem> {
    return this.http.get<ProjectBlogItem>(
      `${this.URLS.content.projects.blogBase}${projectId}.json`
    );
  }
}
