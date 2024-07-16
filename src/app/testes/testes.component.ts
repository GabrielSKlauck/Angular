import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testes.component.html',
  styleUrl: './testes.component.css'
})
export class TestesComponent {
  variavel:string = "classeNova"
}
