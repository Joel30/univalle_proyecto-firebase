import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images = [
    'assets/img1.webp',
    'assets/img2.webp',
    'assets/img3.webp',
    'assets/img4.webp',
    'assets/img5.webp',
    'assets/img6.webp',
    'assets/img7.webp',
    'assets/img8.webp',
    'assets/img9.webp',
    'assets/img10.webp',
  ];
}
