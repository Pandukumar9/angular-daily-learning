import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';



export interface DialogData {
  title: string;
  description: string;
  image?: string;
}

@Component({
  selector: 'app-reuse-model',
  imports: [FormsModule,MatButtonModule, CommonModule,MatIconModule,MatDialogModule,MatInputModule,MatFormFieldModule],
  templateUrl: './reuse-model.html',
  styleUrl: './reuse-model.scss'
})
export class ReuseModel {
  comments = '';

  constructor(
    public dialogRef: MatDialogRef<ReuseModel>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onCancel() {
    this.dialogRef.close(null);
  }

  onSave() {
    this.dialogRef.close(this.comments);
  }
}
