import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TimersService } from '../services/timers.service';
import { Timer } from '../types/timer.types';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss']
})
export class TimerDisplayComponent implements OnInit, OnChanges {
  @ViewChild('pathRemaining') pathRemaining: ElementRef | undefined;
  @Input() timers: Timer[] = [];
  currentLabel: string = '';
  currentTime: number = 0;
  displayTime: string = '';
  interval: any;
  index: number = 0;
  TIME_LIMIT!: number;
  pause: boolean = false;
  notification: any;
  constructor(
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['timers']) {
      if (this.timers.length) {
        this.startTimer();
      }
    }
  }
  ngOnInit(): void {
    this.notification = new Audio('assets/bell.mp3')
  }

  transformTime(time: string) {
    const parts = time.split(':');
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    const seconds = parseInt(parts[2]);
    return (hours * 3600) + (minutes * 60) + seconds;
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
    clearInterval(this.interval);
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
