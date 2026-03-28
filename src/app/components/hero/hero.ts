import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements AfterViewInit {
  roles = ['Frontend Developer', 'Backend Developer', 'Fachinformatiker'];
  currentRole = '';
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    setTimeout(() => this.typeEffect(), 0);
  }

  typeEffect() {
    const current = this.roles[this.roleIndex];

    if (!this.isDeleting) {
      this.currentRole = current.substring(0, this.charIndex + 1);
      this.charIndex++;
      if (this.charIndex === current.length) {
        setTimeout(() => { this.isDeleting = true; this.typeEffect(); }, 2000);
        return;
      }
    } else {
      this.currentRole = current.substring(0, this.charIndex - 1);
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }

    this.cdr.detectChanges();
    setTimeout(() => this.typeEffect(), this.isDeleting ? 50 : 100);
  }
}
