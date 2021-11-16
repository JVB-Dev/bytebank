import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencias: any[] = [];

  Transferir(e: any) {
    const transferencia = { ...e, data: new Date() };
    this.transferencias.push(transferencia);
    console.log(this.transferencias);
  }
}
