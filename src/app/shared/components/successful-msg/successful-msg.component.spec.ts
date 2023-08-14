import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulMsgComponent } from './successful-msg.component';

describe('SuccessfulMsgComponent', () => {
  let component: SuccessfulMsgComponent;
  let fixture: ComponentFixture<SuccessfulMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulMsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
