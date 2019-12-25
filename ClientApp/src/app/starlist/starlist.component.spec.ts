import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarlistComponent } from './starlist.component';

describe('StarlistComponent', () => {
  let component: StarlistComponent;
  let fixture: ComponentFixture<StarlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
