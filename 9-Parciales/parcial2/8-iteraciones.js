//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*se ingresa hasta que el usuario quiera: el nombre de un animal,
el peso del mismo(validar que sea mayor a o) y la temperatura del habitat de este animal(validar entre -40 y 40),
informar la cantidad de temperaturas pares, la cantidad de temperaturas impares, el nombre del animal mas pesado,
el nombre del animal menos pesado, la cantidad de animales que viven en habitat menores a o inclusive,
el promedio del peso de todos los animales, la temperatura maxima y minima.*/
function Mostrar()
{
	var salir="";
	var animal;
	var peso;
	var temperatura;
	var contadorTemperaturaPar = 0; 
	var contadorTemperaturaImpar = 0; 
	var contador = 0;
	var pesoAnimalMasPesado = 0;
	var pesoAnimalMenosPesado = 0;
	var animalMasPesado;
	var animalMenosPesado;
	var animalHabitat = 0;
	var temperaturaMaxima = 0;
	var temperaturaMinima = 0;
	var promedio;
	var acumuladorPeso =0;

	while(salir!="no")
	{
		animal=prompt("Ingrese animal");

		peso=prompt("Ingrese peso del animal");
		peso=parseInt(peso);
		while(peso<0 || isNaN(peso))
		{
			peso=prompt("Reingrese peso del animal");
			peso=parseInt(peso);
		}

		temperatura=prompt("Ingrese temperatura");
		temperatura=parseInt(temperatura);
		while(temperatura<-40 || temperatura>40 || isNaN(temperatura))
		{
			temperatura=prompt("Reingrese temperatura");
			temperatura=parseInt(temperatura);
		}

		if (temperatura!=0 && temperatura%2==0)
		{
			contadorTemperaturaPar++;
		}
		else
		{
			if (temperatura!=0 && temperatura%2!=0)
			{
				contadorTemperaturaImpar++;	
			}			
		}

		if (contador==0)
		{
			pesoAnimalMasPesado = peso;
			pesoAnimalMenosPesado = peso;
			animalMasPesado = animal; 
			animalMenosPesado=animal;
		}
		{
			if (peso>pesoAnimalMasPesado)
			{
				pesoAnimalMasPesado=peso;
				animalMasPesado = animal;
			}
			else
			{
				pesoAnimalMenosPesado=peso;
				animalMenosPesado=animal;
			}
		}

		if (temperatura<0)
		{
			animalHabitat++;
		}

		if (contador==0)
		{
			temperaturaMaxima=temperatura;
			temperaturaMinima=temperatura;
		}
		else
		{
			if (temperatura>temperaturaMaxima)
			{
				temperaturaMaxima=temperatura;
			}
			else
			{
				if (temperatura<temperaturaMinima)
				{
					temperaturaMinima=temperatura;
				}
			}
		}

		acumuladorPeso = acumuladorPeso+peso;
		contador++;
		salir=prompt("'no' para salir");
	}

	promedio=acumuladorPeso/contador;

	document.write("Temperaturas pares: "+contadorTemperaturaPar+"<br>");
	document.write("temperaturas impares: "+contadorTemperaturaImpar+"<br>");
	document.write("Animal mas pesado: "+animalMasPesado+"<br>");
	document.write("Animal menos pesado: "+animalMenosPesado+"<br>");
	document.write("Animales que viven en habitat iguales o menores a CERO: "+animalHabitat+"<br>");
	document.write("Promedio de pesos: "+promedio+"<br>");
	document.write("Temperatura maxima: "+temperaturaMaxima+"<br>");
	document.write("Temperatura minima: "+temperaturaMinima+"<br>");

}	

	

