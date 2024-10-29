import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionGeneralComponent } from './configuracion-general/configuracion-general.component';

const routes: Routes = [
  { path: 'configuracion-general', component: ConfiguracionGeneralComponent },
  // Otras rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
