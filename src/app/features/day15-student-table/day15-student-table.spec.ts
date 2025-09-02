import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15StudentTable } from './day15-student-table';

describe('Day15StudentTable', () => {
  let component: Day15StudentTable;
  let fixture: ComponentFixture<Day15StudentTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day15StudentTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day15StudentTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
