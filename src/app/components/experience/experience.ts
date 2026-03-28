import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  jobs = [
    {
      date: '2021 – 2024',
      role: 'Fachinformatiker für Anwendungsentwicklung',
      company: 'Ausbildung',
      description: 'Formación profesional en desarrollo de aplicaciones. Trabajo con frontend y backend, bases de datos, REST APIs, testing y metodologías ágiles.',
      tags: ['Angular', 'Java', 'Spring Boot', 'SQL', 'Git']
    },
    {
      date: '11.2024 – Presente',
      role: 'Verkäufer Teilzeit',
      company: 'Netto Marken-Discount, Hamburg',
      description: 'Atención al cliente, gestión de caja y organización de inventario. Desarrollando soft skills mientras busco mi siguiente rol en tech.',
      tags: ['Teamwork', 'Customer Service', 'Deutsch C1']
    },
    {
      date: '03.2024 – 10.2024',
      role: 'Aushilfe',
      company: 'Netto Marken-Discount, Hamburg',
      description: 'Apoyo operativo en tienda. Manejo de mercancía, reposición y atención al público.',
      tags: ['Logistics', 'Organization']
    }
  ];
}
