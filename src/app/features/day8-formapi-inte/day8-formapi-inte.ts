import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day8-formapi-inte',
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './day8-formapi-inte.html',
  styleUrl: './day8-formapi-inte.scss'
})
export class Day8FormapiInte implements OnInit {
  users: any[] = [];

userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
   this.userForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
  });
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((res:any) => {
      this.users = res;
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe(() => {
        alert('User added successfully');
        this.loadUsers(); // refresh list
        this.userForm.reset();
      });
    }
  }
}
