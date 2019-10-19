import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterclassesListComponent } from './masterclasses-list.component';

describe('MasterclassesListComponent', () => {
  let component: MasterclassesListComponent;
  let fixture: ComponentFixture<MasterclassesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterclassesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterclassesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
