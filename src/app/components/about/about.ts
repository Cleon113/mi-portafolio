import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  stats = [
    { value: '3+', label: 'Años en tech' },
    { value: '2', label: 'Países, 3 culturas' },
    { value: '∞', label: 'Ganas de crecer' }
  ];
}
