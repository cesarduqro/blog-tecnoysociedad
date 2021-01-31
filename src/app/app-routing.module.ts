import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './components/pages/about/about.component';
import {BusquedaComponent} from './components/articles/busqueda/busqueda.component';
import {HomeComponent} from './components/pages/home/home.component';
import {ArticlesComponent} from './components/articles/articles.component';
import {ArticleComponent} from './components/article/article.component';
import {LoginComponent} from './components/pages/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {NewarticleComponent} from './components/pages/newarticle/newarticle.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent,},
  {path: 'about', component: AboutComponent,},
  {path: 'home', component: HomeComponent,},
  {path: 'articles', component: ArticlesComponent},
  {path: 'articulo/:id', component: ArticleComponent},
  {path: 'buscar/:termino', component: BusquedaComponent,},
  {path: 'crear-articulo', component: NewarticleComponent, canActivate: [AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
