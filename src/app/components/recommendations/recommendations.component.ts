import { Component, inject, Input, Output, EventEmitter, OnChanges, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsvsService } from '../../services/asvs.service';
import { AiService } from '../../services/ai.service';
import { MissingItem } from '../../models/asvs.model';

interface MarkdownLine {
  type: 'h2' | 'h3' | 'li' | 'p' | 'space';
  content: string;
}

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnChanges {
  @Input() open = false;
  @Output() close = new EventEmitter<void>();

  readonly asvs = inject(AsvsService);
  private readonly aiService = inject(AiService);
  private readonly cdr = inject(ChangeDetectorRef);

  loading = false;
  rawMarkdown = '';
  errorMsg = '';
  missingSnapshot: MissingItem[] = [];

  get parsedLines(): MarkdownLine[] {
    return this.rawMarkdown.split('\n').map((line) => {
      if (line.startsWith('## ')) return { type: 'h2', content: line.slice(3) };
      if (line.startsWith('### ')) return { type: 'h3', content: line.slice(4) };
      if (line.startsWith('# ')) return { type: 'h2', content: line.slice(2) };
      if (line.startsWith('- ') || line.startsWith('* ')) return { type: 'li', content: line.slice(2) };
      if (line.trim() === '') return { type: 'space', content: '' };
      return { type: 'p', content: line };
    });
  }

  ngOnChanges(): void {
    if (this.open && !this.rawMarkdown && !this.loading) {
      this.analyze();
    }
  }

  analyze(): void {
    const missing = this.asvs.missingItems();
    if (missing.length === 0) {
      this.rawMarkdown =
        '## 🎉 Full Compliance Achieved!\n\nAll OWASP ASVS requirements are implemented. Your application meets the standard.';
      return;
    }

    this.missingSnapshot = missing;
    this.rawMarkdown = '';
    this.errorMsg = '';
    this.loading = true;

    this.aiService.getRecommendations(missing, this.asvs.totalItems(), this.asvs.complianceScore()).subscribe({
      next: (text) => {
        this.rawMarkdown = text;
        this.loading = false;
        this.errorMsg = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMsg = err.message;
        this.loading = false;

        this.cdr.detectChanges();
      },
    });
  }

  retry(): void {
    this.analyze();
  }

  get previewMissing(): MissingItem[] {
    return this.missingSnapshot.slice(0, 6);
  }

  get extraCount(): number {
    return Math.max(0, this.missingSnapshot.length - 6);
  }
}
