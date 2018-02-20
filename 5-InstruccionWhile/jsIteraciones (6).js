function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
	{
		//contador++;
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);
		
		contador++;
		acumulador=	acumulador+numero;	
	}

	promedio = acumulador/contador;
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN