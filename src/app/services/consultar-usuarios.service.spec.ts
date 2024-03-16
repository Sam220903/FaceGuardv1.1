import { TestBed } from '@angular/core/testing';

import { ConsultarUsuariosService } from './consultar-usuarios.service';

describe('ConsultarUsuariosService', () => {
  let service: ConsultarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
