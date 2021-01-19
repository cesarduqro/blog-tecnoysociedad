import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  titulo: string;
  isResultsLoading: boolean = true;
  acerca_de: string;

  constructor() {
    this.titulo = "Acerca del blog"
    this.acerca_de = "Este blog fue disenado y desarrollado con el framework Angular + Typescript, todos los recursos" +
      " usados aqui estan disponibles en el repositorio del proyecto:"
  }

  ngOnInit(): void {
    this.isResultsLoading=false;
  }

}
