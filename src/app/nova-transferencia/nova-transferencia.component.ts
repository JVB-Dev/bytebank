import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

    valor: number;
    destino: number;

    @Output() aoTransferir = new EventEmitter<any>();

    Transferir() {
        console.log('Nova transferencia realizada');

        const transferencia = {valor: this.valor, destino: this.destino};
        this.aoTransferir.emit(transferencia);

        this.LimpaCampos();
    }

    LimpaCampos() {
        this.valor = null;
        this.destino = null;
    }
}