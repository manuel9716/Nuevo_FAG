import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionGeneralComponent } from './configuracion-general/configuracion-general.component';
import { ParametrosGeneralesComponent } from './configuracion-general/parametros-generales/parametros-generales.component';
import { IntermediarioFinancieroComponent } from './configuracion-general/intermediario-financiero/intermediario-financiero.component';

const routes: Routes = [
  { path: 'configuracion-general', component: ConfiguracionGeneralComponent },
  { path: 'parametros-generales', component: ParametrosGeneralesComponent },
  { path: 'intermediario-financiero', component: IntermediarioFinancieroComponent },
  // Otras rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
