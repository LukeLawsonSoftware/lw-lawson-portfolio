import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../../../../services/theme/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css',
})
export class ThemeToggleComponent implements OnInit {
  currentTheme: Theme = 'system';
  themeText: string = 'Dark mode';

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    // Subscribe to theme changes
    this.themeService.theme$.subscribe((theme) => {
      this.currentTheme = theme;
      this.themeText = this.themeService.getTextForTheme(theme);
    });
  }

  toggleTheme() {
    const currentTheme = this.themeService.getEffectiveTheme();
    this.themeService.setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }
}
