import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  categories = [
    {
      name: 'Frontend',
      items: ['Angular', 'TypeScript', 'HTML5', 'CSS3/SCSS', 'JavaScript', 'Responsive Design']
    },
    {
      name: 'Backend',
      items: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'SQL', 'PostgreSQL']
    },
    {
      name: 'Tools & DevOps',
      items: ['Git', 'GitHub', 'VS Code', 'Docker', 'Linux', 'Agile/Scrum']
    },
    {
      name: 'Soft Skills',
      items: ['Deutsch (C1)', 'English (B2)', 'Español (Nativo)', 'Teamwork', 'Problem Solving']
    }
  ];
}
