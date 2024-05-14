import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Destino } from 'src/app/modelo/destino';

@Component({
  selector: 'app-reg-valor-modal',
  templateUrl: './reg-valor-modal.component.html',
  styleUrls: ['./reg-valor-modal.component.scss'],
  standalone: true,
  imports: [IonicModule]
})

export class RegValorModalComponent {

  @Input() destino!: Destino;

  constructor(private modalCtrl: ModalController) { }

  confirmar() {
    this.modalCtrl.dismiss({ confirmado: true });
  }

  cancelar() {
    this.modalCtrl.dismiss({ confirmado: false });
  }
}