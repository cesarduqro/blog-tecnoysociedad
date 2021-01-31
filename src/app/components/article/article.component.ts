import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticulosServices} from '../../services/articulos.services';
import {ArticuloModel} from '../../models/articulo.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent {

  articulo: ArticuloModel = new ArticuloModel();
  id:string;
  isResultsLoading: any = true;

  constructor(private activatedRoute: ActivatedRoute,
              private _services: ArticulosServices,
              private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.activatedRoute.params.subscribe(
      params => {
        this.getArticle( params['id']);
      });
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([uri]));
  }

  getArticle(id: string) {
    console.log(id);
    this._services.getArticle(id).subscribe(
      (resp:any) =>{
        console.log(resp)
        //console.log(resp)
        this.id = resp.idx
        this.articulo = resp
        this.isResultsLoading = false;
      });
  }
}
