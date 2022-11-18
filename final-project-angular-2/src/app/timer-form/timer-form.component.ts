import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimersService } from '../services/timers.service';
import { Timer } from '../types/timer.types';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.scss']
})
export class TimerFormComponent implements OnInit {
  label: string = '';
  time: string = '00:00';
  timers: Timer[] = [];
  editingTimer?: string = '';

  constructor(
    private router: Router,
    private timerService: TimersService
  ) {

  }
  ngOnInit(): void {
    this.timerService.getTimers().subscribe(timers => this.timers = timers);
  }

  addTimer(event: any) {
    console.log(typeof this.time);
    event.preventDefault();
    this.timerService.addTimer({label: this.label, time: this.time});
    this.resetFields();
    this.timerService.getTimers().subscribe(timers => this.timers = timers);
  }

  resetFields() {
    this.time = '00:00';
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

  }
}
