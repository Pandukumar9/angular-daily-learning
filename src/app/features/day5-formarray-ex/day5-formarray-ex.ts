import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-day5-formarray-ex',
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './day5-formarray-ex.html',
  styleUrl: './day5-formarray-ex.scss'
})
export class Day5FormarrayEx {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phones: this.fb.array([this.createPhone()]) // start with one phone field
    });
  }

  // ✅ getter for controls
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get phones(): FormArray {
    return this.form.get('phones') as FormArray;
  }

  // factory method for phone group
  createPhone(): FormGroup {
    return this.fb.group({
      type: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }

  addPhone() {
    this.phones.push(this.createPhone());
  }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
    alert('Form submitted: ' + JSON.stringify(this.form.value));
  }
}
