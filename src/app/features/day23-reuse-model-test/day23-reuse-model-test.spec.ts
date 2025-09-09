import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day23ReuseModelTest } from './day23-reuse-model-test';

describe('Day23ReuseModelTest', () => {
  let component: Day23ReuseModelTest;
  let fixture: ComponentFixture<Day23ReuseModelTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day23ReuseModelTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day23ReuseModelTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
