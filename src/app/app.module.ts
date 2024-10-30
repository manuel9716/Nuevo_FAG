import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfiguracionGeneralComponent } from './configuracion-general/configuracion-general.component';
import { ActividadEconomicaComponent } from './configuracion-general/actividad-economica/actividad-economica.component';
import { DestinoComponent } from './configuracion-general/destino/destino.component';
import { ParametroComisionComponent } from './configuracion-general/parametro-comision/parametro-comision.component';
import { ParametrosGeneralesComponent } from './configuracion-general/parametros-generales/parametros-generales.component';
import { IntermediarioFinancieroComponent } from './configuracion-general/intermediario-financiero/intermediario-financiero.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfiguracionGeneralComponent,
    ActividadEconomicaComponent,
    DestinoComponent,
    ParametroComisionComponent,
    ParametrosGeneralesComponent,
    IntermediarioFinancieroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
