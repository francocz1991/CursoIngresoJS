//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var cantidadDeHilo;

	ancho = document.getElementById('ancho').value;
	largo = document.getElementById('largo').value;

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro = ancho+ancho+largo+largo;
	cantidadDeHilo = 6*perimetro;

	alert("La cantidad de hilo que se necesita es: "+cantidadDeHilo+" metros");
}

