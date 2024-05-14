import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})

export class ResultadosBusquedaComponent {
  @Input() resultados: any[] = [];
  @Output() destinoSeleccionado = new EventEmitter<any>();
  @Output() agregarADeseosEvent = new EventEmitter<any>(); 

  seleccionarDestino(resultado: any) {
    this.destinoSeleccionado.emit(resultado);
  }

  agregarADeseos(resultado: any) {
    this.agregarADeseosEvent.emit(resultado);
  }
}
