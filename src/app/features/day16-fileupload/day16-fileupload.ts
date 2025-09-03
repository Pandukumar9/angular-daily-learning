import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api-service';

interface UploadItem {
  file: File;
  progress: number;
  status: 'pending' | 'uploading' | 'done' | 'error';
}

@Component({
  selector: 'app-day16-fileupload',
  imports: [CommonModule],
  templateUrl: './day16-fileupload.html',
  styleUrl: './day16-fileupload.scss'
})
export class Day16Fileupload {
 dragActive = false;
  files: UploadItem[] = [];
  showModal = signal(false);

  constructor(private uploadService: ApiService) {}

  // 🔹 Open/Close popup
  openModal() {
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
  }

  // 🔹 File selection
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(input.files);
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.dragActive = false;
    if (event.dataTransfer?.files) {
      this.handleFiles(event.dataTransfer.files);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.dragActive = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.dragActive = false;
  }

  handleFiles(fileList: FileList) {
    Array.from(fileList).forEach(file => {
      this.files.push({ file, progress: 0, status: 'pending' });
    });
  }

  // 🔹 Upload files
  uploadFile(item: UploadItem) {
    item.status = 'uploading';
    this.uploadService.uploadFile(item.file).subscribe({
      next: (res) => {
        item.progress = res.progress;
        if (res.status === 'done') {
          item.status = 'done';
        }
      },
      error: () => {
        item.status = 'error';
      }
    });
  }

  uploadAll() {
    this.files.forEach(f => {
      if (f.status === 'pending') this.uploadFile(f);
    });
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
  }
}
