import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

// Angular Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';   // 👈 Add this
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

export interface User {
  id: number;
  username: string;
  email: string;
  mobile: string;
}

export const USER_DATA: User[] = [
  { id: 1, username: 'Vijay', email: 'vijay@gmail.com', mobile: '9876543210' },
  { id: 2, username: 'Soumya', email: 'soumya@gmail.com', mobile: '8765432109' },
  { id: 3, username: 'Kumar', email: 'kumar@gmail.com', mobile: '7654321098' },
  { id: 4, username: 'Ravi', email: 'ravi@gmail.com', mobile: '6543210987' },
  { id: 5, username: 'Priya', email: 'priya@gmail.com', mobile: '9123456780' },
  { id: 6, username: 'Arjun', email: 'arjun@gmail.com', mobile: '9234567810' },
  { id: 7, username: 'Sita', email: 'sita@gmail.com', mobile: '9345678920' },
  { id: 8, username: 'Rahul', email: 'rahul@gmail.com', mobile: '9456789030' },
  { id: 9, username: 'Meena', email: 'meena@gmail.com', mobile: '9567890140' },
  { id: 10, username: 'Anil', email: 'anil@gmail.com', mobile: '9678901250' },
  { id: 11, username: 'Sneha', email: 'sneha@gmail.com', mobile: '9789012360' },
  { id: 12, username: 'Ajay', email: 'ajay@gmail.com', mobile: '9890123470' },
  { id: 13, username: 'Lakshmi', email: 'lakshmi@gmail.com', mobile: '9901234580' },
  { id: 14, username: 'Manoj', email: 'manoj@gmail.com', mobile: '9012345690' },
  { id: 15, username: 'Divya', email: 'divya@gmail.com', mobile: '9123456701' }
];

@Component({
  selector: 'app-day10-material-table',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,      // 👈 Add this
    MatPaginatorModule,
    MatTableModule
  ],
  templateUrl: './day10-material-table.html',
  styleUrl: './day10-material-table.scss'
})
export class Day10MaterialTable implements AfterViewInit {
  displayedColumns: string[] = ['id', 'username', 'email', 'mobile'];
  dataSource = new MatTableDataSource<User>(USER_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
