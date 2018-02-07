function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var cantidadDeHilo;

	largo = parseInt(document.getElementById("alrgo").value);
	ancho = parseInt(document.getElementById("ancho").value);

	perimetro = largo+largo+ancho+ancho;
	cantidadDeHilo = perimetro*3;

	alert("La cantidad de hilo que se necesita son "+cantidadDeHilo+" metros");


}
