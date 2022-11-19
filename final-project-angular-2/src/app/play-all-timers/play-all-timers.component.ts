import { Component, OnInit } from '@angular/core';
import { TimersService } from '../services/timers.service';
import { Timer } from '../types/timer.types';

@Component({
  selector: 'app-play-all-timers',
  templateUrl: './play-all-timers.component.html',
  styleUrls: ['./play-all-timers.component.scss']
})
export class PlayAllTimersComponent implements OnInit {
  timers: Timer[] = [];

  constructor(
    private timerService: TimersService
  ) { }

  ngOnInit(): void {
    this.timerService.getTimers().subscribe(timers => {
      this.timers = timers;
    });
  }

}
