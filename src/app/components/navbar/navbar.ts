import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Language } from '../../services/translation';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isScrolled = false;
  menuOpen = false;

  constructor(public t: TranslationService) {}

  get links() {
    return [
      { id: 'home', label: this.t.t('nav.home') },
      { id: 'about', label: this.t.t('nav.about') },
      { id: 'skills', label: this.t.t('nav.skills') },
      { id: 'projects', label: this.t.t('nav.projects') },
      { id: 'experience', label: this.t.t('nav.experience') },
      { id: 'contact', label: this.t.t('nav.contact') }
    ];
  }

  languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollTo(id: string) {
    this.menuOpen = false;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  switchLang(lang: Language) {
    this.t.setLang(lang);
  }
}
