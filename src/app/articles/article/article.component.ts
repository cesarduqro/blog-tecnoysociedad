import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticulosServices} from '../../services/articulos.services';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: []
})
export class ArticleComponent {

  articulo: any = {};
  id:number;

  constructor(private activatedRoute: ActivatedRoute, private _services: ArticulosServices) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
      this.articulo = this._services.getArticle(params['id']);

    });
  }


}
