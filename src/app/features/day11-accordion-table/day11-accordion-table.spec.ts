import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day11AccordionTable } from './day11-accordion-table';

describe('Day11AccordionTable', () => {
  let component: Day11AccordionTable;
  let fixture: ComponentFixture<Day11AccordionTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day11AccordionTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day11AccordionTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
