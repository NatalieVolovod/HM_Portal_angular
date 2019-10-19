import { TestBed } from '@angular/core/testing';

import { ArticlesShortcutsService } from './articles-shortcuts.service';

describe('ArticlesShortcutsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesShortcutsService = TestBed.get(ArticlesShortcutsService);
    expect(service).toBeTruthy();
  });
});
