import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements AfterViewInit {
  rolesMap = {
    es: ['Junior Software Developer', 'Frontend Developer', 'Fachinformatiker für Anwendungsentwicklung'],
    de: ['Junior Software Entwickler', 'Frontend Entwickler', 'Fachinformatiker für Anwendungsentwicklung'],
    en: ['Junior Software Developer', 'Frontend Developer', 'Application Developer']
  };

  currentRole = '';
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;

  constructor(private cdr: ChangeDetectorRef, public t: TranslationService) {}

  get roles() {
    return this.rolesMap[this.t.lang];
  }

  ngAfterViewInit() {
    setTimeout(() => this.typeEffect(), 0);
  }

  typeEffect() {
    const current = this.roles[this.roleIndex % this.roles.length];

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

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
