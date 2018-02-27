/*pedir precio y porcentaje de descuento*/

function Mostrar()
{
 	/*var importe;
 	var importeFinal;

 	importe = prompt("Ingrese el precio de producto","$$$"); 

 	importeFinal = importe*1.21;

 	document.getElementById("importeFinal").value = parseInt(importeFinal);*/

 	var precio;
 	var descuento;
 	var precioConDescuento;
 	var precioConIva;

 	precio = prompt("Ingrese precio");
 	precio = parseInt(precio);

 	descuento = prompt("Ingrese descuento");
 	descuento = parseInt(descuento);

 	descuento = 1-(descuento/100);

 	precioConDescuento = precio*descuento;
 	alert("precio con descuento: "+precioConDescuento);

 	precioConIva = precioConDescuento*1.21;

 	document.getElementById("importeFinal").value = precioConIva;
}
