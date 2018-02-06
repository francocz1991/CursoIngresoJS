/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);

	alert("La suma es "+(numeroUno+numeroDos));
}

