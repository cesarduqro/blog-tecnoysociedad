import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  titulo_header: string;
  descripcion_header: string;

  constructor() {
    this.titulo_header = "Ciencia, Tecnología y Sociedad"
    this.descripcion_header = "Blog informativo"
  }

  ngOnInit(): void {
  }

}
