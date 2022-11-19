import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimerFormComponent } from './add-timer-form.component';

describe('AddTimerFormComponent', () => {
  let component: AddTimerFormComponent;
  let fixture: ComponentFixture<AddTimerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTimerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
