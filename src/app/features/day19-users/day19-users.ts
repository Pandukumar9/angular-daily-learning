import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService, User } from '../../core/services/user-service';

@Component({
  selector: 'app-day19-users',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './day19-users.html',
  styleUrls: ['./day19-users.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Day19UsersComponent implements OnInit {
  userForm: FormGroup;
  private userService = inject(UserService);
  users = this.userService.users;
  searchTerm = signal('');
  filteredUsers = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.users();
    return this.users().filter(user =>
      user.name?.toLowerCase().includes(term) ||
      user.username?.toLowerCase().includes(term) ||
      user.department?.toLowerCase().includes(term)
    );
  });
  profilePhoto: string = '';
  photoErrorSet = new Set<number>();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      department: ['', Validators.required],
      location: ['', Validators.required],
      order: [0, [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      profilePhoto: ['']
    });
  this.userService.getUsers();
  }
  ngOnInit() {
   this.userService.getUsers();
  }

  onAddUser() {
    if (this.userForm.invalid) return;
    const formData = new FormData();
    Object.entries(this.userForm.value).forEach(([key, value]) => {
      if (key === 'profilePhoto' && typeof value === 'string' && value.startsWith('data:image')) {
        // Convert base64 to Blob
  const arr = value.split(',');
  const mimeMatch = arr[0].match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : 'image/png';
  const bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        for (let i = 0; i < n; i++) u8arr[i] = bstr.charCodeAt(i);
        formData.append('profilePhoto', new Blob([u8arr], { type: mime }), 'profilePhoto');
      } else {
        formData.append(key, value ? value.toString() : '');
      }
    });
    this.userService.addUser(formData).subscribe(() => {
      this.userService.getUsers();
      this.userForm.reset({ order: 0 });
      this.profilePhoto = '';
    });
  }

  onDeleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.userService.getUsers();
    });
  }

  onPhotoChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePhoto = reader.result as string;
        this.userForm.get('profilePhoto')?.setValue(this.profilePhoto);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onPhotoError(userId: number) {
    this.photoErrorSet.add(userId);
  }
}
