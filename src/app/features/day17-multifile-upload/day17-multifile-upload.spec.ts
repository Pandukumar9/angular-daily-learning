import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17MultifileUpload } from './day17-multifile-upload';

describe('Day17MultifileUpload', () => {
  let component: Day17MultifileUpload;
  let fixture: ComponentFixture<Day17MultifileUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day17MultifileUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day17MultifileUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
