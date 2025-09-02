import { Component } from '@angular/core';
import { Student } from '../../core/models/student.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { StudentService } from '../../core/services/student-service';

@Component({
  selector: 'app-day15-student-table',
  imports: [MatTableModule],
  templateUrl: './day15-student-table.html',
  styleUrl: './day15-student-table.scss'
})
export class Day15StudentTable {
  displayedColumns: string[] = ['id', 'name', 'email', 'mobile', 'branch', 'year', 'actions'];
  dataSource = new MatTableDataSource<Student>([]);

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(() => {
        this.loadStudents();
      });
    }
  }
}
