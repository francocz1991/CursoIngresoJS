function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var numero;

	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);

		if (contador==1)
		{
			minimo=numero;
			maximo=numero;
		}
		else
		{
			if (numero>maximo)
			{
				maximo = numero;
			}
			if (numero<minimo)
			{
				minimo = numero;
			}
		}

		respuesta = prompt("Ingrese 'no' para terminar");
	
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;




}//FIN DE LA FUNCIÓN