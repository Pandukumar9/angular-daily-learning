import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-day1-reactive-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './day1-reactive-form.html',
  styleUrl: './day1-reactive-form.scss'
})
export class Day1ReactiveForm {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      alert('✅ Form Submitted: ' + JSON.stringify(this.form.value, null, 2));
    } else {
      this.form.markAllAsTouched();
    }
  }

  get username() {
    return this.form.get('username');
  }
  get email() {
    return this.form.get('email');
  }
}
