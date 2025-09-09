import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DialogData, ReuseModel } from '../../shared/components/reuse-model/reuse-model';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-day23-reuse-model-test',
  imports: [ReuseModel,CommonModule,FormsModule,MatButtonModule,MatDialogModule],
  templateUrl: './day23-reuse-model-test.html',
  styleUrl: './day23-reuse-model-test.scss'
})
export class Day23ReuseModelTest {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    const data: DialogData = {
      title: 'Submit Feedback',
      description: 'Please provide your valuable feedback.',
      image: '/assets/sample.jpg'
    };

    const dialogRef = this.dialog.open(ReuseModel, {
      width: '400px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== null && result !== undefined) {
        console.log('Saved Comments:', result);
      } else {
        console.log('Dialog was cancelled');
      }
    });
  }
}
