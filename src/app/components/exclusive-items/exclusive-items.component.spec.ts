import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveItemsComponent } from './exclusive-items.component';

describe('ExclusiveItemsComponent', () => {
  let component: ExclusiveItemsComponent;
  let fixture: ComponentFixture<ExclusiveItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusiveItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusiveItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
