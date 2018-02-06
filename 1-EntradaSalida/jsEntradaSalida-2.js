/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var nombre;
	//Esto es un comentario de una linea
	/*Esto es un bloque
	alert(nombre);
	alert("nombre");
	nombre="Franco";
	alert(nombre);*/
	nombre = prompt("Introduce tu nombre", "Escribe aqui!!");
	alert("El nombre ingresado es: "+nombre);
}

