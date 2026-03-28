import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements AfterViewInit {
  @ViewChild('section') section!: ElementRef;

  stats = [
    { value: '3+', label: 'Años en desarrollo' },
    { value: '3', label: 'Idiomas fluidos' },
    { value: '2', label: 'Países, 3 culturas' }
  ];

  constructor(private scrollAnimation: ScrollAnimationService) {}

  ngAfterViewInit() {
    this.scrollAnimation.observe(this.section.nativeElement);
  }
}
