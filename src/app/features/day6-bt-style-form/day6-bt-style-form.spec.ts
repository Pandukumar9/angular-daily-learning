import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6BtStyleForm } from './day6-bt-style-form';

describe('Day6BtStyleForm', () => {
  let component: Day6BtStyleForm;
  let fixture: ComponentFixture<Day6BtStyleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day6BtStyleForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day6BtStyleForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
