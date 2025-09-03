import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: string;
  base64: string;
  FileUrl?: string;


  // extra fields for upload progress
  FileProgress?: number;
  FileProgessSize?: string;
  FileSize?: string;
}


@Component({
  selector: 'app-day17-multifile-upload',
  imports: [CommonModule],
  templateUrl: './day17-multifile-upload.html',
  styleUrl: './day17-multifile-upload.scss'
})
export class Day17MultifileUpload implements OnInit {
  uploadedMedia: UploadedFile[] = []; // files being uploaded
  files: UploadedFile[] = [];         // already uploaded list

  maxFileSize = 10 * 1024 * 1024; // 10 MB
  allowedFileTypes = [
    'image/jpeg', 'image/png', 'application/pdf',
    'application/msword', // .doc
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
    'application/vnd.ms-excel', // .xls
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadFiles();
  }

  async onFileBrowse(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;

    for (let i = 0; i < input.files.length; i++) {
      const file = input.files[i];

      // validate type
      if (!this.allowedFileTypes.includes(file.type)) {
        alert(`❌ File type ${file.type} not allowed`);
        continue;
      }

      // validate size
      if (file.size > this.maxFileSize) {
        alert(`❌ ${file.name} exceeds 10MB limit`);
        continue;
      }

      const base64 = await this.convertFileToBase64(file);

      const newFile: UploadedFile = {
        id: crypto.randomUUID(),
        name: file.name,
        size: file.size,
        type: file.type,
        uploadedAt: new Date().toISOString(),
        base64,
        FileUrl: file.type.startsWith('image/') ? base64 : 'assets/file-icon.png',
        FileProgress: 0,
        FileProgessSize: '0 MB',
      };

      this.uploadedMedia.push(newFile);
      this.simulateUpload(newFile);
    }
  }

  simulateUpload(file: UploadedFile) {
    const fileSizeMB = (file.size / 1024 / 1024).toFixed(2) + ' MB';
    let progress = 0;

    const interval = setInterval(() => {
      if (progress < 90) {
        progress += 10;
        file.FileProgress = progress;
        file.FileProgessSize = ((file.size * progress) / 100 / 1024 / 1024).toFixed(2) + ' MB';
      }
    }, 200);

    this.http.post<UploadedFile>('http://localhost:3000/uploads', file).subscribe({
      next: (res) => {
        clearInterval(interval);
        file.FileProgress = 100;
        file.FileProgessSize = fileSizeMB;

        // move to uploaded list
        this.files.push(res);
        this.uploadedMedia = this.uploadedMedia.filter(f => f.id !== file.id);
      },
      error: () => {
        clearInterval(interval);
        file.FileProgress = 0;
        alert('❌ Upload failed for ' + file.name);
      }
    });
  }

  removeFile(id: string) {
    this.http.delete(`http://localhost:3000/uploads/${id}`).subscribe(() => {
      this.files = this.files.filter((f) => f.id !== id);
    });
  }

  loadFiles() {
    this.http.get<UploadedFile[]>('http://localhost:3000/uploads').subscribe((res) => {
      this.files = res;
    });
  }

  convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  removeImage(index: number) {
    this.uploadedMedia.splice(index, 1);
  }

}
