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

  cadastro(){
    this.servico.cadastrar(this.formulario.value as Produto)
    .subscribe(retorno => {
      this.vetor.push(retorno);
    });
    this.formulario.reset();
  }

  selecionarItem(index:number){
    this.formulario.setValue({
      id : this.vetor[index].id,
      nome : this.vetor[index].nome,
      valor : this.vetor[index].valor
    });
    this.btnCadastrar = false;
  }

  alterar(){
    this.servico.alterar(this.formulario.value as Produto)
    .subscribe(retorno =>{

      let indiceAlterado = this.vetor.findIndex(obj =>{
        return this.formulario.value.id ===obj.id;
      });

      this.vetor[indiceAlterado] = retorno;

      this.formulario.reset();

      this.btnCadastrar = true;
    });
  }

  excluir(){

  }

  cancelar(){
    this.formulario.reset();
    this.btnCadastrar = true;
  }
}
