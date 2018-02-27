/* NO! if, ingresar tres numeros, mostrar promedio*/

function Mostrar()
{
	/*var numeroUno;
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
	}*/

	var numeroUno;
	var numeroDos;
	var numeroTres;
	var numeroMayor;
	var numeroMenor;

	numeroUno=prompt("Ingrese numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("Ingrese numero");
	numeroDos=parseInt(numeroDos);
	numeroTres=prompt("Ingrese numero");
	numeroTres=parseInt(numeroTres);

	if (numeroUno>numeroDos && numeroUno>numeroTres)
	{
		numeroMayor=numeroUno;
	}
	else
	{
		if (numeroDos>numeroUno && numeroDos>numeroTres)
		{
			numeroMayor=numeroDos;
		}
		else
		{
			numeroMayor = numeroTres;
		}
	}

	if (numeroUno<numeroDos && numeroUno<numeroTres)
	{
		numeroMenor = numeroUno;
	}
	else
	{
		if (numeroDos<numeroUno && numeroDos<numeroTres)
		{
			numeroMenor = numeroDos;
		}
		else
		{
			numeroMenor = numeroTres;
		}
	}

	alert("Numero mayor: "+numeroMayor);
	alert("Numero menor: "+numeroMenor);

}
