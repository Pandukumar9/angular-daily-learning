import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day12ExportTable } from './day12-export-table';

describe('Day12ExportTable', () => {
  let component: Day12ExportTable;
  let fixture: ComponentFixture<Day12ExportTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day12ExportTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day12ExportTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
