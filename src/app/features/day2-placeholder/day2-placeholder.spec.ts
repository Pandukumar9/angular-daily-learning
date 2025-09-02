import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2Placeholder } from './day2-placeholder';

describe('Day2Placeholder', () => {
  let component: Day2Placeholder;
  let fixture: ComponentFixture<Day2Placeholder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day2Placeholder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day2Placeholder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
