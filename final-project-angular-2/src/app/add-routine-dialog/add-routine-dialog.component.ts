import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Routine } from '../types/timer.types';

@Component({
  selector: 'app-add-routine-dialog',
  templateUrl: './add-routine-dialog.component.html',
  styleUrls: ['./add-routine-dialog.component.scss']
})
export class AddRoutineDialogComponent implements OnInit {
  private backupRoutine: Partial<Routine> = { ...this.data.routine };

  constructor(public dialogRef: MatDialogRef<AddRoutineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.data.routine.title = this.backupRoutine.title;
    this.data.routine.timers = this.backupRoutine.timers;
    this.dialogRef.close(this.data);
  }

}
