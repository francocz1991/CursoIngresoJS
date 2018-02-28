//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var alumnos = 0;
	var acumuladorNotas = 0;
	var notaMasBaja;
	var notaVarones =0;
	var promedio;

	while(alumnos<7)
	{
		nota=prompt("Ingrese nota");
		nota=parseInt(nota);

		while(nota>10 || nota<0)
		{
			nota=prompt("Reingrese nota");
			nota=parseInt(nota);
		}

		sexo=prompt("Ingrese sexo: 'f'/'m'");

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Reingrese sexo: 'f'/'m'");
		}

		if (alumnos==0)
		{
			notaMasBaja = nota;
		}
		else
		{
			if (nota<notaMasBaja)
			{
				notaMasBaja=nota;
			}
		}

		if (sexo=="m" && nota>5)
		{
			notaVarones++;
		}

		acumuladorNotas=nota+acumuladorNotas;
		alumnos++;
		
	}

	promedio = acumuladorNotas/alumnos;

	alert("Promedio: "+promedio);
	alert("Nota mas baja: "+notaMasBaja);
	alert("Varones con nota mayor a 6: "+notaVarones);
	
}

