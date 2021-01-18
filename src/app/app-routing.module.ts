import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticlesComponent} from './articles/articles.component';
import {ArticleComponent} from './articles/article/article.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent,},
  {path: 'articulos', component: ArticlesComponent,},
  {path: 'articulo/:id', component: ArticleComponent,},
  {path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
