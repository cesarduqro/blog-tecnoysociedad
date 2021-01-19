import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Servicios
import {ArticulosServices} from './services/articulos.services';

// Componentes
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { SidenavComponent } from './shared/navbar/sidenav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
// Modulos
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ArticleComponent } from './articles/article/article.component';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    FooterComponent,
    ArticlesComponent,
    ArticleComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,

  ],
  providers: [ ArticulosServices],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
