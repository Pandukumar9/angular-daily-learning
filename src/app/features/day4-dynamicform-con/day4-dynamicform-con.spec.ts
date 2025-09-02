import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4DynamicformCon } from './day4-dynamicform-con';

describe('Day4DynamicformCon', () => {
  let component: Day4DynamicformCon;
  let fixture: ComponentFixture<Day4DynamicformCon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day4DynamicformCon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day4DynamicformCon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
