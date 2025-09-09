import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinLoader } from './spin-loader';

describe('SpinLoader', () => {
  let component: SpinLoader;
  let fixture: ComponentFixture<SpinLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
