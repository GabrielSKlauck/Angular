import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente07',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente07.component.html',
  styleUrl: './componente07.component.css'
})
export class Componente07Component {
  cor:string = 'green'
  condicao : boolean = false;
  lista:string[] = ['Aprovado', 'Aprovado', 'Reprovado']

  muda(){
    if(this.cor === 'green'){
      this.cor = 'red';
    }else{
      this.cor = 'green';
    }
  }
}
