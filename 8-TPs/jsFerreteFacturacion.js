/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precioUno;
var precioDos;
var precioTres;
var resultado;


function Sumar () 
{
	precioUno = parseInt(document.getElementById("PrecioUno").value);
	precioDos = parseInt(document.getElementById("PrecioDos").value);	
	precioTres = parseInt(document.getElementById("PrecioTres").value);	

	resultado = precioUno+precioDos+precioTres;

	alert("La suma de los precios es: $"+resultado);
}
function Promedio () 
{
	precioUno = parseInt(document.getElementById("PrecioUno").value);
	precioDos = parseInt(document.getElementById("PrecioDos").value);	
	precioTres = parseInt(document.getElementById("PrecioTres").value);	

	resultado = (precioUno+precioDos+precioTres)/3;

	alert("El promedio de los precios es: $"+resultado);
}
function PrecioFinal () 
{
	precioUno = parseInt(document.getElementById("PrecioUno").value);
	precioDos = parseInt(document.getElementById("PrecioDos").value);	
	precioTres = parseInt(document.getElementById("PrecioTres").value);	

	resultado = (precioUno+precioDos+precioTres)*1.21;

	alert("El precio total con I.V.A. es: $"+resultado);
}