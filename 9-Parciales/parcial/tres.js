function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var cantidadDeHilo;

	largo = document.getElementById("alrgo").value;
	ancho = document.getElementById("ancho").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = largo+largo+ancho+ancho;
	cantidadDeHilo = perimetro*3;

	alert("La cantidad de hilo que se necesita son "+cantidadDeHilo+" metros");


}
