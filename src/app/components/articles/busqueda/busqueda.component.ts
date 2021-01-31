import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticulosServices} from '../../../services/articulos.services';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['../articles.component.scss']
})
export class BusquedaComponent implements OnInit {

  articulos:any = [];
  titulo: any;
  isResultsLoading: boolean = true;
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private _services:ArticulosServices) {
    this.titulo = "Busqueda relacionada: "+this.termino;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.articulos = this._services.searchArticulos(params['termino']);
      this.termino = params['termino'];
      if (this.articulos.length >= 0){
        this.isResultsLoading = false;
      }
      console.log(this.articulos);

    })
  }

}
