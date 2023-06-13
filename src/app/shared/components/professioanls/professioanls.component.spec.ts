import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessioanlsComponent } from './professioanls.component';

describe('ProfessioanlsComponent', () => {
  let component: ProfessioanlsComponent;
  let fixture: ComponentFixture<ProfessioanlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessioanlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessioanlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
