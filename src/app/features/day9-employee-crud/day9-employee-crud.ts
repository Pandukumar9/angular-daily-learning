import { Component, OnInit } from '@angular/core';
import { Employee } from '../../core/models/employee.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../core/services/employee-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day9-employee-crud',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './day9-employee-crud.html',
  styleUrl: './day9-employee-crud.scss',
})
export class Day9EmployeeCrud implements OnInit {
  employeesdata: Employee[] = [];
  editMode = false;
  selectedId: number | null = null;
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder, private service: EmployeeService) {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });
  }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
  this.service.getEmployees().subscribe({
    next: (res) => {
      this.employeesdata = res;
      console.log('Users fetched:', this.employeesdata);
    },
    error: (err) => {
      console.error('Error loading users', err);
    }
  });
  }

  onSubmit() {
    if (this.employeeForm.invalid) return;

    const emp: Employee = this.employeeForm.value as Employee;

    if (this.editMode && this.selectedId) {
      emp.id = this.selectedId;
      this.service.updateEmployee(emp).subscribe(() => {
        this.loadEmployees();
        this.resetForm();
      });
    } else {
      this.service.addEmployee(emp).subscribe(() => {
        this.loadEmployees();
        this.resetForm();
      });
    }
  }

  editEmployee(emp: Employee) {
    this.editMode = true;
    this.selectedId = emp.id!;
    this.employeeForm.patchValue(emp);
  }

  deleteEmployee(id: number) {
    this.service.deleteEmployee(id).subscribe(() => this.loadEmployees());
  }

  resetForm() {
    this.editMode = false;
    this.selectedId = null;
    this.employeeForm.reset();
  }
}
