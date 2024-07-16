import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {
  imagem : string = 'dia';
  alterarImagem(){
    if(this.imagem === 'dia'){
      this.imagem = 'noite';
    }else{
      this.imagem = 'dia';
    }
  }
}
