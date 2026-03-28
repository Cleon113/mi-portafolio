import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  observe(element: HTMLElement) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    const children = element.querySelectorAll('.animate-on-scroll');
    children.forEach(child => observer.observe(child));
  }
}
