export interface Transferencia {
    id?:      number | string; // valor opcional
    valor:   number;
    destino: number | string;
    data?:    string; // valor opcional
}
