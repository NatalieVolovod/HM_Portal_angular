import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterclassComponent } from './masterclass.component';

describe('MasterclassComponent', () => {
  let component: MasterclassComponent;
  let fixture: ComponentFixture<MasterclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
