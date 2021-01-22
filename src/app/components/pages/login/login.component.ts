import { Component, OnInit } from '@angular/core';
import {UsuarioModel} from '../../../models/usuario.model';
import {NgForOf} from '@angular/common';
import {NgForm} from '@angular/forms';
import {AuthServices} from '../../../services/auth.services';
import {Router} from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel()
  isSavedLogin = false;
  constructor(private _authService: AuthServices, private router: Router) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      this.isSavedLogin = true;
    }
  }

  loginUser(form: NgForm){
    //console.log(this.usuario)
    Swal.fire({
      allowOutsideClick:false,
      text: 'Espere por favor'
    })
    Swal.showLoading();
    this._authService.loginUser(this.usuario).subscribe(resp =>{
      let response:any = resp;
      if (response.registered){
        if (this.isSavedLogin){
          localStorage.setItem('email',this.usuario.email);
        }
        Swal.close()
        this.router.navigate(['/home']);
      }
    },(err)=>{
      console.log(err.error.error.code);
      if (err.error.error.code !== '200'){
        Swal.fire({
          icon: 'error',
          allowOutsideClick:false,
          text: 'Usuario o password incorrecto'
        });
      }
    });
  }
}
