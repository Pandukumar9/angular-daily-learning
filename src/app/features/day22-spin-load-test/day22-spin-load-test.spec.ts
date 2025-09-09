import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day22SpinLoadTest } from './day22-spin-load-test';

describe('Day22SpinLoadTest', () => {
  let component: Day22SpinLoadTest;
  let fixture: ComponentFixture<Day22SpinLoadTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day22SpinLoadTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day22SpinLoadTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
