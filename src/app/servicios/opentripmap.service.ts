import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OpentripmapService {
  private apiKey = environment.apiKey;
  private apiUrl = 'http://api.opentripmap.com/0.1/en/places/';

  constructor() { }

  async buscarDestinos(termino: string) {
    const url = `${this.apiUrl}geoname?apikey=${this.apiKey}&name=${termino}`; 
    const response = await CapacitorHttp.get({ url });

    if (response.status !== 200) {
      throw new Error('Error en la petición a la API');
    }

    return response.data;
  }

  async obtenerDetallesDestino(xid: string) {
    const url = `${this.apiUrl}xid/${xid}?apikey=${this.apiKey}`;
    const response = await CapacitorHttp.get({ url });

    if (response.status !== 200) {
      throw new Error('Error en la petición a la API');
    }

    return response.data;
  }
}
