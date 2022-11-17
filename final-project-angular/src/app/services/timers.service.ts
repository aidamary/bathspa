import { Injectable } from '@angular/core';
import { timer } from '../types/timer.types';

@Injectable({
  providedIn: 'root'
})
export class TimersService {
  constructor() { }
  private _timers: timer[] = [{label: 'test', time: 110}];

  public getTimers() {
    return this._timers;
  }

  public addTimer(timer: timer) {
    this._timers.push(timer)
  }

  deleteTimer(timer: timer) {
    this._timers = this._timers.filter(_ => !(_.label === timer.label && _.time === timer.time));
  }
}
