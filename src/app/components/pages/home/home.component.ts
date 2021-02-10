import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  titulo_header: string;
  descripcion_header: string;

  constructor(private router:Router) {
    this.titulo_header = "Ciencia, Tecnología y Sociedad"
    this.descripcion_header = "Blog informativo"
  }
  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([uri]));
  }
  ngOnInit(): void {
  }

}
