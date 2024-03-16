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
  const tpl = document.createElement('div');
  tpl.className = 'contenido';
    this.consultarMensajes.getMensajes().subscribe(data => {
      {
        data.forEach(element => {
            let div = document.createElement('div');
            let img = document.createElement('img');
            let content = document.createElement('div');
            let p = document.createElement('p');
            let time = document.createElement('p');
            content.className = 'mensaje';
            img.className = 'img-small rounded-circle';
            div.className = 'list-group-item';

            let formartTime = new Date(element.hora);

            // Agregar 6 horas a la hora actual
            const hoursToAdd = 6;
            const currentHour = formartTime.getHours();
            const newHour = (currentHour - hoursToAdd) ;
            formartTime.setHours(newHour);

            let formartTime1;

            formartTime1 = formartTime.toLocaleTimeString();
            // transform on 12 hours format
            formartTime1 = formartTime1.split(':');
            formartTime1 = `${(formartTime1[0] as unknown) as number % 24}:${formartTime1[1]} ${(formartTime1[0] as unknown) as number >= 12 ? 'PM' : 'AM'}`;

            img.src = `data:image/jpeg;base64,${element.usuario.foto}`;
            p.appendChild(document.createTextNode(element.mensaje));
            time.appendChild(document.createTextNode(formartTime1));

            div.appendChild(img);
            content.appendChild(p);
            content.appendChild(time);
            div.appendChild(content);
            tpl.appendChild(div);
            console.log(element.mensaje);
        });
        if (HTMLResponse) {
          HTMLResponse.appendChild(tpl);
        }
    }
    });
  }
}
