import { Component, OnInit, signal } from '@angular/core';
import { SpinLoader } from '../../shared/components/spin-loader/spin-loader';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day22-spin-load-test',
  imports: [SpinLoader,CommonModule],
  templateUrl: './day22-spin-load-test.html',
  styleUrl: './day22-spin-load-test.scss'
})
export class Day22SpinLoadTest implements OnInit {
  products = signal<string[]>([]);
  loading = signal(true);

  ngOnInit() {
    setTimeout(() => {
      this.products.set(["Laptop", "Smartphone", "Headphones"]);
      this.loading.set(false);
    }, 3000); // Simulate API delay
  }
}
