import {Component, OnInit} from '@angular/core';
import {Articulos} from '../../services/articulos.services';
import {Router} from '@angular/router';
import {AuthServices} from '../../services/auth.services';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  titulo: string;
  buscarTexto: string ;
  isLoginIn = false;
  email: string = this.servicioLogin.getLoginInfo();
  isArticleSite = false;
  constructor(private router:Router, private servicioLogin: AuthServices) {
    this.titulo = "Blog T&S"
    this.isLoginIn = servicioLogin.estaAutenticado();

  }

  ngOnInit(): void {
    if (this.router.url === '/articles'){
      this.isArticleSite = true;
    }
  }

  buscarArticulo(termino:string){
    this.router.navigate(['/buscar',termino])
    termino = "";
  }
}
