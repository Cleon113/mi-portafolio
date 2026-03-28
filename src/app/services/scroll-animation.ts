import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  private observer!: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });
  }

  observe(element: HTMLElement) {
    const observeChildren = () => {
      const children = element.querySelectorAll('.animate-on-scroll');
      children.forEach(child => {
        if (!child.classList.contains('visible')) {
          this.observer.observe(child);
        }
      });
    };

    observeChildren();

    // Re-observe when Angular re-renders content
    const mutationObserver = new MutationObserver(() => {
      observeChildren();
    });

    mutationObserver.observe(element, {
      childList: true,
      subtree: true
    });
  }
}
