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
    
      let row: HTMLDivElement | null = null; // Inicializamos la variable row
      let count = 0; // Variable para contar las cartas en cada fila
    
      this.users.forEach(user => {
        if (count % 3 === 0) { // Si el conteo es múltiplo de 3, creamos una nueva fila
          row = document.createElement('div');
          row.classList.add('row', 'row-cols-1', 'row-cols-md-3', 'mt-3');
          container.appendChild(row);
        }
    
        const div = document.createElement('div');
        div.classList.add('col', 'col-4', 'user-card'); // Agregamos la clase 'user-card' para aplicar estilos
        
        const card = document.createElement('div');
        card.classList.add('card');
    
        const img = document.createElement('img');
        img.src = 'data:image/jpeg;base64,' + user.foto;
        img.alt = '';
        img.width = 200;
        img.classList.add('mx-auto');
        
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        
        const h5 = document.createElement('h5');
        h5.textContent = user.nombre;
        h5.classList.add('card-title', 'text-center');
    
        cardBody.appendChild(h5);
        card.appendChild(img);
        card.appendChild(cardBody);
        div.appendChild(card);
        
        if (row) { // Si hay una fila creada, agregamos la carta a esa fila
          row.appendChild(div);
        }
    
        count++; // Incrementamos el contador de cartas
      });
    }
    



}
