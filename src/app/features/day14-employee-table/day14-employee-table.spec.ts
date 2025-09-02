import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day14EmployeeTable } from './day14-employee-table';

describe('Day14EmployeeTable', () => {
  let component: Day14EmployeeTable;
  let fixture: ComponentFixture<Day14EmployeeTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day14EmployeeTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day14EmployeeTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
