import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegostrationComponent } from './regostration.component';

describe('RegostrationComponent', () => {
  let component: RegostrationComponent;
  let fixture: ComponentFixture<RegostrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegostrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegostrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
