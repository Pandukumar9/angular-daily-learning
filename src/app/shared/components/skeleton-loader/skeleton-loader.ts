import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  imports: [],
  templateUrl: './skeleton-loader.html',
  styleUrl: './skeleton-loader.scss'
})
export class SkeletonLoader {
  @Input() width: string = '100%';
  @Input() height: string = '16px';
  @Input() borderRadius: string = '4px';
}
