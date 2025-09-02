import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface User {
  id: number;
  username: string;
  email: string;
  mobile: string;
}

const USER_DATA: User[] = [
  { id: 1, username: 'Vijay', email: 'vijay@gmail.com', mobile: '9876543210' },
  { id: 2, username: 'Soumya', email: 'soumya@gmail.com', mobile: '8765432109' },
  { id: 3, username: 'Kiran', email: 'kiran@gmail.com', mobile: '7654321098' },
  { id: 4, username: 'Arjun', email: 'arjun@gmail.com', mobile: '6543210987' },
];

@Component({
  selector: 'app-day13-search-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './day13-search-filter.html',
  styleUrls: ['./day13-search-filter.scss'],
})
export class Day13SearchFilter {
  displayedColumns: string[] = ['id', 'username', 'email', 'mobile'];

  dataSource: User[] = [...USER_DATA]; // working dataset
  columnFilters: { [K in keyof User]?: string } = {
    id: '',
    username: '',
    email: '',
    mobile: '',
  };

  // 🔍 Global search
  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    this.dataSource = this.filterData(value, this.columnFilters);
  }

  // 📋 Column search
  applyColumnFilter() {
    this.dataSource = this.filterData('', this.columnFilters);
  }

  private filterData(global: string, filters: { [K in keyof User]?: string }): User[] {
    return USER_DATA.filter((row) => {
      // Global Search
      const matchesGlobal = global
        ? Object.values(row).some((val) =>
            val.toString().toLowerCase().includes(global)
          )
        : true;

      // Column-wise Search (safe key typing)
      const matchesColumns = (Object.keys(filters) as (keyof User)[]).every(
        (key) =>
          filters[key]
            ? row[key]
                .toString()
                .toLowerCase()
                .includes(filters[key]!.toLowerCase())
            : true
      );

      return matchesGlobal && matchesColumns;
    });
  }
}
