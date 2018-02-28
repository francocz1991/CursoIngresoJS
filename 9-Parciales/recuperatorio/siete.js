function Mostrar()
{
	var edad;
	var sexo;
	var contador = 0;
	var acumuladorEdad = 0;
	var promedio =0;
	var edadMasBaja = 0;
	var varonesMasVeinte = 0;

	while(contador<100)
	{
		edad = prompt("Ingrese edad");
		edad = parseInt(edad);

		while(edad>100 || edad<0)
		{
			edad = prompt("Reingrese edad");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese sexo: 'f'/'m'");

		while(sexo!="f" && sexo!="m")
		{
			sexo = prompt("Reingrese sexo: 'f'/'m'");
		}

		if (contador == 0)
		{
			edadMasBaja = edad;
		}
		else
		{
			if (edad<edadMasBaja)
			{
				edadMasBaja = edad;
			}
		}

		if (edad>19 && sexo =="m")
		{
			varonesMasVeinte++;
		}

		acumuladorEdad = acumuladorEdad+edad;
		contador++;

	}

	promedio = acumuladorEdad/contador;

	alert("Promedio: "+promedio);
	alert("Edad mas baja: "+edadMasBaja);
	alert("Varones mayores de 20: "+varonesMasVeinte);
}
