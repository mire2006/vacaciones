import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { Destino } from 'src/app/modelo/destino';

@Component({
  selector: 'app-eliminar-destino-modal',
  templateUrl: './eliminar-destino-modal.component.html',
  styleUrls: ['./eliminar-destino-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, ],
})

export class EliminarDestinoModalComponent {
  @Input() destino!: Destino;

  constructor(private modalCtrl: ModalController) {}

  confirmar() {
    this.modalCtrl.dismiss({ confirmado: true });
  }

  cancelar() {
    this.modalCtrl.dismiss({ confirmado: false });
  }
}
