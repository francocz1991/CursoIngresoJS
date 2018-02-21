function Mostrar()
{
	var contador = -10;
	var iteraciones = 1;
	var contadorDePar = 0;
	var contadorDeImpar = 0;
	var contadorDeCeros = 0;
	var contadorDePositivos = 0;
	var contadorDeNegativos = 0;
	for(;;)
	{
		document.write(contador+"<br>");

		if(contador==0)
		{
			contadorDeCeros++;
		}
		else
		{
			if(contador%2==0)
			{
				contadorDePar++;
			}
			else
			{
				contadorDeImpar++;
			}
			if (contador>0)
			{
				contadorDePositivos++;
			}
			else
			{
				if (contador<0)
				{
				contadorDeNegativos++;
				}
			}
		}

		



		/*if ((contador%2)==0 && contador!=0)
		{
			contadorDePar++;		
		}
		else
		{
			if ((contador%2)!=0 && contador!=0)
			{
				contadorDeImpar++;
			}
			else
			{
				if (contador == 0)
				{
					contadorDeCeros++;
				}
			}
		}*/
		
		contador++;

		if (contador==iteraciones)
		{
			break;
		}


	}
	//document.write(contador+"<br>");
	document.write("La cantidad de pares es: "+contadorDePar+"<br>");
	document.write("La cantidad de impares es: "+contadorDeImpar+"<br>");
	document.write("La cantidad de ceros es: "+contadorDeCeros+"<br>");
	document.write("La cantidad de positivos es: "+contadorDePositivos+"<br>");
	document.write("La cantidad de negativos es: "+contadorDeNegativos);
}