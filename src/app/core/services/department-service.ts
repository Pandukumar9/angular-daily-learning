import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signal, signal, computed } from '@angular/core';

export interface Department {
  id: number;
  name: string;
  location: string;
}

@Injectable({ providedIn: 'root' })
export class DepartmentService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/api/departments';

  private departmentsSignal = signal<Department[]>([]);
  readonly departments: Signal<Department[]> = computed(() => this.departmentsSignal());

  getDepartments() {
    this.http.get<Department[]>(this.apiUrl).subscribe(depts => {
      this.departmentsSignal.set(depts);
    });
  }

  addDepartment(dept: Omit<Department, 'id'>) {
    return this.http.post<Department>(this.apiUrl, dept);
  }

  updateDepartment(dept: Department) {
    return this.http.put<Department>(`${this.apiUrl}/${dept.id}`, dept);
  }

  deleteDepartment(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
