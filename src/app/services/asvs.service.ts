import { Injectable, signal, computed } from '@angular/core';
import { AsvsCategory, AsvsItem, CategoryStats, MissingItem, LEVEL_CONFIG } from '../models/asvs.model';
import { ASVS_DATA } from '../data/asvs-data';

@Injectable({ providedIn: 'root' })
export class AsvsService {
  readonly categories: AsvsCategory[] = ASVS_DATA;
  readonly levelConfig = LEVEL_CONFIG;

  // State signals
  readonly checkedItems = signal<Record<string, boolean>>({});
  readonly activeCategory = signal<string | null>(null);
  readonly activeLevels = signal<Set<number>>(new Set([1, 2, 3]));
  readonly searchQuery = signal<string>('');

  // Derived state
  readonly allItems = computed<MissingItem[]>(() =>
    ASVS_DATA.flatMap((cat) => cat.items.map((item) => ({ ...item, catId: cat.id, catTitle: cat.title })))
  );

  readonly totalItems = computed(() => this.allItems().length);

  readonly checkedCount = computed(() => Object.values(this.checkedItems()).filter(Boolean).length);

  readonly complianceScore = computed(() => Math.round((this.checkedCount() / this.totalItems()) * 100));

  readonly scoreColor = computed(() => {
    const s = this.complianceScore();
    return s >= 80 ? '#4ade80' : s >= 50 ? '#fb923c' : '#f87171';
  });

  readonly missingItems = computed<MissingItem[]>(() =>
    this.allItems().filter((item) => !this.checkedItems()[item.id])
  );

  readonly categoryStats = computed<Record<string, CategoryStats>>(() => {
    const checked = this.checkedItems();
    return ASVS_DATA.reduce(
      (acc, cat) => {
        const total = cat.items.length;
        const done = cat.items.filter((i) => checked[i.id]).length;
        acc[cat.id] = { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
        return acc;
      },
      {} as Record<string, CategoryStats>
    );
  });

  readonly visibleCategories = computed<AsvsCategory[]>(() => {
    const activeCat = this.activeCategory();
    const levels = this.activeLevels();
    const q = this.searchQuery().toLowerCase();

    return ASVS_DATA.map((cat) => ({
      ...cat,
      items: cat.items.filter((item) => {
        if (!levels.has(item.level)) return false;
        if (activeCat && cat.id !== activeCat) return false;
        if (q && !item.desc.toLowerCase().includes(q) && !item.id.includes(q)) return false;
        return true;
      }),
    })).filter((cat) => cat.items.length > 0);
  });

  readonly filteredItems = computed<AsvsItem[]>(() => this.visibleCategories().flatMap((c) => c.items));

  toggleItem(id: string): void {
    this.checkedItems.update((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  setActiveCategory(id: string | null): void {
    this.activeCategory.set(id);
  }

  toggleLevel(level: number): void {
    this.activeLevels.update((prev) => {
      const next = new Set(prev);
      next.has(level) ? next.delete(level) : next.add(level);
      return next.size === 0 ? prev : next;
    });
  }

  setSearchQuery(q: string): void {
    this.searchQuery.set(q);
  }

  selectAllVisible(): void {
    const updates: Record<string, boolean> = {};
    this.filteredItems().forEach((i) => {
      updates[i.id] = true;
    });
    this.checkedItems.update((prev) => ({ ...prev, ...updates }));
  }

  clearAllVisible(): void {
    const updates: Record<string, boolean> = {};
    this.filteredItems().forEach((i) => {
      updates[i.id] = false;
    });
    this.checkedItems.update((prev) => ({ ...prev, ...updates }));
  }
}
