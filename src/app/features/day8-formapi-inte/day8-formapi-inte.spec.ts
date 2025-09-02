import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8FormapiInte } from './day8-formapi-inte';

describe('Day8FormapiInte', () => {
  let component: Day8FormapiInte;
  let fixture: ComponentFixture<Day8FormapiInte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day8FormapiInte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day8FormapiInte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
