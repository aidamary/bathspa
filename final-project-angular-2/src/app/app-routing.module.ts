import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRoutineComponent } from './edit-routine/edit-routine.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayAllTimersComponent } from './play-all-timers/play-all-timers.component';
import { RoutineDetailComponent } from './routine-detail/routine-detail.component';
import { RoutinesListComponent } from './routines-list/routines-list.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerFormComponent } from './timer-form/timer-form.component';

const routes: Routes = [
  {
    path: '',
    component: TimerFormComponent
  },
  {
    path: 'start',
    component: PlayAllTimersComponent
  },
  {
    path: 'routines',
    component: RoutinesListComponent
  },
  {
    path: 'routines/create',
    component: EditRoutineComponent
  },
  {
    path: 'routines/:routineId',
    component: RoutineDetailComponent
  },
  {
    path: 'routines/:routineId/edit',
    component: EditRoutineComponent
  },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
