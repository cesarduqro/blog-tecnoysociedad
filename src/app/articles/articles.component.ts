import {Component, OnInit} from '@angular/core';
import {Articulos, ArticulosServices} from '../services/articulos.services';
import {FormatWidth, getLocaleTimeFormat} from '@angular/common';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  titulo: string;
  articulos: Articulos[] = [];

  constructor(public _servicios: ArticulosServices) {
    this.titulo = 'Articulos Recientes';
  }

  ngOnInit(): void {
    //this.articulos = this._servicios.getArticles();
    console.log(this.articulos)
  }

}
