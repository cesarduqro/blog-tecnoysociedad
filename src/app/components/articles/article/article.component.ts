import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticulosServices} from '../../../services/articulos.services';
import {ArticuloModel} from '../../../models/articulo.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: []
})
export class ArticleComponent implements OnInit, OnDestroy{

  articulo: ArticuloModel = new ArticuloModel();
  id:string;

  constructor(private activatedRoute: ActivatedRoute,
              private _services: ArticulosServices,
              private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this._services.getArticle(id).subscribe(
      (resp:ArticuloModel) =>{
        console.log(resp)
        //console.log(resp)
        this.id = resp.idx
        this.articulo = resp
      });
  }
  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([uri]));
  }

  ngOnDestroy() {

  }
}
