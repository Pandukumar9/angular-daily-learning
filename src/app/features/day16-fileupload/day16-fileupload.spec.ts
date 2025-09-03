import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16Fileupload } from './day16-fileupload';

describe('Day16Fileupload', () => {
  let component: Day16Fileupload;
  let fixture: ComponentFixture<Day16Fileupload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day16Fileupload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day16Fileupload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
