import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  // @Input() é necessário quando o componente precisa receber um parâmetro
  // EX: <app-extrato [transferencias]="transferencias"></app-extrato>
  // @Input() transferencias: any[];

  transferencias: Transferencia[];

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit(): void {
    this.transferenciaService.buscar().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }
}
