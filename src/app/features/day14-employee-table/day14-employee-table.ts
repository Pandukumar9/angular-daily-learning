import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';


interface Employee {
  id: number;
  username: string;
  email: string;
  mobile: string;
}
@Component({
  selector: 'app-day14-employee-table',
  imports: [MatTableModule,MatCheckboxModule, MatPaginator],
  templateUrl: './day14-employee-table.html',
  styleUrl: './day14-employee-table.scss'
})
export class Day14EmployeeTable implements OnInit {
  displayedColumns: string[] = ['select', 'id', 'username', 'email', 'mobile', 'actions'];
  dataSource = new MatTableDataSource<Employee>([]);
  selection = new SelectionModel<Employee>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    // Dummy data
    this.dataSource.data = [
      { id: 1, username: 'Vijay', email: 'vijay@test.com', mobile: '9999999999' },
      { id: 2, username: 'Kiran', email: 'kiran@test.com', mobile: '8888888888' },
      { id: 3, username: 'Ravi', email: 'ravi@test.com', mobile: '7777777777' },
    ];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /** Whether all rows are selected */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** Delete selected rows */
  bulkDelete() {
    const selectedIds = this.selection.selected.map(emp => emp.id);
    this.dataSource.data = this.dataSource.data.filter(emp => !selectedIds.includes(emp.id));
    this.selection.clear();
  }

  /** Delete single row */
  deleteRow(id: number) {
    this.dataSource.data = this.dataSource.data.filter(emp => emp.id !== id);
  }
}
