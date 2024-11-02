import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfiguracionGeneralComponent } from './configuracion-general/configuracion-general.component';
import { ParametrosGeneralesComponent } from './configuracion-general/parametros-generales/parametros-generales.component';
import { IntermediarioFinancieroComponent } from './configuracion-general/intermediario-financiero/intermediario-financiero.component';
import { DestinoComponent } from './configuracion-general/destino/destino.component';
import { ActividadEconomicaComponent } from './configuracion-general/actividad-economica/actividad-economica.component';
import { CalendarioComponent } from './configuracion-general/calendario/calendario.component';
import { ComisionistasBmcComponent } from './configuracion-general/comisionistas-bmc/comisionistas-bmc.component';
import { DepartamentosMunicipiosComponent } from './configuracion-general/departamentos-municipios/departamentos-municipios.component';
import { FirmasDigitalesComponent } from './configuracion-general/firmas-digitales/firmas-digitales.component';
import { ListasReferenciaComponent } from './configuracion-general/listas-referencia/listas-referencia.component';
import { MaquinaEstadosComponent } from './configuracion-general/maquina-estados/maquina-estados.component';
import { MenusComponent } from './configuracion-general/menus/menus.component';
import { ModalidadesPagoComponent } from './configuracion-general/modalidades-pago/modalidades-pago.component';
import { ParametroComisionComponent } from './configuracion-general/parametro-comision/parametro-comision.component';
import { ParametrosContablesComponent } from './configuracion-general/parametros-contables/parametros-contables.component';
import { PerfilesPermisosComponent } from './configuracion-general/perfiles-permisos/perfiles-permisos.component';
import { ProcesosAutomaticosComponent } from './configuracion-general/procesos-automaticos/procesos-automaticos.component';
import { ProgramaGarantiaComponent } from './configuracion-general/programa-garantia/programa-garantia.component';
import { ReglasNegocioComponent } from './configuracion-general/reglas-negocio/reglas-negocio.component';
import { TarifasComisionesComponent } from './configuracion-general/tarifas-comisiones/tarifas-comisiones.component';
import { TipoProductorComponent } from './configuracion-general/tipo-productor/tipo-productor.component'
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'configuracion-general', component: ConfiguracionGeneralComponent },
  { path: 'parametros-generales', component: ParametrosGeneralesComponent },
  { path: 'intermediario-financiero', component: IntermediarioFinancieroComponent },
  { path: 'destino', component: DestinoComponent},
  { path: 'actividad-economica', component: ActividadEconomicaComponent},
  { path: 'calendario', component: CalendarioComponent},
  { path: 'comisionistas-bmc', component: ComisionistasBmcComponent},
  { path: 'departamentos-municipios', component: DepartamentosMunicipiosComponent},
  { path: 'firmas-digitales', component: FirmasDigitalesComponent},
  { path: 'listas-referencias', component: ListasReferenciaComponent},
  { path: 'maquina-estados', component: MaquinaEstadosComponent},
  { path: 'menus', component: MenusComponent},
  { path: 'modalidades-pago', component: ModalidadesPagoComponent},
  { path: 'parametros-comision', component: ParametroComisionComponent},
  { path: 'parametros-contables', component: ParametrosContablesComponent},
  { path: 'perfiles-permisos', component: PerfilesPermisosComponent},
  { path: 'procesos-automaticos', component: ProcesosAutomaticosComponent},
  { path: 'programa-garantia', component: ProgramaGarantiaComponent},
  { path: 'reglas-negocio', component: ReglasNegocioComponent},
  { path: 'tarifas-comisiones', component: TarifasComisionesComponent},
  { path: 'tipo-productor', component: TipoProductorComponent}
  // Otras rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
