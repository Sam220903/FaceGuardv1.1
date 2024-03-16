import { TestBed } from '@angular/core/testing';

import { ConsultarMensajesService } from './consultar-mensajes.service';

describe('ConsultarMensajesService', () => {
  let service: ConsultarMensajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarMensajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
