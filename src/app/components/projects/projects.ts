import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements AfterViewInit {
  @ViewChild('section') section!: ElementRef;

  constructor(
    private scrollAnimation: ScrollAnimationService,
    public t: TranslationService
  ) {}

  ngAfterViewInit() {
    this.scrollAnimation.observe(this.section.nativeElement);
  }

  get projects() {
    return [
      {
        icon: '🎓',
        name: this.t.t('projects.azubi.name'),
        description: this.t.t('projects.azubi.description'),
        tags: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'REST API'],
        github: null,
        live: null,
        note: this.t.t('projects.azubi.note')
      },
      {
        icon: '⚡',
        name: this.t.t('projects.portfolio.name'),
        description: this.t.t('projects.portfolio.description'),
        tags: ['Angular', 'TypeScript', 'SCSS', 'GitHub Pages'],
        github: 'https://github.com/Cleon113/mi-portafolio',
        live: 'https://Cleon113.github.io/mi-portafolio/'
      }
    ];
  }
}
