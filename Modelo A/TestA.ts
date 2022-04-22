import { Detalle } from "./Detalle";
import { hojaRuta } from "./HojaRuta";
import { Vehiculo } from "./Vehiculo";

var Vehiculo1 = new Vehiculo("AAA111", "Ford", "Fiesta");
var hojaRuta1 = new hojaRuta(new Date(2020, 1, 1), 1);
var hojaRuta2 = new hojaRuta(new Date(2020, 1, 2), 2);
var hojaRuta3 = new hojaRuta(new Date(2020, 1, 3), 3);
// ---------------------------------------------------------
var detalle1 = new Detalle(10, 95);
var detalle2 = new Detalle(20, 80);
var detalle3 = new Detalle(30, 75);
hojaRuta1.addDetalle(detalle1);
hojaRuta1.addDetalle(detalle2);
hojaRuta1.addDetalle(detalle3);
// ---------------------------------------------------------
var detalle4 = new Detalle(40, 125);
var detalle5 = new Detalle(30, 110);
var detalle6 = new Detalle(30, 90);
hojaRuta2.addDetalle(detalle4);
hojaRuta2.addDetalle(detalle5);
hojaRuta2.addDetalle(detalle6);
// ---------------------------------------------------------
var detalle7 = new Detalle(45, 80);
var detalle8 = new Detalle(20, 135);
var detalle9 = new Detalle(60, 200);
hojaRuta3.addDetalle(detalle7);
hojaRuta3.addDetalle(detalle8);
hojaRuta3.addDetalle(detalle9);
// ----------------------------------------------------------
Vehiculo1.addHojaRuta(hojaRuta1);
Vehiculo1.addHojaRuta(hojaRuta2);
Vehiculo1.addHojaRuta(hojaRuta3);

console.log(
  "Kilometros recorridos desde Febrero de 2020 hasta Febrero de 2021:"
);
console.log(
  Vehiculo1.calcularTotalKilometrosRecorridos(
    new Date(2020, 2, 1),
    new Date(2021, 2, 1)
  )
);
