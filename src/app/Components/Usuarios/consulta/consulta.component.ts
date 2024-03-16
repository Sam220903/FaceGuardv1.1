import { Component } from '@angular/core';
import { ConsultarUsuariosService } from 'src/app/services/consultar-usuarios.service';
import { User } from 'src/app/Core/user'; 
import { Router } from '@angular/router';


import { NgFor } from '@angular/common';
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {
    
    users: User[] = [];
  
    constructor(private consultarUsuario: ConsultarUsuariosService, private router: Router) {
      this.consultarUsuario.getUsers();
    }
  
    ngOnInit(): void {
      this.getUsers();
    }
  
    getUsers() {
      this.consultarUsuario.getUsers().subscribe(data => {
        this.users = data;
        console.log(this.users);
        this.renderUsers();
      });
    }

    renderUsers() {
      const container = document.querySelector('.container');
      if (!container) return;

      this.users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('col', 'col-3', 'user-card'); // Agregamos la clase 'user-card' para aplicar estilos
        
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = 'data:image/jpeg;base64,' + user.foto;
        img.alt = '';
        
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        
        const h5 = document.createElement('h5');
        h5.textContent = user.nombre;

        cardBody.appendChild(h5);
        card.appendChild(img);
        card.appendChild(cardBody);
        div.appendChild(card);
        
        container.appendChild(div);
      });
    }



}
