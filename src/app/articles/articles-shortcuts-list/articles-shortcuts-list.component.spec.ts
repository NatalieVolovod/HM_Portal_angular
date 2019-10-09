import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesShortcutsListComponent } from './articles-shortcuts-list.component';

describe('ArticlesShortcutsListComponent', () => {
  let component: ArticlesShortcutsListComponent;
  let fixture: ComponentFixture<ArticlesShortcutsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesShortcutsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesShortcutsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
