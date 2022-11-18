export interface Timer {
  id?: string;
  time: string;
  label: string;
}

export interface Routine {
  id?: string;
  name: string;
  timers: Timer[];
}
