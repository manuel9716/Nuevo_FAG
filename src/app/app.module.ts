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
import { NombreDelSubcomponenteComponent } from './configuracion-general/nombre-del-subcomponente/nombre-del-subcomponente.component';
import { ListasReferenciaComponent } from './configuracion-general/listas-referencia/listas-referencia.component';
import { CalendarioComponent } from './configuracion-general/calendario/calendario.component';
import { ModalidadesPagoComponent } from './configuracion-general/modalidades-pago/modalidades-pago.component';
import { ComisionistasBmcComponent } from './configuracion-general/comisionistas-bmc/comisionistas-bmc.component';
import { FirmasDigitalesComponent } from './configuracion-general/firmas-digitales/firmas-digitales.component';
import { ReglasNegocioComponent } from './configuracion-general/reglas-negocio/reglas-negocio.component';
import { ProgramaGarantiaComponent } from './configuracion-general/programa-garantia/programa-garantia.component';
import { TarifasComisionesComponent } from './configuracion-general/tarifas-comisiones/tarifas-comisiones.component';
import { ParametrosContablesComponent } from './configuracion-general/parametros-contables/parametros-contables.component';
import { MaquinaEstadosComponent } from './configuracion-general/maquina-estados/maquina-estados.component';
import { MenusComponent } from './configuracion-general/menus/menus.component';
import { ProcesosAutomaticosComponent } from './configuracion-general/procesos-automaticos/procesos-automaticos.component';
import { PerfilesPermisosComponent } from './configuracion-general/perfiles-permisos/perfiles-permisos.component';
import { DepartamentosMunicipiosComponent } from './configuracion-general/departamentos-municipios/departamentos-municipios.component';
import { TipoProductorComponent } from './configuracion-general/tipo-productor/tipo-productor.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfiguracionGeneralComponent,
    ActividadEconomicaComponent,
    DestinoComponent,
    ParametroComisionComponent,
    ParametrosGeneralesComponent,
    IntermediarioFinancieroComponent,
    HomeComponent,
    NombreDelSubcomponenteComponent,
    ListasReferenciaComponent,
    CalendarioComponent,
    ModalidadesPagoComponent,
    ComisionistasBmcComponent,
    FirmasDigitalesComponent,
    ReglasNegocioComponent,
    ProgramaGarantiaComponent,
    TarifasComisionesComponent,
    ParametrosContablesComponent,
    MaquinaEstadosComponent,
    MenusComponent,
    ProcesosAutomaticosComponent,
    PerfilesPermisosComponent,
    DepartamentosMunicipiosComponent,
    TipoProductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
