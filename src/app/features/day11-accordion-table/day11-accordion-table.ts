import { Component } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { User } from '../day10-material-table/day10-material-table';
import { CommonModule } from '@angular/common';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-day11-accordion-table',
  imports: [MatExpansionModule,MatTable,CommonModule,CdkAccordionModule,MatTableModule,MatButtonModule,MatIconModule],
  templateUrl: './day11-accordion-table.html',
  styleUrl: './day11-accordion-table.scss'
})
export class Day11AccordionTable {
  displayedColumns: string[] = ['id', 'username', 'email', 'mobile'];
  dataSource = new MatTableDataSource<User>([]);

  groupedUsers: { [key: string]: User[] } = {};

  constructor() {
    this.groupDuplicates();
  }

 USER_DATA: User[] = [
  { id: 1, username: 'Vijay', email: 'vijay@gmail.com', mobile: '9876543210' },
  { id: 2, username: 'Soumya', email: 'soumya@gmail.com', mobile: '8765432109' },
  { id: 3, username: 'Kumar', email: 'kumar@gmail.com', mobile: '7654321098' },
  { id: 4, username: 'Ravi', email: 'ravi@gmail.com', mobile: '6543210987' },
  { id: 5, username: 'Vijay', email: 'vijay123@gmail.com', mobile: '9123456780' },
  { id: 6, username: 'Soumya', email: 'soumyatest@gmail.com', mobile: '9988776655' },
  { id: 7, username: 'Kumar', email: 'kumarx@gmail.com', mobile: '8877665544' },
  { id: 8, username: 'Ravi', email: 'ravi999@gmail.com', mobile: '7766554433' },
  { id: 9, username: 'Ravi', email: 'ravi111@gmail.com', mobile: '6655443322' },
];


  groupDuplicates() {
    this.groupedUsers = this.USER_DATA.reduce((groups, user) => {
      if (!groups[user.username]) {
        groups[user.username] = [];
      }
      groups[user.username].push(user);
      return groups;
    }, {} as { [key: string]: User[] });

    // Unique records (only first item of each group)
    this.dataSource.data = Object.values(this.groupedUsers).map(users => users[0]);
  }

  mergeDuplicates(username: string) {
    if (this.groupedUsers[username] && this.groupedUsers[username].length > 1) {
      // Keep only the first record, remove duplicates
      this.groupedUsers[username] = [this.groupedUsers[username][0]];
      this.groupDuplicates();
    }
  }
}
