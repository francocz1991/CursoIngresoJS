/*ingresar numeros hasta que el cliente quiera, ingrese no para salir,
 entre -50 y 50*, informar pares e impares y el promedio de los positivos, maximo y minimo */

function Mostrar()
{
	/*var importe;

	importe = prompt("Ingrese importe");
	importe = parseInt(importe);

	while(importe<1)
	{
		importe = prompt("Reingrese importe");
	}*/

	var numero;
	var salir="";
	var contadorDePares = 0;
	var contadorDeImpares = 0;
	var numeroCero = 0;
	var acumuladorPositivos = 0;
	var contadorPositivos = 0;
	var contador = 0;
	var promedio = 0;
	var numeroMaximo = 0;
	var numeroMinimo = 0;

	while(salir!="no")
	{
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);


		while(numero<-50 || numero>50 || isNaN(numero))
		{
			numero = prompt("Reingrese numero");
			numero = parseInt(numero);			
		}

		if (numero==0)
		{
			numeroCero=numero;
		}
		else
		{
			if (numero%2 == 0)
			{
				contadorDePares++;
			}
			else
			{
				contadorDeImpares++;
			}
		}

		if (numero>0)
		{
			acumuladorPositivos = numero+acumuladorPositivos;
			contadorPositivos++;
		}

		if (contador == 0)
		{
			numeroMaximo = numero;
			numeroMinimo = numero;
		}
		else
		{
			if (numeroMaximo<numero)
			{
				numeroMaximo = numero;
			}
			else
			{
				if (numeroMinimo>numero)
				{
					numeroMinimo = numero;
				}
			}
		}

		contador++;
		salir =prompt("'no' para salir");

	}

	promedio = acumuladorPositivos/contadorPositivos;

	document.write("Pares: "+contadorDePares+"<br>");
	document.write("Impares: "+contadorDeImpares+"<br>");
	document.write("Promedio: "+promedio+"<br>");
	document.write("Numero maximo: "+numeroMaximo+"<br>");
	document.write("Numero minimo: "+numeroMinimo+"<br>");
}
