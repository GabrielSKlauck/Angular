import { Routes } from '@angular/router';
import { Pagina1Component } from './paginas/pagina1/pagina1.component';
import { Pagina2Component } from './paginas/pagina2/pagina2.component';
import { ErroComponent } from './paginas/erro/erro.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path:'pagina1', component:Pagina1Component},
    {path:'pagina2', component:Pagina2Component},
    {path:'',redirectTo:'/pagina1', pathMatch:'full'},
    {path:'**', component:ErroComponent}
];
