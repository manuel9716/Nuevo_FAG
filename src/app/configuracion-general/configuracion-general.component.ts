import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-configuracion-general',
  templateUrl: './configuracion-general.component.html',
  styleUrls: ['./configuracion-general.component.css']
})
export class ConfiguracionGeneralComponent implements OnInit {
  selectedTab: string = 'parametrizacion';
  configItems = [
    { label: 'Listas de referencia', icon: 'fas fa-list', route: '/listas-referencias' },
    { label: 'Calendario', icon: 'fas fa-calendar-alt', route: '/calendario' },
    { label: 'Modalidades de Pago', icon: 'fas fa-hand-holding-usd', route: '/modalidades-pago' },
    { label: 'Comisionistas BMC', icon: 'fas fa-dollar-sign', route: '/comisionistas-bmc' },
    { label: 'Firmas Digitales', icon: 'fas fa-pen', route: '/firmas-digitales' },
    { label: 'Reglas de negocio', icon: 'fas fa-file-alt', route: '/reglas-negocio' },
    { label: 'Programa de garantías', icon: 'fas fa-star', route: '/programa-garantia' },
    { label: 'Tarifas y comisiones', icon: 'fas fa-coins', route: '/tarifas-comisiones' },
    { label: 'Parámetros contables', icon: 'fas fa-chart-line', route: '/parametros-contables' },
    { label: 'Máquinas de estados', icon: 'fas fa-cogs', route: '/maquina-estados' },
    { label: 'Parámetros generales', icon: 'fas fa-sliders-h', route: '/parametros-generales' },
    { label: 'Menús', icon: 'fas fa-bars', route: '/menus' },
    { label: 'Procesos automáticos', icon: 'fas fa-sync', route: '/procesos-automaticos' },
    { label: 'Perfiles y permisos', icon: 'fas fa-user-cog', route: '/perfiles-permisos' },
  ];

  // Elementos de la pestaña Listas de tablas maestras
  listasMaestrasItems = [
    { label: 'Departamentos y municipios', icon: 'fas fa-id-card', route: '/departamentos-municipios' },
    { label: 'Intermediario Financiero', icon: 'fas fa-tags', route: '/intermediario-financiero' },
    { label: 'Actividad Económica', icon: 'fas fa-city', route: '/actividad-economica' },
    { label: 'Tipo de productor y tipo beneficiario', icon: 'fas fa-flag', route: '/tipo-productor' },
    { label: 'Destinos de créditos', icon: 'fas fa-money-bill-wave', route: '/destino' },
    // Agrega más elementos de listas maestras aquí si es necesario
  ];

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  ngOnInit(): void {
    // Lógica adicional al inicializar el componente, si es necesario
  }
}
