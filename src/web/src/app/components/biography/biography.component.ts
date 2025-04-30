import {
  Component,
  HostListener,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioHeroComponent } from './bio-hero/bio-hero.component';
import { BioAboutComponent } from './bio-about/bio-about.component';
import { BioEducationComponent } from './bio-education/bio-education.component';
import { BioExperienceComponent } from './bio-experience/bio-experience.component';

@Component({
  selector: 'app-biography',
  standalone: true,
  imports: [
    CommonModule,
    BioHeroComponent,
    BioAboutComponent,
    BioEducationComponent,
    BioExperienceComponent,
  ],
  templateUrl: './biography.component.html',
  styleUrl: './biography.component.css',
})
export class BiographyComponent implements AfterViewInit {
  isScrolledToBottom = false;
  scrollPosition = 0;

  // Track window scroll position
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Get the current scroll position
    this.scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    // Check if user is near the bottom of the page
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollBottom = this.scrollPosition + windowHeight;

    // Consider "scrolled to bottom" if within 100px of the bottom
    this.isScrolledToBottom = documentHeight - scrollBottom < 100;
  }

  ngAfterViewInit() {
    // Initialize scroll position
    this.onWindowScroll();
  }

  scrollDown() {
    // Find the element to scroll to
    const targetElement = document.getElementById('biography-bottom');

    if (targetElement) {
      // Scroll to the target element
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else {
      // Fall back to scrolling to bottom of page if element not found
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    // Update the scrolled to bottom state
    setTimeout(() => {
      this.isScrolledToBottom = true;
    }, 100);
  }
}
