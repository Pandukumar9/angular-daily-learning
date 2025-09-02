import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1ReactiveForm } from './day1-reactive-form';

describe('Day1ReactiveForm', () => {
  let component: Day1ReactiveForm;
  let fixture: ComponentFixture<Day1ReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day1ReactiveForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day1ReactiveForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
