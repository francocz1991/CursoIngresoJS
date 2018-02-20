function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta=='si')
	{
		numero=prompt("Ingese numero");
		numero = parseInt(numero);
		contador++;
		acumulador = acumulador+numero;
		respuesta=prompt("Para seguir ingrese 'si'");
	}



	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN