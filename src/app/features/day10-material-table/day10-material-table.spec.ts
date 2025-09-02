import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day10MaterialTable } from './day10-material-table';

describe('Day10MaterialTable', () => {
  let component: Day10MaterialTable;
  let fixture: ComponentFixture<Day10MaterialTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day10MaterialTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day10MaterialTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
