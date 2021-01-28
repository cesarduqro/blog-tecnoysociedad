import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  titulo: string;
  isResultsLoading: boolean = true;
  acerca_de: string;
  descripcion: string;

  constructor(private router: Router) {
    this.titulo = "Acerca del blog"
    this.acerca_de = "Este blog fue disenado y desarrollado por https://github.com/cesarduqro.";
    this.descripcion = "El contenido de este blog es una recopilacion de la informacion entregada en talleres y actividades en clases realizadas en" +
      "la materia de Tecnologia y Sociedad - Universidad Ecotec.";


  }

  ngOnInit(): void {
    this.isResultsLoading=false;
  }

}
