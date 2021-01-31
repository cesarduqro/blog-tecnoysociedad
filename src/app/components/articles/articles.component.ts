import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormatWidth, getLocaleTimeFormat} from '@angular/common';
import {Articulos, ArticulosServices} from '../../services/articulos.services';
import {ArticuloModel} from '../../models/articulo.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements AfterViewInit {
  titulo: string;
  articulos: ArticuloModel[] = [];
  isResultsLoading: boolean = true;

  constructor(public _servicios: ArticulosServices) {
    this.titulo = 'Articulos Recientes';
    this.loadArticles();
  }

  ngAfterViewInit() {

  }

  loadArticles(){
    this._servicios.getArticles()
      .subscribe(
        (resp:any) =>{
          this.articulos = resp;
          //console.log(this.articulos)

          if(resp.length>0){
            this.isResultsLoading = false
          }
        });
  }

}
