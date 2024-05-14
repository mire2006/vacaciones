import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-conf-elm-modal',
  templateUrl: './conf-elm-modal.component.html',
  styleUrls: ['./conf-elm-modal.component.scss'],
  standalone: true,
  imports: [IonicModule]
})

export class ConfElmModalComponent {

  constructor(private modalCtrl: ModalController) { } 

  confirmar() {
    this.modalCtrl.dismiss({ confirmado: true });
  }

  cancelar() {
    this.modalCtrl.dismiss({ confirmado: false });
  }
}
