import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Destino } from 'src/app/modelo/destino';
import { ValorVueloPage } from '../valor-vuelo/valor-vuelo.page';
import { addIcons } from 'ionicons';
import { ModalController } from "@ionic/angular/standalone";
import { airplaneOutline, cameraOutline, trashOutline } from 'ionicons/icons';
import { EliminarDestinoModalComponent } from 'src/app/componentes/eliminar-destino-modal/eliminar-destino-modal.component';
import { CamaraService } from 'src/app/servicios/camara.service';
import { DestinosService } from 'src/app/servicios/destinos.service';
import { OpentripmapService } from 'src/app/servicios/opentripmap.service';
import { ResultadosBusquedaComponent } from 'src/app/componentes/resultados-busqueda/resultados-busqueda.component';

addIcons({ airplaneOutline, cameraOutline, trashOutline });

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ValorVueloPage, EliminarDestinoModalComponent, ResultadosBusquedaComponent],
})

export class HomePage {
  destinos: Destino[] = [];
  resultadosBusqueda: any[] = []; 
  destinosDeseados: Destino[] = []; 

  constructor(
    private modalCtrl: ModalController, 
    private camaraService: CamaraService,
    private destinosService: DestinosService,
    private opentripmapService: OpentripmapService
  ) {
    this.cargarDestinos();
  }

  ionViewWillEnter() { 
    this.cargarDestinos();
  }

  async cargarDestinos() {
    this.destinos = await this.destinosService.getDestinos();
  }

  async abrirModalValorVuelo(destino: Destino) {
    const modal = await this.modalCtrl.create({
      component: ValorVueloPage,
      componentProps: { destino } 
    });

    modal.onDidDismiss().then(async (data) => {
      if (data.data) {
        destino.precio = data.data.precio;
        await this.destinosService.actualizarDestino(destino);
      }
    });

    await modal.present();
  }

  async abrirModalEliminar(destino: Destino) {
    const modal = await this.modalCtrl.create({
      component: EliminarDestinoModalComponent,
      componentProps: { destino }
    });

    modal.onDidDismiss().then(async (data) => {
      if (data.data && data.data.confirmado) {
        const index = this.destinos.indexOf(destino);
        if (index > -1) {
          this.destinos.splice(index, 1);
          await this.destinosService.eliminarDestino(destino);
        }
      }
    });

    await modal.present();
  }

  async capturarImagen(destino: Destino) {
    try {
      const imagen = await this.camaraService.tomarFoto();
      destino.imagen = imagen.webPath || ''; 
      await this.destinosService.actualizarDestino(destino); 
    } catch (error) {
      console.error('Error al capturar la imagen:', error);
    }
  }

  async buscarDestinos(event: any) {
    const terminoBusqueda = event.target.value;
    if (terminoBusqueda.length > 2) {
      try {
        const resultados = await this.opentripmapService.buscarDestinos(terminoBusqueda);
        this.resultadosBusqueda = resultados || [];
        console.log(this.resultadosBusqueda); 
      } catch (error) {
        console.error('Error al buscar destinos:', error);
        this.resultadosBusqueda = [];
      }
    } else {
      this.resultadosBusqueda = [];
    }
  }

  async agregarADeseos(resultado: any) {
    try {
      const detalles = await this.opentripmapService.obtenerDetallesDestino(resultado.xid);

      const nuevoDestino: Destino = new Destino(
        resultado.name,
        '',
        null,
        detalles.image || 'https://ionicframework.com/docs/img/demos/card-media.png'
      );
      this.destinosDeseados.push(nuevoDestino);
      this.destinos.push(nuevoDestino); 
      await this.destinosService.agregarDestino(nuevoDestino);

    } catch (error) {
      console.error('Error al agregar a deseados:', error);
    }

    this.resultadosBusqueda = []; 
  }
}
