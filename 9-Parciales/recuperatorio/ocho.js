function Mostrar()
{
	var numero;
	var salir = "";
	var contadorPares = 0;
	var acumuladorNumeros = 0;
	var promerdio;
	var contadorNumeros = 0;
	var maximo = 0;
	var minimo = 0;
	var contador = 0;

	while(salir != "no")
	{
		numero = prompt("Ingrese numero")
		numero = parseInt(numero);

		while(numero<0)
		{
			numero = prompt("Reingrese numero")
			numero = parseInt(numero);
		}

		if (numero!=0 && numero%2==0)
		{
			contadorPares++;
		}

		if (contador == 0)
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if (maximo<numero)
			{
				maximo = numero;
			}
			else
			{
				if (minimo>numero)
				{
					minimo = numero; 
				}
			}
		}

		acumuladorNumeros = acumuladorNumeros+numero;
		contadorNumeros++;
		contador++;
		salir = prompt("No para salir");
	}
	promerdio = acumuladorNumeros/contadorNumeros;

	document.write("Pares: "+contadorPares+"<br>");
	document.write("Promedio: "+promerdio+"<br>");
	document.write("Suma"+acumuladorNumeros+"<br>");
	document.write("Maximo: "+maximo+"<br>");
	document.write("Minimo: "+minimo+"<br>");
}
