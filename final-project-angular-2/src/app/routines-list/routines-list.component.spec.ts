import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesListComponent } from './routines-list.component';

describe('RoutinesListComponent', () => {
  let component: RoutinesListComponent;
  let fixture: ComponentFixture<RoutinesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutinesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
