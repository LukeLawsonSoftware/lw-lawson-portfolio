import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeService, Theme } from './services/theme/theme.service';
import { FormsModule } from '@angular/forms';
import { NavSidebarComponent } from './components/shared/nav-sidebar/nav-sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, NavSidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'LW LAWSON';
  showSettingsModal = false;
  currentTheme: Theme = 'system';

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.theme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  setTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }
}
