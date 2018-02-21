function Mostrar()
{

	/*var repetciones = prompt("ingrese el número de repeticiones");
	repetciones = parseInt(repetciones);
	var contador;

	for ( contador = 1; contador <= repetciones; contador++)
	{
		document.write(contador+") Hola UTN FRA <br>");
	}*/

	var numeroRamdon;
	var contador0=0;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;

	for(contador=0;contador<100;contador++)
	{
		numeroRamdon = Math.floor(Math.random()*10);
		document.write(numeroRamdon+"<br>");	

		switch(numeroRamdon)
		{
			case 0:
				contador0++;
				break;

			case 1:
				contador1++;
				break;

			case 2:
				contador2++;
				break;

			case 3:
				contador3++;
				break;

			case 4:
				contador4++;
				break;

			case 5:
				contador5++;
				break;

			case 6:
				contador6++;
				break;

			case 7:
				var porcentaje = (contador7/contador)*100;
				if (porcentaje>7)
				{
					contador--;
					continue;
				}
				contador7++;
				break;

			case 8:
				contador8++;
				break;

			case 9:
				contador9++;
				break;
		}
	}

	document.write("Cantidad de 0:"+contador0+"<br>");
	document.write("Cantidad de 1:"+contador1+"<br>");
	document.write("Cantidad de 2:"+contador2+"<br>");
	document.write("Cantidad de 3:"+contador3+"<br>");
	document.write("Cantidad de 4:"+contador4+"<br>");
	document.write("Cantidad de 5:"+contador5+"<br>");
	document.write("Cantidad de 6:"+contador6+"<br>");
	document.write("Cantidad de 7:"+contador7+"<br>");
	document.write("Cantidad de 8:"+contador8+"<br>");
	document.write("Cantidad de 9:"+contador9+"<br>");





}//FIN DE LA FUNCIÓN