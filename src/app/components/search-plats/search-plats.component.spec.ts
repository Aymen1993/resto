import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlatsComponent } from './search-plats.component';

describe('SearchPlatsComponent', () => {
  let component: SearchPlatsComponent;
  let fixture: ComponentFixture<SearchPlatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPlatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
