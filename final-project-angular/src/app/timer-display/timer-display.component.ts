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
  constructor(
    private timerService: TimersService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.timers = this.timerService.getTimers();
    this.startTimer();
  }

  startTimer() {
    this.currentLabel = this.timers[this.index].label;
    this.currentTime = this.timers[this.index].time;
    this.TIME_LIMIT = this.timers[this.index].time;
    this.displayTime = this.calculateDisplayTime(this.currentTime)
    this.interval = setInterval(() => {
      this.currentTime--;
      this.displayTime = this.calculateDisplayTime(this.currentTime)
      if (this.currentTime < 0) {
        this.index++;
        clearInterval(this.interval);
        if (this.index < this.timers.length) {
          this.startTimer()
        } else {
          this.router.navigate(['/']);
        }
      }
    },1000)
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

}
