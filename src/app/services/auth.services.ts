import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsuarioModel} from '../models/usuario.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apiKey = 'AIzaSyAoohbF-DS2j-tnmqcWb8Ty9Nz98xGVjOM';
  private userToken: string;

  constructor(private httpClient:HttpClient) {
    this.leerToken();
  }

  //LOGIN
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  loginUser( usuario: UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true,
    };
    return this.httpClient.post(
      `${ this.url}/accounts:signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe(
      map( resp =>{
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  logoutUser(){
    localStorage.removeItem('token')
  }

  private guardarToken(idToken: string) {
    let hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expires', hoy.getTime().toString())

    this.userToken = idToken;
    localStorage.setItem('token',idToken)
  }

  private leerToken() {
    if (localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }
  }

  estaAutenticado(): boolean{
    const expira = Number(localStorage.getItem('expires'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);
    if (this.userToken.length<2){
      return false;
    }
    if(expiraDate>new Date()){
      return true;
    }else{
      return false;
    }

  }
}
