import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7MaterialForm } from './day7-material-form';

describe('Day7MaterialForm', () => {
  let component: Day7MaterialForm;
  let fixture: ComponentFixture<Day7MaterialForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day7MaterialForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day7MaterialForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
