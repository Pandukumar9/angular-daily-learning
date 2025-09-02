import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5FormarrayEx } from './day5-formarray-ex';

describe('Day5FormarrayEx', () => {
  let component: Day5FormarrayEx;
  let fixture: ComponentFixture<Day5FormarrayEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day5FormarrayEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day5FormarrayEx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
