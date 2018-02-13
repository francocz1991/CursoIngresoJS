//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("Ingrese numero");
	numeroDos = prompt("Ingrese numero");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	if (numeroUno==numeroDos)
	{
		resultado = numeroUno*numeroDos;
		document.write("<h1>"+resultado+"</h1>");
	}
	else
	{
		if (numeroUno>numeroDos)
		{
			resultado = numeroUno-numeroDos;
			document.write("<h1>"+resultado+"</h1>");
		}
		else
		{
			resultado = numeroUno+numeroDos;
			document.write("<h1>"+resultado+"</h1>");
		}
	}	
}

