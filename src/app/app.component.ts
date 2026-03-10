import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { AsvsService } from './services/asvs.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, ChecklistComponent, RecommendationsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly asvs = inject(AsvsService);
  readonly panelOpen = signal(false);

  onAnalyze(): void {
    this.panelOpen.set(true);
  }

  closePanel(): void {
    this.panelOpen.set(false);
  }
}
