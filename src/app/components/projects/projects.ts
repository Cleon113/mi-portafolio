import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects = [
    {
      icon: '⚡',
      name: 'Portfolio Website',
      description: 'Mi portafolio personal construido con Angular, SCSS y diseño Glitch Noir. Desplegado en GitHub Pages.',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      github: 'https://github.com/TU_USUARIO/mi-portafolio',
      live: 'https://TU_USUARIO.github.io/mi-portafolio/'
    },
    {
      icon: '🛒',
      name: 'E-Commerce App',
      description: 'Aplicación full-stack de comercio electrónico con carrito de compras, autenticación y pasarela de pagos.',
      tags: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
      github: 'https://github.com/TU_USUARIO/ecommerce',
      live: null
    },
    {
      icon: '📋',
      name: 'Task Manager API',
      description: 'REST API para gestión de tareas con autenticación JWT, CRUD completo y documentación Swagger.',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/TU_USUARIO/task-api',
      live: null
    }
  ];
}
