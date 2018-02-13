//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var cantidadHilo;

	ancho = document.getElementById('ancho').value;
	largo = document.getElementById('largo').value;

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro = ancho+ancho+largo+largo;
	cantidadHilo = 6*perimetro;

	alert("Se necesitan "+cantidadHilo+" metros de hilo");	
}

