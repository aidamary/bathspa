import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimersService } from '../services/timers.service';
import { Timer } from '../types/timer.types';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { AddRoutineDialogComponent } from '../add-routine-dialog/add-routine-dialog.component';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.scss']
})
export class TimerFormComponent implements OnInit {
  label: string = '';
  time: string = '';
  timers: Timer[] = [];
  editingTimer?: string = '';

  constructor(
    private router: Router,
    private timerService: TimersService,
    private dialog: MatDialog
  ) {

  }
  ngOnInit(): void {
    this.timerService.getTimers().subscribe(timers => this.timers = timers);
  }

  addTimer(event: any) {
    this.timerService.addTimer({label: this.label, time: this.time});
    this.resetFields();
    this.timerService.getTimers().subscribe(timers => this.timers = timers);
  }

  resetFields() {
    this.time = '';
    this.label = '';
  }

  startTimer() {
    this.router.navigate(['/start'])
  }

  drop(event: CdkDragDrop<Timer[]>) {
    moveItemInArray(this.timers, event.previousIndex, event.currentIndex);
  }

  deleteTimer(timer: Timer) {
    if (confirm(`Are you sure you want to delete this timer?`)) {
      this.timerService.deleteTimer(timer);
      this.timerService.getTimers().subscribe(timers => this.timers = timers);
    }
  }
  editTimer(timer: Timer) {
    this.editingTimer = timer.id;
  }

  saveChanges(timer: Timer) {
    this.timerService.editTimer(timer);
    this.editingTimer = '';
  }

  saveRoutine() {
    const dialogRef = this.dialog.open(AddRoutineDialogComponent, {
      width: '270px',
      data: {
        routine: {
          timers: this.timers
        }
      }
    });

    dialogRef
      .afterClosed()
      .subscribe((result: any|undefined) => {
        if (!result) {
          return;
        }
        this.timerService.saveRoutine(result.routine);
      });
  }
}
