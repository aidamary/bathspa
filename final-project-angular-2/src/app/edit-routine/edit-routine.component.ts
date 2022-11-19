import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { TimersService } from '../services/timers.service';
import { Routine, Timer } from '../types/timer.types';
import * as uuid from 'uuid';

@Component({
  selector: 'app-edit-routine',
  templateUrl: './edit-routine.component.html',
  styleUrls: ['./edit-routine.component.scss']
})
export class EditRoutineComponent implements OnInit {

  routineId!: string;
  routine!: Routine;
  editingTimer?: string = '';
  create: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private timerService: TimersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap((params: any): Observable<Routine[]> => {
      this.routineId = params.routineId;
      return this.timerService.getAllRoutines();
    })).subscribe((routines: Routine[]) => {
      if (this.routineId) {
        this.routine = routines.find(_ => _.id === this.routineId) as Routine;
      } else {
        this.create = true;
        this.routine = {
          title: '',
          timers: []
        }
      }
    })
  }

  drop(event: CdkDragDrop<Timer[]>) {
    moveItemInArray(this.routine.timers, event.previousIndex, event.currentIndex);
  }

  deleteTimer(timer: Timer) {
    if (confirm(`Are you sure you want to delete this timer?`)) {
      // this.timerService.deleteTimer(timer);
      this.routine.timers.splice(this.routine.timers.map(_ => _.id).indexOf(timer.id), 1)
    }
  }
  editTimer(timer: Timer) {
    this.editingTimer = timer.id;
  }

  saveChanges(timer: Timer) {
    // this.timerService.editTimer(timer);
    this.routine.timers = this.routine.timers.map(_ => _.id === timer.id ? timer : _);
    this.editingTimer = '';
  }

  saveRoutine() {
    if (this.create) {
      this.timerService.saveRoutine(this.routine);
    } else {
      this.timerService.editRoutine(this.routine);
    }
    this.router.navigate(['/routines'])
  }

  addTimer(event: any) {
    const id = uuid.v4();
    this.routine.timers.push({...event, id})
  }
}
