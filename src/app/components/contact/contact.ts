import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  year = new Date().getFullYear();

  links = [
    {
      icon: '📧',
      label: 'Email',
      value: 'tu@email.com',
      url: 'mailto:tu@email.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: '/in/tu-perfil',
      url: 'https://linkedin.com/in/tu-perfil'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: '@tu-usuario',
      url: 'https://github.com/tu-usuario'
    }
  ];
}
