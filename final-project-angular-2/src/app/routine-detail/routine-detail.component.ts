import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { TimersService } from '../services/timers.service';
import { Routine } from '../types/timer.types';

@Component({
  selector: 'app-routine-detail',
  templateUrl: './routine-detail.component.html',
  styleUrls: ['./routine-detail.component.scss']
})
export class RoutineDetailComponent implements OnInit {

  routineId!: string;
  routine!: Routine;

  constructor(
    private activatedRoute: ActivatedRoute,
    private timerService: TimersService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap((params: any): Observable<Routine[]> => {
      this.routineId = params.routineId;
      return this.timerService.getAllRoutines();
    })).subscribe((routines: Routine[]) => {
      this.routine = routines.find(_ => _.id === this.routineId) as Routine;
    })
  }

}
