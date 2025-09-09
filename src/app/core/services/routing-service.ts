import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoutingService {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  getCurrentUrl(): string {
    return this.router.url;
  }
}
