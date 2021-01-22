import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Servicios
import {ArticulosServices} from './services/articulos.services';

// Componentes
import { AppComponent } from './app.component';
import { SidenavComponent } from './shared/navbar/sidenav.component';
import { FooterComponent } from './shared/footer/footer.component';
// Modulos
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import { AboutComponent } from './components/pages/about/about.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/pages/login/login.component';
import {BusquedaComponent} from './components/articles/busqueda/busqueda.component';
import {ArticlesComponent} from './components/articles/articles.component';
import {ArticleComponent} from './components/articles/article/article.component';
import {HomeComponent} from './components/pages/home/home.component';
import { NewarticleComponent } from './components/pages/newarticle/newarticle.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    FooterComponent,
    ArticlesComponent,
    ArticleComponent,
    AboutComponent,
    BusquedaComponent,
    LoginComponent,
    NewarticleComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxExtendedPdfViewerModule,
        FormsModule,
        ReactiveFormsModule,

    ],
  providers: [ ArticulosServices],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
