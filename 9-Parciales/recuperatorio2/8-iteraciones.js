//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var salir ="";
	var contadorPares=0;
	var acumulador = 0;
	var contador =0;
	var promedio;
	var numeroMaximo = 0;
	var numeroMinimo =0;

	while(salir!="no")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		while(numero<0)
		{
			numero=prompt("Reingrese numero");
			numero=parseInt(numero);
		}

		if (numero!=0 && numero%2==0)
		{
			contadorPares++;
		}

		if (contador==0)
		{
			numeroMaximo=numero;
			numeroMinimo=numero;
		}
		else
		{
			if (numero>numeroMaximo)
			{
				numeroMaximo=numero;
			}
			else
			{
				if (numero<numeroMinimo)
				{
					numeroMinimo=numero;
				}
			}
		}

		acumulador = numero+acumulador;
		contador++;
		salir=prompt("'no' para salir");
	}
	promedio=acumulador/contador;

	document.write("Numeros pares: "+contadorPares+"<br>");
	document.write("Promedio: "+promedio+"<br>");
	document.write("Suma de los numeros ingresados: "+acumulador+"<br>");
	document.write("Numero maximo: "+numeroMaximo+"<br>");
	document.write("Numero minimo: "+numeroMinimo+"<br>");
}

