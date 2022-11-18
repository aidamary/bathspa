import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TimersService } from '../services/timers.service';
import { timer } from '../types/timer.types';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss']
})
export class TimerDisplayComponent implements OnInit {
  @ViewChild('pathRemaining') pathRemaining: ElementRef | undefined;
  timers: timer[] = [];
  currentLabel: string = '';
  currentTime: number = 0;
  displayTime: string = '';
  interval: any;
  index: number = 0;
  TIME_LIMIT!: number;
  pause: boolean = false;
  notification: any;
  constructor(
    private timerService: TimersService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.notification = new Audio('assets/bell.mp3')
    this.timers = this.timerService.getTimers();
    this.startTimer();
  }

  transformTime(time: string) {
    const parts = time.split(':');
    const minutes = parseInt(parts[0]);
    const seconds = parseInt(parts[1]);
    return (minutes * 60) + seconds;
  }

  startTimer() {
    this.currentLabel = this.timers[this.index].label;
    this.currentTime = this.transformTime(this.timers[this.index].time);
    this.TIME_LIMIT = this.transformTime(this.timers[this.index].time);
    this.displayTime = this.calculateDisplayTime(this.currentTime)
    this.launchTimer();
  }

  calculateDisplayTime(time: number): string {
    const pad = (n: number): string => n < 10 ? `0${n}` : n.toString();
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - (hours * 3600)) / 60);
    const seconds = time - (hours * 3600) - (minutes * 60);
    let result = pad(seconds)
    if (minutes || hours) {
      result = pad(minutes) + ':' + result
    }
    if (hours) {
      result = pad(hours) + ':' + result
    }
    return result;
  }

  cancel() {
    this.router.navigate(['/']);
  }

  pauseTimer() {
    this.pause = true;
    clearInterval(this.interval);
  }

  resumeTimer() {
    this.pause = false;
    this.launchTimer();
  }

  launchTimer() {
    this.interval = setInterval(() => {
      this.currentTime--;
      this.displayTime = this.calculateDisplayTime(this.currentTime)
      if (this.currentTime < 0) {
        this,this.notification.play();
        navigator.vibrate(300);
        this.index++;
        clearInterval(this.interval);
        if (this.index < this.timers.length) {
          this.startTimer()
        } else {
          navigator.vibrate([150, 150]);
          this.cancel();
        }
      }
    },1000)
  }

}
