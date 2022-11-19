export interface Timer {
  id?: string;
  time: string;
  label: string;
}

export interface Routine {
  id?: string;
  title: string;
  timers: Timer[];
}
