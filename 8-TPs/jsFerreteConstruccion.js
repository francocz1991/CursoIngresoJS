/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo;
var ancho;
var radio;
var perimetro;
var numeroPi;
var cantidadDeAlambre;

function Rectangulo () 
{
	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = 2*(largo+ancho);
	cantidadDeAlambre = perimetro*3;

	alert("La cantidad de alambre que se necesita es: "+cantidadDeAlambre+" metros");
}

function Circulo () 
{
	radio = document.getElementById('Radio').value;
	radio = parseInt(radio);

	numeroPi = Math.PI;
	perimetro = 2*numeroPi*radio;

	cantidadDeAlambre = perimetro*3;

	alert("La cantidad de alambre que se necesita es: "+cantidadDeAlambre+" metros");
}

function Materiales () 
{
	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = 2*(largo+ancho);

	var cantidadDeBolsas = perimetro/4;
	var bolsasDeCemento = 2*cantidadDeBolsas;
	var bolsasDeCal = 3*cantidadDeBolsas;

	alert("La cantidad de bolsas de cemento que se necesitan es: "+bolsasDeCemento+"; y la de cal es: "+bolsasDeCal);
}