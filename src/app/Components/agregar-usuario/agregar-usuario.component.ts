import { Component, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AgregarUsuarioService } from 'src/app/services/agregar-usuario.service';


@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css'],
})

export class AgregarUsuarioComponent implements OnInit, OnDestroy {
  
  public preview: string = '';
  videoRef: any;
  camaraControl = document.querySelector('#camaraControl');
  cameraActivated: Boolean = true;
  photo = document.querySelector('#photo') as HTMLImageElement;
  private upbytesPhoto: any;


  constructor(private sanitizer: DomSanitizer, private agregarUsuarioService: AgregarUsuarioService) {
    
  }

  // Convertir imagen a base64
  extractBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve({
          base: reader.result,
          file,
        });
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  ngOnInit(): void {
    const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 300,300);
      }
    }
    this.videoRef = document.getElementById('video');
    console.log(this.videoRef);
    this.initCamera();
  }

  ngOnDestroy(): void {
    this.stopCamera();
  }

  // Abrir camara
  initCamera() {
    navigator.mediaDevices.getUserMedia({
      video: { width: 300, height: 300},
      audio: false,
    })
    .then((stream) => {
      this.videoRef.srcObject = stream;
    });
    
  }

  stopCamera() {
    const stream = this.videoRef.srcObject as MediaStream;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => {
        track.stop();
        stream.removeTrack(track);
      });
    }
  }

  resumeCamera(): void {
    this.initCamera();
  }

  controlCamera():void{
    if (this.cameraActivated){
      this.stopCamera();
      this.cameraActivated = false;
    } else {
      this.resumeCamera();
      this.cameraActivated = true;
    }
  }

  captureImage(): void {
    const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(this.videoRef, 0, 0, 300,300);
        this.upbytesPhoto = canvas.toDataURL('image/jpeg').split(",")[1];
      }
    }
  }

  captureFile(event : any) : void{
    const image = event.target.files[0];
    console.log(image);
    const canvas  = document.querySelector('.canvas') as HTMLCanvasElement;
    this.extractBase64(image).then((img:any)=> {
      this.preview = img.base;
      let img1 = img.base
      this.upbytesPhoto = img1.split(",")[1];
      //console.log(this.upbytesPhoto)
      if(canvas){
        const ctx = canvas.getContext('2d');
        if(ctx){
          const img = new Image();
          img.src = this.preview;
          img.onload = () => {
            ctx.drawImage(img, 0, 0, 300,300);
          }
        }
      }  
    }) 
  }

  sendInfo(event:any): void {
    event.preventDefault();
    const form = document.getElementById("formData") as HTMLFormElement;
    const name = form.elements.namedItem("name") as HTMLInputElement;

    const data = new FormData();
    data.append('nombre', name.value);
    data.append('foto', this.upbytesPhoto);


    this.agregarUsuarioService.upload(data).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      }
    }); 
    
}

}
