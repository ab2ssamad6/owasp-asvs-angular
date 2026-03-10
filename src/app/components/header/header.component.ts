import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsvsService } from '../../services/asvs.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly asvs = inject(AsvsService);
  @Output() analyze = new EventEmitter<void>();

  get circumference() {
    return 2 * Math.PI * 20;
  }

  get strokeDashoffset() {
    return this.circumference * (1 - this.asvs.complianceScore() / 100);
  }

  analyzeClick(): void {
    this.analyze.emit();
  }
}
