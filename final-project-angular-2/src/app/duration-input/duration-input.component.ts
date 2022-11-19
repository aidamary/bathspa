import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit, OnChanges {

  @Input() durationString!: string;
  @Input() label!: string;
  @Input() disabled!: boolean;

  @Output() durationStringChange: EventEmitter<string> = new EventEmitter<string>();

  hours!: String;
  minutes!: String;
  seconds!: String;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['durationString']) {
      let splitDuration = this.durationString.split(':');

      this.hours = splitDuration[0];
      this.minutes = splitDuration[1];
      this.seconds = splitDuration[2];
    }
  }

  ngOnInit() {
    if (this.durationString) {
      let splitDuration = this.durationString.split(':');

      this.hours = splitDuration[0];
      this.minutes = splitDuration[1];
      this.seconds = splitDuration[2];
    }
  }

  check(type: string) {
    if (type === 'hours') {
      this.hours = this.getValidValue(this.hours as string, 23);
    } else if (type === 'minutes') {
      this.minutes = this.getValidValue(this.minutes as string, 59);
    } else if (type === 'seconds') {
      this.seconds = this.getValidValue(this.seconds as string, 59);
    }

    this.durationString = `${this.hours}:${this.minutes}:${this.seconds}`;
    this.durationStringChange.emit(this.durationString);
  }

  getValidValue(value: string, max: number): String {
    let n;
    if (/^\d+$/.test(value)) {
      n = parseInt(value);
      n = Math.max(0, n);
      n = Math.min(max, n);
      return new String(n);
    } else {
      return new String('00');
    }
  }

}
