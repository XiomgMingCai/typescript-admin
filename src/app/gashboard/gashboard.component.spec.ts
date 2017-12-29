import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GashboardComponent } from './gashboard.component';

describe('GashboardComponent', () => {
  let component: GashboardComponent;
  let fixture: ComponentFixture<GashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
