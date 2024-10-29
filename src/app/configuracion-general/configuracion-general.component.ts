import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion-general',
  templateUrl: './configuracion-general.component.html',
  styleUrls: ['./configuracion-general.component.css']
})

export class ConfiguracionGeneralComponent {
  configItems = [
    { label: 'Listas de referencia', icon: 'fas fa-list' },
    { label: 'Calendario', icon: 'fas fa-calendar-alt' },
    { label: 'Modalidades de Pago', icon: 'fas fa-hand-holding-usd' },
    { label: 'Comisionistas BMC', icon: 'fas fa-dollar-sign' },
    { label: 'Firmas Digitales', icon: 'fas fa-pen' },
    { label: 'Reglas de negocio', icon: 'fas fa-file-alt' },
    { label: 'Programa de garantías', icon: 'fas fa-star' },
    { label: 'Tarifas y comisiones', icon: 'fas fa-coins' },
    { label: 'Parámetros contables', icon: 'fas fa-chart-line' },
    { label: 'Máquinas de estados', icon: 'fas fa-cogs' },
    { label: 'Parámetros generales', icon: 'fas fa-sliders-h' },
    { label: 'Menús', icon: 'fas fa-bars' },
    { label: 'Procesos automáticos', icon: 'fas fa-sync' },
    { label: 'Perfiles y permisos', icon: 'fas fa-user-cog' },
  ];
}

// export class ConfiguracionGeneralComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
