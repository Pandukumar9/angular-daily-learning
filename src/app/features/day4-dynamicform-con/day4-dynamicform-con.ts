import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-day4-dynamicform-con',
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './day4-dynamicform-con.html',
  styleUrl: './day4-dynamicform-con.scss'
})
export class Day4DynamicformCon {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      skills: this.fb.array([]) // start with empty skills list
    });
  }

  // ✅ getter for easy access
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  // Add new skill field
  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
  }

  // Remove skill field
  removeSkill(index: number) {
    this.skills.removeAt(index);
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
