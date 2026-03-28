import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills implements AfterViewInit {
  @ViewChild('section') section!: ElementRef;

  constructor(
    private scrollAnimation: ScrollAnimationService,
    public t: TranslationService
  ) {}

  ngAfterViewInit() {
    this.scrollAnimation.observe(this.section.nativeElement);
  }

  categories = [
    { name: 'Frontend', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3/SCSS', 'Responsive Design'] },
    { name: 'Backend', items: ['Java', 'Node.js', 'Express', 'RESTful APIs', 'SQL', 'PostgreSQL'] },
    { name: 'Tools & Methods', items: ['Git', 'GitHub', 'VS Code', 'Agile/Scrum', 'Code Reviews', 'OOP'] },
    { name: 'Sprachen & Soft Skills', items: ['Español (Nativo)', 'Deutsch (Fließend)', 'English (Sehr gut)', 'Teamfähigkeit', 'Problemlösung', 'Interkulturelle Kompetenz'] }
  ];
}
