import { Component, OnInit, signal } from '@angular/core';
import { SkeletonLoader } from '../../shared/components/skeleton-loader/skeleton-loader';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day20-skeleton',
  imports: [SkeletonLoader,CommonModule],
  templateUrl: './day20-skeleton.html',
  styleUrl: './day20-skeleton.scss'
})
export class Day20Skeleton implements OnInit {
 users = signal<{ name: string; email: string }[]>([]);
  loading = signal(true);

  ngOnInit() {
    setTimeout(() => {
      this.users.set([
        { name: 'Vijay', email: 'vijay@example.com' },
        { name: 'Anita', email: 'anita@example.com' },
        { name: 'Rahul', email: 'rahul@example.com' },
      ]);
      this.loading.set(false);
    }, 3000); // simulate API delay
  }
}
