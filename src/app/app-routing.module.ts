import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './components/pages/about/about.component';
import {BusquedaComponent} from './components/articles/busqueda/busqueda.component';
import {HomeComponent} from './components/pages/home/home.component';
import {ArticlesComponent} from './components/articles/articles.component';
import {ArticleComponent} from './components/articles/article/article.component';
import {LoginComponent} from './components/pages/login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent,},
  {path: 'home', component: HomeComponent,},
  {path: 'about', component: AboutComponent,},
  {path: 'buscar/:termino', component: BusquedaComponent,},
  {path: 'articulos', component: ArticlesComponent,},
  {path: 'articulo/:id', component: ArticleComponent,},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
