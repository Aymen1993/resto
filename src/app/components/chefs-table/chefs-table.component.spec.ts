import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsTableComponent } from './chefs-table.component';

describe('ChefsTableComponent', () => {
  let component: ChefsTableComponent;
  let fixture: ComponentFixture<ChefsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
