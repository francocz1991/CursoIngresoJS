//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var diaSemana = 0;
	var importeMaximo = 0;
	var importeMinimo = 0;

	while(diaSemana<7)
	{
		importe=prompt("Ingrese importe");

		while(importe<0)
		{
			importe=prompt("Reingrese importe");
		}

		if (diaSemana==0)
		{
			importeMaximo=importe;
			importeMinimo=importe; 
		}
		else
		{
			if (importe>importeMaximo)
			{
				importeMaximo=importe;
			}
			else
			{
				if (importe<importeMinimo)
				{
					importeMinimo=importe;
				}
			}
		}

		diaSemana++;
	}

	document.write("Importe maximo: "+importeMaximo+"<br>");
	document.write("Importe minimo: "+importeMinimo+"<br>");
	
}

