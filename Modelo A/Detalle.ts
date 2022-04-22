export class Detalle {
  kmSalida: number;
  kmRegreso: number;
  horaSalida: number = 0;
  horaRegreso: number = 0;
  minutoSalida: number = 0;
  minutoRegreso: number = 0;
  constructor(kmSalida: number, kmRegreso: number) {
    this.kmSalida = kmSalida;
    this.kmRegreso = kmRegreso;
  }
  constructor2(
    horaSalida: number,
    horaRegreso: number,
    minutoSalida: number,
    minutoRegreso: number
  ) {
    this.horaSalida = horaSalida;
    this.horaRegreso = horaRegreso;
    this.minutoSalida = minutoSalida;
    this.minutoRegreso = minutoRegreso;
  }
}
