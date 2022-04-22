import { hojaRuta } from "./HojaRuta";
export class Vehiculo {
  hojasRuta = Array<hojaRuta>();
  patente: String;
  marca: String;
  modelo: String;
  constructor(patente: String, marca: String, modelo: String) {
    this.patente = patente;
    this.marca = marca;
    this.modelo = modelo;
  }
  addHojaRuta(hojaRuta: hojaRuta) {
    this.hojasRuta.push(hojaRuta);
  }

  calcularTotalKilometrosRecorridos(
    fechaDesde: Date,
    fechaHasta: Date
  ): number {
    let total: number = 0;
    this.hojasRuta.forEach((element) => {
      if (element.fecha >= fechaDesde && element.fecha <= fechaHasta) {
        total += element.calcularTotalKilometros();
      }
    });
    return total;
  }
}
