import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day20Skeleton } from './day20-skeleton';

describe('Day20Skeleton', () => {
  let component: Day20Skeleton;
  let fixture: ComponentFixture<Day20Skeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day20Skeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day20Skeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
