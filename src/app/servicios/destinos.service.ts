import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Destino } from '../modelo/destino';

const DESTINOS_INICIALES: Destino[] = [
  new Destino('Cancún', 'México', null, 'https://cdn.vallarta-adventures.com/sites/default/files/2019-01/cancun-about-weather%20%281%29.jpg'),
  new Destino('Punta Cana', 'República Dominicana', null, 'https://media.staticontent.com/media/pictures/83239c0a-50e5-44c5-bbb2-bea8292543e4'),
  new Destino('San Andrés', 'Colombia', null, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Panor%C3%A1mica_de_San_Andres.JPG/1200px-Panor%C3%A1mica_de_San_Andres.JPG'),
  new Destino('Buzios', 'Brasil', null, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Buzios_11_2006_03.JPG/1200px-Buzios_11_2006_03.JPG'),
  new Destino('Lima', 'Perú', null, 'https://www.comparaonline.cl/blog-statics/cl/uploads/2017/01/aarom-ore-Yrqyn1Gb80k-unsplash-scaled.jpg'),
  new Destino('San Pedro de Atacama', 'Chile', null, 'https://upload.wikimedia.org/wikipedia/commons/1/19/San_Pedro_de_Atacama_oasis.jpg'),
  new Destino('Buenos Aires', 'Argentina', null, 'https://upload.wikimedia.org/wikipedia/commons/0/00/ObeliscoBA2015.2.jpg'),
];

@Injectable({
  providedIn: 'root'
})
export class DestinosService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;

    const storedDestinos = await this._storage.get('destinos');
    if (!storedDestinos || storedDestinos.length === 0) {
      await this._storage.set('destinos', DESTINOS_INICIALES);
    }
  }

  async getDestinos(): Promise<Destino[]> {
    return DESTINOS_INICIALES; 
  }

  async agregarDestino(destino: Destino) {
    const destinos = await this.getDestinos();
    destinos.push(destino);
    return this._storage?.set('destinos', destinos);
  }

  async actualizarDestino(destino: Destino) {
    const destinos = await this.getDestinos();
    const index = destinos.findIndex(d => d.nombre === destino.nombre);
    if (index > -1) {
      destinos[index] = destino;
      return this._storage?.set('destinos', destinos);
    }
  }

  async eliminarDestino(destino: Destino) {
    const destinos = await this.getDestinos();
    const index = destinos.findIndex(d => d.nombre === destino.nombre);
    if (index > -1) {
      destinos.splice(index, 1);
      return this._storage?.set('destinos', destinos);
    }
  }
}
