import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, Observable, takeWhile } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/uploads';

  constructor(private http: HttpClient) {}

  // Simulated upload with progress
  uploadFile(file: File): Observable<{ progress: number; status: string }> {
    return new Observable((observer) => {
      let progress = 0;

      const interval = setInterval(() => {
        progress += 10;
        if (progress <= 100) {
          observer.next({ progress, status: 'uploading' });
        }
        if (progress === 100) {
          clearInterval(interval);

          // Save metadata to JSON Server
          this.http.post(this.apiUrl, {
            name: file.name,
            size: file.size,
            type: file.type,
            uploadedAt: new Date()
          }).subscribe(() => {
            observer.next({ progress: 100, status: 'done' });
            observer.complete();
          });
        }
      }, 300);
    });
  }

  getFiles() {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteFile(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getuploads() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
