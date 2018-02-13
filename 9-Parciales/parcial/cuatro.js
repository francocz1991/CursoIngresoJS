function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("Ingrese un numero");
	numeroDos = prompt("Ingrese un numero");

	if (numeroUno==numeroDos)
	{
		resultado = numeroUno*numeroDos;
		document.write(resultado);
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resultado = numeroUno-numeroDos;
			document.write(resultado);
		}
		else
		{
			resultado = parseInt(numeroUno)+parseInt(numeroDos);
			document.write(resultado);
		}
	}
}
