import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private themeSubject = new BehaviorSubject<Theme>(this.getStoredTheme());
  public theme$ = this.themeSubject.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeTheme();
  }

  private getStoredTheme(): Theme {
    return (localStorage.getItem('theme') as Theme) || 'system';
  }

  private initializeTheme(): void {
    const theme = this.getStoredTheme();
    this.setTheme(theme);
  }

  private getSystemTheme(): 'light' | 'dark' {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  public setTheme(theme: Theme): void {
    localStorage.setItem('theme', theme);
    this.themeSubject.next(theme);

    // Apply the actual theme
    const effectiveTheme = theme === 'system' ? this.getSystemTheme() : theme;

    if (effectiveTheme === 'dark') {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }
  }

  public getCurrentTheme(): Theme {
    return this.themeSubject.value;
  }

  public getTextForTheme(theme: Theme): string {
    return this.getEffectiveTheme() === 'dark' ? 'Light mode' : 'Dark mode';
  }

  public getEffectiveTheme(): 'light' | 'dark' {
    const theme = this.getCurrentTheme();
    return theme === 'system' ? this.getSystemTheme() : theme;
  }
}
