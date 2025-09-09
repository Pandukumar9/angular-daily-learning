import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18Department } from './day-18-department';

describe('Day18Department', () => {
  let component: Day18Department;
  let fixture: ComponentFixture<Day18Department>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day18Department]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day18Department);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
