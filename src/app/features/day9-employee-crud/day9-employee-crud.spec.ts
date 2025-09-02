import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day9EmployeeCrud } from './day9-employee-crud';

describe('Day9EmployeeCrud', () => {
  let component: Day9EmployeeCrud;
  let fixture: ComponentFixture<Day9EmployeeCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day9EmployeeCrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day9EmployeeCrud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
