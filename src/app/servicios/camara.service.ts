import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})

export class CamaraService {

  constructor() { }

  async tomarFoto(): Promise<{ webPath: string }> {
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    if (photo.webPath) {
      return { webPath: photo.webPath };
    } else {
      throw new Error('No se pudo obtener la ruta de la imagen');
    }
  }
}
