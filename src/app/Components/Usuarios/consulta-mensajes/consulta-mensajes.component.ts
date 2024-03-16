import { Component } from '@angular/core';
import { ConsultarMensajesService } from 'src/app/services/consultar-mensajes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consulta-mensajes',
  templateUrl: './consulta-mensajes.component.html',
  styleUrls: ['./consulta-mensajes.component.css']
})
export class ConsultaMensajesComponent {


  constructor(private consultarMensajes: ConsultarMensajesService, private router: Router) {
    this.consultarMensajes.getMensajes();
  }

  ngOnInit(): void {
    this.getMensajes();
  }

  
  getMensajes() {
    const HTMLResponse = document.querySelector('#mensajes');
    if (!HTMLResponse) return;
  
    const tpl = document.createElement('div');
    tpl.className = 'mensaje-container';
  
    this.consultarMensajes.getMensajes().subscribe(data => {
      data.forEach((element, index) => {
        // Crear una nueva fila después de cada grupo de tres mensajes
        if (index % 3 === 0) {
          const row = document.createElement('div');
          row.className = 'row';
          tpl.appendChild(row);
        }
  
        const row = tpl.lastChild as HTMLElement; // Obtener la última fila creada
  
        const div = document.createElement('div');
        div.className = 'col-md-4 mb-4';
  
        const img = document.createElement('img');
        img.className = 'img-small mx-auto d-block';
        img.setAttribute('style', 'border-radius: 25%;');
        img.width = 200;
        img.src = `data:image/jpeg;base64,${element.usuario.foto}`;
  
        const content = document.createElement('div');
        content.className = 'mensaje text-center';
  
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(element.mensaje));
        p.setAttribute('style', 'color: #FFFFFF; font-size: 1.5rem; font-weight: 500;');
  
        const time = document.createElement('p');
        time.setAttribute('style', 'color: #FFFFFF; font-size: 1.5rem; font-weight: 500;');
        let formartTime = new Date(element.hora);
        const hoursToAdd = 6;
        const currentHour = formartTime.getHours();
        const newHour = (currentHour - hoursToAdd);
        formartTime.setHours(newHour);
        let formartTime1;
        formartTime1 =  formartTime.toLocaleTimeString()
        formartTime1 = formartTime1.split(':');
        formartTime1 = `${(formartTime1[0] as unknown) as number % 24}:${formartTime1[1]} ${(formartTime1[0] as unknown) as number >= 12 ? 'PM' : 'AM'}`;
        time.appendChild(document.createTextNode(formartTime1));
  
        content.appendChild(p);
        content.appendChild(time);
        div.appendChild(img);
        div.appendChild(content);
  
        row.appendChild(div);
      });
  
      HTMLResponse.appendChild(tpl);
    });
  }
  
}
