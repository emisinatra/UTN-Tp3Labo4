import { Detalle } from "./Detalle";

export class hojaRuta {
  detalles = Array<Detalle>();
  fecha: Date;
  numero: number;
  constructor(fecha: Date, numero: number) {
    this.fecha = fecha;
    this.numero = numero;
  }

  addDetalle(detalle: Detalle) {
    this.detalles.push(detalle);
  }

  calcularTotalKilometros(): number {
    let total: number = 0;
    this.detalles.forEach((element) => {
      total += element.kmSalida - element.kmRegreso;
    });
    return total;
  }
}
