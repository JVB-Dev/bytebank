import { Component } from '@angular/core';
import { Transferencia } from './models/transferencia';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  constructor() {}

  // constructor(private transferenciaService: TransferenciaService) {}

  // transferir($event: Transferencia) {
  //   this.transferenciaService.adicionar($event);
  // }
}
