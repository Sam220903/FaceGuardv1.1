import { TestBed } from '@angular/core/testing';

import { AgregarUsuarioService } from './agregar-usuario.service';

describe('AgregarUsuarioService', () => {
  let service: AgregarUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
