import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticuloModel} from '../models/articulo.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  }
)
export class ArticulosServices {
  private _url = 'https://blog-tecnoysociedad-default-rtdb.firebaseio.com';

  articulos: ArticuloModel[] = [];

  constructor(private http: HttpClient) {

  }

  getArticles() {
    return this.http.get(`${this._url}/articulos.json`)
      .pipe(map(this.crearArreglo));
  }

  crearArreglo(articulosObj: object) {
    this.articulos = [];
    Object.keys(articulosObj).forEach(key => {
      const articulo: ArticuloModel = articulosObj[key];
      articulo.idx = key;
      this.articulos.push(articulo);
    });
    return this.articulos;
  }

  getArticle(id: string) {
    return this.http.get(`${this._url}/articulos/${id}.json`);
  }

  searchArticulos(termino: string) {
    this.getArticles()
      .subscribe(
        (resp: any) => {
          this.articulos = resp;
        });
    let articulosArr: ArticuloModel[] = [];
    termino = termino.toLowerCase();
    for (let articulo of this.articulos) {
      let nombre = articulo.titulo.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        articulosArr.push(articulo);
      }
    }
    return articulosArr;
  }

  crearArticulo(articulo: ArticuloModel) {
    return this.http.post(`${this._url}/articulos.json`, articulo);
  }
}

export interface Articulos {
  image: string,
  titulo: string,
  resumen: string,
  descripcion: string,
  autor: string,
  idx?: number
}
