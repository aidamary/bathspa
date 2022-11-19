import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoutineDialogComponent } from './add-routine-dialog.component';

describe('AddRoutineDialogComponent', () => {
  let component: AddRoutineDialogComponent;
  let fixture: ComponentFixture<AddRoutineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoutineDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRoutineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
