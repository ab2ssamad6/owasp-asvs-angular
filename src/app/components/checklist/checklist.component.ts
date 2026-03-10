import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsvsService } from '../../services/asvs.service';
import { LEVEL_CONFIG } from '../../models/asvs.model';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent {
  readonly asvs = inject(AsvsService);
  readonly levelConfig = LEVEL_CONFIG;

  isChecked(id: string): boolean {
    return !!this.asvs.checkedItems()[id];
  }
}
