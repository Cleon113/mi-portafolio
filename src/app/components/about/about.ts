import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation';
import { TranslationService } from '../../services/translation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements AfterViewInit {
  @ViewChild('section') section!: ElementRef;

  constructor(
    private scrollAnimation: ScrollAnimationService,
    public t: TranslationService
  ) {}

  ngAfterViewInit() {
    this.scrollAnimation.observe(this.section.nativeElement);
  }

  get stats() {
    return [
      { value: this.t.t('about.stat1.value'), label: this.t.t('about.stat1.label') },
      { value: this.t.t('about.stat2.value'), label: this.t.t('about.stat2.label') },
      { value: this.t.t('about.stat3.value'), label: this.t.t('about.stat3.label') }
    ];
  }
}
