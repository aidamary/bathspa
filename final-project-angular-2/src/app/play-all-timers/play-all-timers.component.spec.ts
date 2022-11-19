import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAllTimersComponent } from './play-all-timers.component';

describe('PlayAllTimersComponent', () => {
  let component: PlayAllTimersComponent;
  let fixture: ComponentFixture<PlayAllTimersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayAllTimersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayAllTimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
