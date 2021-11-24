import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {}

  buscar(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  // aqui vai toda a regra de negocio, ex: se a transferencia for depois do horario comercial, ela só vai ser efetuada no próximo dia útil
  private hidratar(transferencia: Transferencia) {
    transferencia.data = new Date().toString();
  }
}
