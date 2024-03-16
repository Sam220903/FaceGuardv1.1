import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AgregarUsuarioComponent } from './Components/agregar-usuario/agregar-usuario.component';
import { ConsultaComponent } from './Components/Usuarios/consulta/consulta.component';
import { EditarUsuariosComponent } from './Components/Usuarios/editar-usuarios/editar-usuarios.component';
import { EliminarUsuariosComponent } from './Components/Usuarios/eliminar-usuarios/eliminar-usuarios.component';
import { ReportesComponent } from './Components/reportes/reportes.component';
import { ConfiguracionComponent } from './Components/configuracion/configuracion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'AgregarUsuario', component: AgregarUsuarioComponent },
  { path: 'Consulta-Usuarios', component: ConsultaComponent },
  { path: 'Editar-Usuarios', component: EditarUsuariosComponent },
  { path: 'Eliminar-Usuarios', component: EliminarUsuariosComponent }, 
  { path: 'Reportes', component: ReportesComponent },
  { path : 'Config', component: ConfiguracionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }
