import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience implements AfterViewInit {
  @ViewChild('section') section!: ElementRef;

  constructor(
    private scrollAnimation: ScrollAnimationService,
    public t: TranslationService
  ) {}

  ngAfterViewInit() {
    this.scrollAnimation.observe(this.section.nativeElement);
  }

  get jobs() {
    return [
      {
        date: '11.2025 – Presente',
        role: this.t.t('exp.netto2.role'),
        company: 'Netto Marken-Discount, Hamburg',
        description: this.t.t('exp.netto2.desc'),
        tags: ['Customer Service', 'Teamwork', 'Retail']
      },
      {
        date: '03.2024 – 10.2025',
        role: this.t.t('exp.netto1.role'),
        company: 'Netto Marken-Discount, Hamburg',
        description: this.t.t('exp.netto1.desc'),
        tags: ['Logistics', 'Organization']
      },
      {
        date: '09.2022 – 06.2025',
        role: this.t.t('exp.crealogix.role'),
        company: 'Crealogix Deutschland GmbH (Ausbildung)',
        description: this.t.t('exp.crealogix.desc'),
        tags: ['Angular', 'Java', 'TypeScript', 'Scrum', 'Git']
      },
      {
        date: '09.2022 – 06.2025',
        role: this.t.t('exp.bbs.role'),
        company: 'BBS Wilhelmshaven',
        description: this.t.t('exp.bbs.desc'),
        tags: ['OOP', 'SQL', 'Software Engineering']
      },
      {
        date: '11.2020 – 08.2022',
        role: this.t.t('exp.aupair.role'),
        company: 'Gastfamilien in Niedersachsen',
        description: this.t.t('exp.aupair.desc'),
        tags: ['Deutsch', 'Interkulturell', 'Organization']
      }
    ];
  }
}
