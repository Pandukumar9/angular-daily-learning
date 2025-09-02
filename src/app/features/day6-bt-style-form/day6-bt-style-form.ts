import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-day6-bt-style-form',
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './day6-bt-style-form.html',
  styleUrl: './day6-bt-style-form.scss'
})
export class Day6BtStyleForm {
  myForm!: FormGroup;
  constructor(private fb: FormBuilder) {
      // Bootstrap Styled Form
  this.myForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    message: [''],
    mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
  });
  }



  // Submit
  onSubmit() {
    if (this.myForm.valid) {
      alert('Form Submitted Successfully ✅\n' + JSON.stringify(this.myForm.value, null, 2));
      this.myForm.reset();
    } else {
      this.myForm.markAllAsTouched();
    }
  }
}
