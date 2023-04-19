import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersContainerComponent } from './leaders-container.component';

describe('LeadersContainerComponent', () => {
  let component: LeadersContainerComponent;
  let fixture: ComponentFixture<LeadersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadersContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
