import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimersService } from '../services/timers.service';
import { Routine } from '../types/timer.types';

@Component({
  selector: 'app-routines-list',
  templateUrl: './routines-list.component.html',
  styleUrls: ['./routines-list.component.scss']
})
export class RoutinesListComponent implements OnInit {
  routines: Routine[] = [];

  constructor(
    private timersService: TimersService,
    private router: Router) { }

  ngOnInit(): void {
    this.timersService.getAllRoutines().subscribe(routines => {
      this.routines = routines;

    })
  }

  editRoutine(routine: Routine) {
    this.router.navigate(['routines', routine.id, 'edit']);
  }

  deleteRoutine(routine: Routine) {
    if (confirm(`Are you sure you want to delete this timer?`)) {
      this.timersService.deleteRoutine(routine);
      this.timersService.getAllRoutines().subscribe(routines => this.routines = routines);
    }
  }


  startRoutine(routine: Routine) {
    this.router.navigate(['routines', routine.id]);
  }

}
