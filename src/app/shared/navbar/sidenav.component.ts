import {Component, OnInit} from '@angular/core';
import {Articulos} from '../../services/articulos.services';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  titulo: string;

  constructor() {
    this.titulo = "Blog"
  }

  ngOnInit(): void {
  }

  buscarArticulo(termino: string) {
    let articulosArr: Articulos[] = [];
    termino = termino.toLowerCase()
  }
}
