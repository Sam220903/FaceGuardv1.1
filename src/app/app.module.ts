import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarUsuarioComponent } from './Components/agregar-usuario/agregar-usuario.component';
import { ConfiguracionComponent } from './Components/configuracion/configuracion.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ReportesComponent } from './Components/reportes/reportes.component';
import { ConsultaComponent } from './Components/Usuarios/consulta/consulta.component';
import { EditarUsuariosComponent } from './Components/Usuarios/editar-usuarios/editar-usuarios.component';
import { EliminarUsuariosComponent } from './Components/Usuarios/eliminar-usuarios/eliminar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarUsuarioComponent,
    ConfiguracionComponent,
    HomeComponent,
    NavbarComponent,
    ReportesComponent,
    ConsultaComponent,
    EditarUsuariosComponent,
    EliminarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
