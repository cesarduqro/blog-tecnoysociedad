import {Component, OnInit} from '@angular/core';
import {ArticuloModel} from '../../../models/articulo.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArticulosServices} from '../../../services/articulos.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newarticle',
  templateUrl: './newarticle.component.html',
  styleUrls: ['./newarticle.component.css']
})
export class NewarticleComponent implements OnInit {
  articulo: ArticuloModel = new ArticuloModel();
  formArticulo: FormGroup;
  constructor(private _articuloService: ArticulosServices,
              private fb: FormBuilder) {
    this.crearFormulario()
  }

  ngOnInit(): void {

  }
  get idxNoValido(){
    return this.formArticulo.get('idx').invalid && this.formArticulo.get('idx').touched
  }
  get tituloNoValido(){
    return this.formArticulo.get('titulo').invalid && this.formArticulo.get('titulo').touched
  }
  get resumenNoValido(){
    return this.formArticulo.get('resumen').invalid && this.formArticulo.get('resumen').touched
  }
  get descripcionNoValido(){
    return this.formArticulo.get('descripcion').invalid && this.formArticulo.get('descripcion').touched
  }
  crearFormulario(){
    this.formArticulo = this.fb.group({
      idx: ['',Validators.required],
      titulo: ['',Validators.required],
      image: ['',Validators.required],
      resumen: ['',Validators.required],
      descripcion: ['',Validators.required],

    })
  }

  guardarArticulo() {
    //console.log(this.articulo)
    if (this.formArticulo.invalid){
      return Object.values(this.formArticulo.controls).forEach( control =>{
        control.markAsTouched();
      });
    }else{
      let response: any = [];
      this._articuloService.crearArticulo(this.articulo).subscribe(
        resp => {
          response = resp;
          if (response.name.length > 1) {
            Swal.fire({
              icon: 'success',
              allowOutsideClick:false,
              text: 'Registro guardado',
              confirmButtonText: 'Ok',
            })
          }
          console.log(resp);
        });
    }
    this.formArticulo.reset();
  }
}
