import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Routine, Timer } from '../types/timer.types';

@Injectable({
  providedIn: 'root'
})
export class TimersService {
  constructor(private store: AngularFirestore) { }
  _timers = this.store.collection('timer').valueChanges({ idField: 'id' }) as Observable<Timer[]>;

  public getTimers() {
    return this._timers;
  }

  public addTimer(timer: Timer) {
    this.store.collection('timer').add(timer)
  }

  getAllRoutines() {
    return this.store.collection('routine').valueChanges({idField: 'id'}) as Observable<Routine[]>;
  }

  getRoutineById(id: string) {
    return this.store.collection('routine',  ref => ref.where('id', '==', id)).valueChanges() as Observable<any>;
  }

  deleteTimer(timer: Timer) {
    this.store.collection('timer').doc(timer.id).delete();
  }

  deleteRoutine(routine: Routine) {
    this.store.collection('routine').doc(routine.id).delete();
  }

  editTimer(timer: Timer) {
    this.store.collection('timer').doc(timer.id).update(timer);
  }

  editRoutine(routine: Routine) {
    this.store.collection('routine').doc(routine.id).update(routine);
  }

  saveRoutine(routine: Routine) {
    this.store.collection('routine').add(routine);
  }
}
