import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Transferencia } from "../models/transferencia";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

    valor: number;
    destino: number;

    // cria o evento de emissão do componente filho para o componente pai
    // @Output() aoTransferir = new EventEmitter<Transferencia>();

    constructor(private transferenciaService: TransferenciaService,
                private router: Router) {}
    
    transferir() {
        const transferencia: Transferencia = {
            valor: this.valor,
            destino: `${this.destino}`
        };

        // emite o evento retornando a variavel transferencia
        // this.aoTransferir.emit(transferencia);
        
        this.transferenciaService.adicionar(transferencia).subscribe(res => {
            console.log(res);
            this.limpaCampos();
            this.router.navigateByUrl('extrato');
        },
        error => console.error(error));
    }

    limpaCampos() {
        this.valor = null;
        this.destino = null;
    }
}