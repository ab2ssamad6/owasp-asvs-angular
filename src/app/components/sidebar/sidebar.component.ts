import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AsvsService } from '../../services/asvs.service';
import { LEVEL_CONFIG } from '../../models/asvs.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  readonly asvs = inject(AsvsService);
  readonly levels = [1, 2, 3];
  readonly levelConfig = LEVEL_CONFIG;
  searchValue = '';

  onSearch(value: string): void {
    this.asvs.setSearchQuery(value);
  }

  selectCategory(id: string | null): void {
    const current = this.asvs.activeCategory();
    this.asvs.setActiveCategory(id === current ? null : id);
  }

  isLevelActive(level: number): boolean {
    return this.asvs.activeLevels().has(level);
  }

  getLevelClass(level: number): string {
    return this.isLevelActive(level) ? `active-l${level}` : '';
  }
}
