import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements AfterViewInit {
  @ViewChild('section') section!: ElementRef;
  year = new Date().getFullYear();

  constructor(private scrollAnimation: ScrollAnimationService) {}

  ngAfterViewInit() {
    this.scrollAnimation.observe(this.section.nativeElement);
  }

  links = [
    {
      icon: '📧',
      label: 'Email',
      value: 'leoncamilo9@gmail.com',
      url: 'mailto:leoncamilo9@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: '/in/camilo-leon-dev13',
      url: 'https://www.linkedin.com/in/camilo-leon-dev13'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: '@Cleon113',
      url: 'https://github.com/Cleon113'
    }
  ];
}
