import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export interface User {
  id: number;
  username: string;
  email: string;
  mobile: string;
}

const USER_DATA: User[] = [
  { id: 1, username: 'Vijay', email: 'vijay@gmail.com', mobile: '9876543210' },
  { id: 2, username: 'Soumya', email: 'soumya@gmail.com', mobile: '8765432109' },
  { id: 3, username: 'Kumar', email: 'kumar@gmail.com', mobile: '7654321098' },
  { id: 4, username: 'Ravi', email: 'ravi@gmail.com', mobile: '6543210987' },
  { id: 5, username: 'Priya', email: 'priya@gmail.com', mobile: '9123456780' },
  { id: 6, username: 'Arun', email: 'arun@gmail.com', mobile: '9988776655' },
  { id: 7, username: 'Meena', email: 'meena@gmail.com', mobile: '9090909090' },
  { id: 8, username: 'Suresh', email: 'suresh@gmail.com', mobile: '9191919191' },
  { id: 9, username: 'Anu', email: 'anu@gmail.com', mobile: '8080808080' },
  { id: 10, username: 'Kiran', email: 'kiran@gmail.com', mobile: '7070707070' }
];

@Component({
  selector: 'app-day12-export-table',
  imports: [CommonModule, MatTableModule],
  templateUrl: './day12-export-table.html',
  styleUrl: './day12-export-table.scss'
})
export class Day12ExportTable {
 displayedColumns: string[] = ['id', 'username', 'email', 'mobile'];
  dataSource = USER_DATA;

  // ✅ Export to Excel
  exportExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Users');
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'UserData.xlsx');
  }

  // ✅ Export to PDF
  exportPDF() {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [['ID', 'Username', 'Email', 'Mobile']],
      body: this.dataSource.map(user => [user.id, user.username, user.email, user.mobile]),
    });
    doc.save('UserData.pdf');
  }
}

// npm install xlsx file-saver jspdf jspdf-autotable
