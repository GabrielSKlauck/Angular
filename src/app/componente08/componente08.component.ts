import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [CommonModule,
            FormsModule
  ],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {
  media:number = 0;
  num1:number = 0;
  num2:number = 0;
  num3:number = 0;
  calcular(){
    this.media = (this.num1 + this.num2 + this.num3)/3;
  }

  nomes:string[]=['Ralf', 'Ana', 'Danilo', 'Camila'];

  linguagem:string = 'HTML';

  show(texto:string){
    this.linguagem = texto;
  }
}
