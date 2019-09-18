import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesSelectionComponent } from './articles-selection.component';

describe('ArticlesSelectionComponent', () => {
  let component: ArticlesSelectionComponent;
  let fixture: ComponentFixture<ArticlesSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
