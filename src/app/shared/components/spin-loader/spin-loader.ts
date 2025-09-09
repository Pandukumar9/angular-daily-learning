import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spin-loader',
  imports: [CommonModule],
  templateUrl: './spin-loader.html',
  styleUrl: './spin-loader.scss'
})
export class SpinLoader {
  @Input() show: boolean = false;      // Whether to show loader
  @Input() size: string = '50px';      // Size of spinner
  @Input() image?: string;
}
