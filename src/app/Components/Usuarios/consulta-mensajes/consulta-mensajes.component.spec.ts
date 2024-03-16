import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMensajesComponent } from './consulta-mensajes.component';

describe('ConsultaMensajesComponent', () => {
  let component: ConsultaMensajesComponent;
  let fixture: ComponentFixture<ConsultaMensajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaMensajesComponent]
    });
    fixture = TestBed.createComponent(ConsultaMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
