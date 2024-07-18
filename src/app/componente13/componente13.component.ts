import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {
  vetor:Produto[] = [];

  btnCadastrar : boolean = true;

  formulario = new FormGroup({
    id:new FormControl(null),
    nome:new FormControl(''),
    valor:new FormControl(null)
  }); 

  constructor(private servico:ProdutoService){}

  ngOnInit(){
    this.selecionar();
  }

  selecionar(){
    this.servico.selecionar().subscribe(retorno => {
      this.vetor = retorno;
    });
  }
}
