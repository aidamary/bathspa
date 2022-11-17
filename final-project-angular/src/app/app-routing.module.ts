import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerFormComponent } from './timer-form/timer-form.component';

const routes: Routes = [
  {
    path: '',
    component: TimerFormComponent
  },
  {
    path: 'start',
    component: TimerDisplayComponent
  },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
