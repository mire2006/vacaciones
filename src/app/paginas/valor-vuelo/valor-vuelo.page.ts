import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Destino } from 'src/app/modelo/destino';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegValorModalComponent } from 'src/app/componentes/reg-valor-modal/reg-valor-modal.component';
import { ConfElmModalComponent } from 'src/app/componentes/conf-elm-modal/conf-elm-modal.component';

@Component({
  selector: 'app-valor-vuelo',
  templateUrl: './valor-vuelo.page.html',
  styleUrls: ['./valor-vuelo.page.scss'],
  standalone: true,
  imports: [IonicModule, 
    CommonModule, FormsModule]
})

export class ValorVueloPage {

  @Input() destino!: Destino;

  constructor(private modalCtrl: ModalController) { }

  async guardarValor() {
    const modal = await this.modalCtrl.create({
      component: RegValorModalComponent,
      componentProps: { destino: this.destino }
    });

    modal.onDidDismiss().then((data) => {
      if (data.data && data.data.confirmado) {
        this.modalCtrl.dismiss({ precio: this.destino.precio });
      }
    });

    await modal.present();
  }

  async cancelar() {
    const modal = await this.modalCtrl.create({
      component: ConfElmModalComponent
    });

    modal.onDidDismiss().then((data) => {
      if (data.data && data.data.confirmado) {
        this.destino.precio = null; 
        this.modalCtrl.dismiss(); 
      }
    });

    await modal.present();
  }
}
