import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimersService } from '../services/timers.service';
import { timer } from '../types/timer.types';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.scss']
})
export class TimerFormComponent implements OnInit {
  label: string = '';
  time: number = 0;
  timers: timer[] = [];

  constructor(
    private router: Router,
    private timerService: TimersService
  ) {

  }
  ngOnInit(): void {
    this.timers = this.timerService.getTimers();
  }

  addTimer(event: any) {
    console.log(event);
    event.preventDefault();
    this.timerService.addTimer({label: this.label, time: this.time});
    this.resetFields();
    this.timers = this.timerService.getTimers();
  }

  resetFields() {
    this.time = 0;
    this.label = '';
  }

  startTimer() {
    this.router.navigate(['/start'])
  }

  drop(event: any) {

  }
}
