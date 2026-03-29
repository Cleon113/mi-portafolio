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
        date: '10.2021 – 08.2022',
        role: this.t.t('exp.aupair2.role'),
        company: 'Lüneburg',
        description: this.t.t('exp.aupair2.desc'),
        tags: ['Deutsch', 'Interkulturell', 'Selbstständigkeit']
      },
      {
        date: '11.2020 – 09.2021',
        role: this.t.t('exp.aupair1.role'),
        company: 'Bad Gandersheim',
        description: this.t.t('exp.aupair1.desc'),
        tags: ['Deutsch', 'Interkulturell', 'Organization']
      }
    ];
  }
}
