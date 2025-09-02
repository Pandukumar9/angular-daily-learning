import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day13SearchFilter } from './day13-search-filter';

describe('Day13SearchFilter', () => {
  let component: Day13SearchFilter;
  let fixture: ComponentFixture<Day13SearchFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day13SearchFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day13SearchFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
