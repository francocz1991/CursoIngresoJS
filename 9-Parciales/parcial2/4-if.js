//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*no usar while, no validar.
Se ingresan 2 numeros, si son iguales se concatenan, si el mayor es el primero se multiplica de lo contrario se resta, 
si la multiplicacion es par, agregar la palabra "es par"*/
function Mostrar()
{
	/*var numeroUno;
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
	}*/	

	var numeroUno;
	var numeroDos;
	var resultado;
	var multiplicacion;

	numeroUno = prompt("ingrese primer numero");
	numeroDos = prompt("ingrese segundo numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if (numeroUno==numeroDos)
	{
		resultado=numeroUno+""+numeroDos;
	}
	else
	{
		if (numeroUno>numeroDos)
		{
			multiplicacion=numeroUno*numeroDos;
			resultado=multiplicacion;
		}
		else
		{
			if (numeroUno<numeroDos)
			{
				resultado=numeroUno-numeroDos;
			}
			else
			{
				if ((numeroUno*numeroDos)!=0 && numeroUno*numeroDos%2==0)
				{
					resultado = resultado+"es`par";
				}
			}
		}
	}

	

	

	alert(resultado);
}

