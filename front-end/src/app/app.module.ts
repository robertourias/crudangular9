import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ApiServiceService } from './services/api-service.service';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    ApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
