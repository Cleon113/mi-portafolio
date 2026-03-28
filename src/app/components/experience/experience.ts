import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience implements AfterViewInit {
  @ViewChild('section') section!: ElementRef;

  constructor(private scrollAnimation: ScrollAnimationService) {}

  ngAfterViewInit() {
    this.scrollAnimation.observe(this.section.nativeElement);
  }

  jobs = [
    {
      date: '11.2025 – Presente',
      role: 'Verkäufer (Teilzeit)',
      company: 'Netto Marken-Discount, Hamburg',
      description: 'Atención al cliente, gestión de caja, reposición de mercancía y control de fechas de caducidad. Trabajo flexible en turnos con alto volumen de clientes.',
      tags: ['Customer Service', 'Teamwork', 'Retail']
    },
    {
      date: '03.2024 – 10.2025',
      role: 'Aushilfe im Einzelhandel',
      company: 'Netto Marken-Discount, Hamburg',
      description: 'Apoyo operativo en tienda. Reposición de mercancía, almacén y atención al público.',
      tags: ['Logistics', 'Organization']
    },
    {
      date: '09.2022 – 06.2025',
      role: 'Fachinformatiker für Anwendungsentwicklung',
      company: 'Crealogix Deutschland GmbH (Ausbildung)',
      description: 'Desarrollo de software con Java. Frontend con Angular y JavaScript para interfaces responsivas. Code Reviews, trabajo en equipos ágiles con Scrum.',
      tags: ['Angular', 'Java', 'TypeScript', 'Scrum', 'Git']
    },
    {
      date: '09.2022 – 06.2025',
      role: 'Berufsschule – Fachinformatiker',
      company: 'BBS Wilhelmshaven',
      description: 'Formación teórica en desarrollo de aplicaciones. Programación orientada a objetos, bases de datos SQL y desarrollo ágil.',
      tags: ['OOP', 'SQL', 'Software Engineering']
    },
    {
      date: '11.2020 – 08.2022',
      role: 'Au-Pair / Kinderbetreuer',
      company: 'Gastfamilien in Niedersachsen',
      description: 'Cuidado de niños en entorno intercultural. Adquirí fluidez en alemán a través de la práctica diaria. Dos familias: Bad Gandersheim y Lüneburg.',
      tags: ['Deutsch', 'Interkulturell', 'Organization']
    }
  ];
}
