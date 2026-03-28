import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements AfterViewInit {
  @ViewChild('section') section!: ElementRef;

  constructor(private scrollAnimation: ScrollAnimationService) {}

  ngAfterViewInit() {
    this.scrollAnimation.observe(this.section.nativeElement);
  }

  projects = [
    {
      icon: '🎓',
      name: 'AzubiPortal',
      description: 'Plataforma full-stack para gestión y seguimiento de aprendices. Los formadores crean proyectos y tareas, los Azubis gestionan su progreso. Autenticación JWT con control de acceso por roles.',
      tags: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'REST API'],
      github: null,
      live: null,
      note: 'Abschlussprojekt – Crealogix (privado)'
    },
    {
      icon: '⚡',
      name: 'Portfolio Website',
      description: 'Mi portafolio personal con diseño Glitch Noir Terminal. Scroll animations, typewriter effect, diseño responsive y deploy automatizado en GitHub Pages.',
      tags: ['Angular', 'TypeScript', 'SCSS', 'GitHub Pages'],
      github: 'https://github.com/Cleon113/mi-portafolio',
      live: 'https://Cleon113.github.io/mi-portafolio/'
    }
  ];
}
