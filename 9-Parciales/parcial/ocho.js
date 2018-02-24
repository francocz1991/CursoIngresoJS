/*
	ingreso de alumnos, no sabemos cuantos hay, pedimos el nombre, cuantos alumnos ingrese.
*/
function Mostrar()
{
	var alumno;
	var contadorDeAlumnos=0;
	var nota =0;
	var acumuladorDeNota = 0;
	var promedio;
	var continuar = "";
	var sexo = "";
	var contadorDeHombre = 0;
	var contadorDeMujeres =0;
	var hombresDesaprobados =0;
	var nombreMejorNota;
	var mejorNota = 0;
	var promedioNotasMujeres;
	var acumuladorNotaMujeres =0;
	var acumuladorMujeres =0;
	var edad = 0;
	var menorEdad = 100;
	var sexoMenorEdad;
	var acumuladorEdades = 0;
	var promedioEdades;
	var contadorAprobados = 0;
	var contadorPares = 0;
	var contadorImpares = 0;
	var contadorDeCeros = 0;
	

	while(continuar!="no")
	{
		alumnos = prompt("Ingrese nombre");
		contadorDeAlumnos++;
		
		nota = prompt("Ingrese nota del alumno "+ alumnos);
		nota = parseInt(nota);
		
		while(nota>10 || nota<0)
		{
			nota = prompt("Reingrese nota");
			nota = parseInt(nota);
		}
		acumuladorDeNota = nota+acumuladorDeNota;

		sexo = prompt("Ingrese sexo 'f'/'m'");

		while(sexo!='f' && sexo!='m')
		{
			sexo = prompt("Reingrese sexo 'f'/'m'");
		}

		edad = prompt("Ingrese edad");
		edad = parseInt(edad);

		while(edad>100 || edad<0)
		{
			edad = prompt("Reingrese edad");
			edad = parseInt(edad);
		}

		if (sexo=='f')
		{
			contadorDeMujeres++
		}
		else
		{
			contadorDeHombre++;
		}

		if (nota<4 && sexo=='m')
		{
			hombresDesaprobados++;
		}

		

		if (nota>mejorNota)
		{
			nombreMejorNota=alumnos;
			mejorNota = nota;
		}

		if (sexo=='f')
		{
			acumuladorNotaMujeres = nota+acumuladorNotaMujeres;
			acumuladorMujeres++;
		}

		if (edad<menorEdad)
		{
			menorEdad = edad;
			sexoMenorEdad = sexo;

		}

		if (nota>3)
		{
			acumuladorEdades = edad+acumuladorEdades;
			contadorAprobados++;
		}

		if (nota == 0)
		{
			contadorDeCeros++;
		}
		else
		{
			if (nota%2==0)
			{
				contadorPares++;
			}
			else
			{
				contadorImpares++;
			}
		}

		continuar = prompt("No para seguir");
	}

	promedio = acumuladorDeNota/contadorDeAlumnos;
	promedioNotasMujeres = acumuladorNotaMujeres/acumuladorMujeres;
	promedioEdades = acumuladorEdades/contadorAprobados;

	document.write("Cantidad de alumnos: "+contadorDeAlumnos+"<br>");
	document.write("Promedio de notas: "+promedio+"<br>");
	document.write("cantidad de hombres: "+contadorDeHombre+"<br>");
	document.write("cantidad de mujeres: "+contadorDeMujeres+"<br>");
	document.write("cantidad de hombre desaprobados: "+hombresDesaprobados+"<br>");
	document.write("Nombre de mejor nota: "+nombreMejorNota+"<br>");
	document.write("Promedio nota mujeres: "+promedioNotasMujeres+"<br>");
	document.write("Sexo del menor de edad: "+sexoMenorEdad+"<br>");
	document.write("Promedio de edad de los que aprobaron: "+promedioEdades+"<br>");
	document.write("Cantidad de notas pares: "+contadorPares+"<br>");
	document.write("Cantidad de notas impares: "+contadorImpares+"<br>");
	
}
