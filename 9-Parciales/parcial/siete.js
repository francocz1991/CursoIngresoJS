/*pedir hasta que el cliente quiera una letra, validar que sea letra, no puede ser numero,
 despues ingresar un numero entre 200 y -200, mostrar la letra del numero mas bajo,
 el promedio de todos los numeros que se ingresaros despues de una vocal,
 la letra del maximo y la letra del minimo*/

function Mostrar()
{
	var letra;
	var numero;
	var salir="";
	var contador = 0;
	var acumuladorNumeros = 0;
	var contadorNumeros = 0;
	var promedio;
	var letraMaximo = "";
	var letraMinimo = "";
	var numeroMaximo = 0;
	var numeroMinimo = 0;

	while(salir!="no")
	{
		letra = prompt("Ingrese una letra");

		while(letra.length >1 || !(isNaN(letra)))
		{
			letra = prompt("Reingrese una letra");
		}

		numero = prompt("Ingrese numero");
		numero = parseInt(numero);

		while(numero<-200 || numero>200 && isNaN(letra))
		{
			numero = prompt("Reingrese numero");
			numero = parseInt(numero);
		}

		if (numero)
		{
			acumuladorNumeros = numero+acumuladorNumeros;
			contadorNumeros++;
		}

		if (contador==0)
		{
			letraMaximo = letra;
			letraMinimo = letra;
			numeroMinimo = numero;
			numeroMaximo = numero;
		}
		else
		{
			if (numero>numeroMaximo)
			{
				letraMaximo=letra;
			}
			else
			{
				if (numero<numeroMinimo)
				{
					letraMinimo = letra;
				}
			}
		}


		contador++;
		salir = prompt("'no' para salir");
	}

	promedio = acumuladorNumeros/contadorNumeros;

	document.write("Promedio: "+promedio+"<br>");
	document.write("Letra numero maximo: "+letraMaximo+"<br>");
	document.write("Letra numero minimo: "+letraMinimo+"<br>");



}
