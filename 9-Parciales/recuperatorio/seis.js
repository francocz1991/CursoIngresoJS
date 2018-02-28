function Mostrar()
{
	var peso;
	var contador = 0;
	var masPesado = 0;
	var menosPesado = 0;

	while(contador<50)
	{
		peso = prompt("Ingrese el peso en kilos");
		peso = parseInt(peso);
		
		while(peso<0)
		{
			peso = prompt("Reingrese el peso en kilos");
			peso = parseInt(peso);
		}

		if (contador==0)
		{
			masPesado = peso;
			menosPesado = peso;
		}
		else
		{
			if (peso>masPesado)
			{
				masPesado = peso;
			}
			else
			{
				menosPesado = peso;
			}
		}

		contador++;
	}

	alert("Mas pesado: "+masPesado);
	alert("Menos pesado: "+menosPesado);
}
