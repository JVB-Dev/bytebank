import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaDeTransferencias: any[];

  constructor() {
    this.listaDeTransferencias = [];
  }

  buscar() {
    return this.listaDeTransferencias;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.listaDeTransferencias.push(transferencia);
  }

  // aqui vai toda a regra de negocio, ex: se a transferencia for depois do horario comercial, ela só vai ser efetuada no próximo dia útil
  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
