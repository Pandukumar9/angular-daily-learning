import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

export interface Club {
  id: number;
  name: string;
  description: string;
  members: number;
  logo: string;
}

@Component({
  selector: 'app-day20-club',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './day20-club.html',
  styleUrls: ['./day20-club.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Day20ClubComponent {
  clubForm: FormGroup;
  clubs: Club[] = [];
  logo: string = '';

  constructor(private fb: FormBuilder) {
    this.clubForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      members: [0, [Validators.required, Validators.min(1)]],
      logo: ['']
    });
  }

  onAddClub() {
    if (this.clubForm.invalid) return;
    const club: Club = {
      id: Date.now(),
      ...this.clubForm.value,
      logo: this.logo
    };
    this.clubs.push(club);
    this.clubForm.reset({ members: 0 });
    this.logo = '';
  }

  onLogoChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.logo = reader.result as string;
        this.clubForm.get('logo')?.setValue(this.logo);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onDeleteClub(id: number) {
    this.clubs = this.clubs.filter(c => c.id !== id);
  }
}
