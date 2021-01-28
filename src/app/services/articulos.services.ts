import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticuloModel} from '../models/articulo.model';
import {map} from 'rxjs/operators';

@Injectable()
export class ArticulosServices {
  private _url = 'https://blog-tecnoysociedad-default-rtdb.firebaseio.com'

  articulos : ArticuloModel[] = [];

  constructor(private http: HttpClient) {
    console.log('Servicio listo');
    //this.getArticles();
    this.getArticles()
      .subscribe(
        (resp:any) =>{
          this.articulos = resp;
        });;
  }

  getArticles(){
    /*this.http.get('https://blog-tecnoysociedad-default-rtdb.firebaseio.com/articulos.json').subscribe(
      (resp:Articulos[]) =>{
        this.articulos = resp;
      });
    return this.http.get('https://blog-tecnoysociedad-default-rtdb.firebaseio.com/articulos.json');*/
    return this.http.get(`${this._url}/articulos.json`)
      .pipe(
        map( this.crearArreglo)
      );
  }

  private crearArreglo( articulosObj: object){
    this.articulos = []
    Object.keys( articulosObj ).forEach(key =>{
      const articulo: ArticuloModel = articulosObj[key];
      articulo.idx = key;
      this.articulos.push(articulo);
    });
    return this.articulos
  }

  getArticle(idx: string) {

    return this.http.get(`${this._url}/articulos/${idx}.json`);
  }

  searchArticulos(termino:string){
    //console.log(this.articulos)

    let articulosArr: ArticuloModel[] = [];
    termino = termino.toLowerCase()
    for (let articulo of this.articulos){
      let nombre = articulo.titulo.toLowerCase()
      if (nombre.indexOf(termino) >=0){
        articulosArr.push(articulo)
      }
    }
    /*for (let i = 0; i< this.articulos.length; i++){
      let articulo = this.articulos[i]

      let nombre = articulo.titulo.toLowerCase()

      if (nombre.indexOf(termino) >=0){
        articulo.idx = i;
        articulosArr.push(articulo)
      }
    }*/
    return articulosArr;
  }

  crearArticulo(articulo: ArticuloModel){
    return this.http.post(`${this._url}/articulos.json`,articulo);
  }
}

export interface Articulos {
  image: string,
  titulo: string,
  resumen: string,
  descripcion: string,
  autor: string,
  idx?:number
}