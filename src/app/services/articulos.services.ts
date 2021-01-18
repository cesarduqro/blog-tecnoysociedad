import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ArticulosServices {


  /*private articulos: any[] = [
    {
      image: 'https://image.freepik.com/vector-gratis/fondo-educacion-cientifica-dibujado-mano_23-2148499326.jpg',
      titulo: 'Qué es la Ciencia?',
      resumen: 'Suma actual de conocimientos científicos,como una actividad de investigación o hasta como un método de adquisición del saber.',
      descripcion: 'La ciencia es una actividad social de carácter complejo y multidimensional, a través de la que se adquieren conocimientos que adoptan formas particulares vinculados al desarrollo de la tecnología.',
      autor: 'César'
    },
    {
      image: 'https://www.teahub.io/photos/full/52-522398_3840x2160-computer-information-technology-wallpaper-information-technology-images.jpg',
      titulo: 'Qué es la Tecnologia?',
      resumen: 'Conjunto de conocimientos,informaciones ordenadas,recursos y medios utilizados en la producción de los bienes y servicios requeridos por la sociedad.',
      descripcion: 'Sistema de conocimientos y deinformación derivado de la investigación,de la experimentación, o de la experiencia y que unidos a los métodos de producción, comercialización y gestión, permite crear una forma reproducible o generar nuevos o mejorados productos, proceso o servicios (Benavides, 1995)',
      autor: 'César'
    },
    {
      image: 'https://wallpapercave.com/wp/wp6152155.jpg',
      titulo: 'Qué es la Sociedad?',
      resumen: 'Conjunto de personas, pueblos o naciones que conviven bajo normas comunes (RAE, 2019).',
      descripcion: 'Conjunto de seres humanos, unidos moral, material, espiritual y culturalmente para la satisfacción de comunes necesidades,recíprocos beneficios, aspiraciones semejantes y fines iguales (Moreira,2003). ',
      autor: 'César'
    },
  ];*/
  articulos: Articulos[] = [];
  constructor(private http: HttpClient) {
    console.log('Servicio listo');
    this.getArticles()
  }

  getArticles(){
    this.http.get('https://blog-tecnoysociedad-default-rtdb.firebaseio.com/articulos.json').subscribe(
      (resp:Articulos[]) =>{
        this.articulos = resp;
      });
    return this.http.get('https://blog-tecnoysociedad-default-rtdb.firebaseio.com/articulos.json');
    //this.http.get('https://blog-tecnoysociedad-default-rtdb.firebaseio.com/articulos.json');
  }

  getArticle(idx: string) {
    return this.articulos[idx];
  }
}

export interface Articulos {
  image: string,
  titulo: string,
  resumen: string,
  descripcion: string,
  autor: string
}
