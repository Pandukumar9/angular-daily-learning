import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3ReactiveformVali } from './day3-reactiveform-vali';

describe('Day3ReactiveformVali', () => {
  let component: Day3ReactiveformVali;
  let fixture: ComponentFixture<Day3ReactiveformVali>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day3ReactiveformVali]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day3ReactiveformVali);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
