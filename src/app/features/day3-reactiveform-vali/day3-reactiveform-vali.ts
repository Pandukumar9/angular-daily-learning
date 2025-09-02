import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day3-reactiveform-vali',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './day3-reactiveform-vali.html',
  styleUrl: './day3-reactiveform-vali.scss'
})
export class Day3ReactiveformVali {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // initialize form controls with validators
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // ✅ Getter so we can write f['username'], f['email'] in template
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // show all validation errors
      return;
    }
    console.log(this.form.value);
    alert('Form submitted successfully!');
  }
}
