import {Component, OnInit} from '@angular/core';
import {Articulos} from '../../services/articulos.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  titulo: string;
  buscarTexto: string ;

  constructor(private router:Router) {
    this.titulo = "Blog"
  }

  ngOnInit(): void {

  }

  buscarArticulo(termino:string){
    this.router.navigate(['/buscar',termino])
    termino = "";
  }
}
