import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DepartmentService } from '../../core/services/department-service';

@Component({
  selector: 'app-day-18-department',
  imports: [],
  templateUrl: './day-18-department.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './day-18-department.scss'
})
export class Day18Department {
  name = signal('');
  location = signal('');
  private departmentService: DepartmentService = inject(DepartmentService);
  departments = this.departmentService.departments;

  constructor() {
    this.departmentService.getDepartments();
  }

  onAddDepartment() {
    if (!this.name() || !this.location()) return;
    this.departmentService.addDepartment({ name: this.name(), location: this.location() }).subscribe(() => {
      this.departmentService.getDepartments();
      this.name.set('');
      this.location.set('');
    });
  }

  onDeleteDepartment(id: number) {
    this.departmentService.deleteDepartment(id).subscribe(() => {
      this.departmentService.getDepartments();
    });
  }
}
