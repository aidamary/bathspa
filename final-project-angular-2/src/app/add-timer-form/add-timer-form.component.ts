import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Timer } from '../types/timer.types';

@Component({
  selector: 'app-add-timer-form',
  templateUrl: './add-timer-form.component.html',
  styleUrls: ['./add-timer-form.component.scss']
})
export class AddTimerFormComponent implements OnInit {
  @Output() addTimerEvent: EventEmitter<Timer> = new EventEmitter();
  label: string = '';
  time: string = '00:00:00';

  constructor() { }

  ngOnInit(): void {
  }

  addTimer(event: any) {
    event.preventDefault();
    this.addTimerEvent.next({label: this.label, time: this.time});
    this.resetFields();
  }

  resetFields() {
    this.time = '';
    this.label = '';
  }

}
