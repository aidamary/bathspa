import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Timer } from '../types/timer.types';

@Injectable({
  providedIn: 'root'
})
export class TimersService {
  constructor(private store: AngularFirestore) { }
  //private _timers: Timer[] = [{label: 'test', time: '00:10'}];
  _timers = this.store.collection('timer').valueChanges({ idField: 'id' }) as Observable<Timer[]>;

  public getTimers() {
    return this._timers;
  }

  public addTimer(timer: Timer) {
    // this._timers.push(timer)
    this.store.collection('timer').add(timer)
  }

  deleteTimer(timer: Timer) {
    // const timerIndex = this._timers.indexOf(timer);
    // this._timers.splice(timerIndex, 1);
    this.store.collection('timer').doc(timer.id).delete();
  }

  editTimer(timer: Timer) {
    this.store.collection('timer').doc(timer.id).update(timer);
  }
}
