import { Injectable } from '@angular/core';
import { timer } from '../types/timer.types';

@Injectable({
  providedIn: 'root'
})
export class TimersService {
  private _timers: timer[] = [{label: 'test', time: 110}];

  public getTimers() {
    return this._timers;
  }

  public addTimer(timer: timer) {
    this._timers.push(timer)
  }

  constructor() { }
}
