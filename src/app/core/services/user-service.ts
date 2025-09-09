import { Injectable, inject, Signal, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  username: string;
  name: string;
  department: string;
  location: string;
  order: number;
  profilePhoto: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/api/users';

  private usersSignal = signal<User[]>([]);
  readonly users: Signal<User[]> = computed(() => this.usersSignal());

  getUsers() {
    this.http.get<User[]>(this.apiUrl).subscribe(users => {
      this.usersSignal.set(users);
    });
  }

  addUser(user: FormData) {
    return this.http.post<User>(this.apiUrl, user);
  }

  deleteUser(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  getUsersdata(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addUserdata(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

}
