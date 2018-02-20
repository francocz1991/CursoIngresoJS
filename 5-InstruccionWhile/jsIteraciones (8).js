function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';

	while(respuesta =="si")
	{
		numero=prompt("Ingese numero");
		numero = parseInt(numero);
		contador++;
		if (numero>0){
			positivo = positivo+numero;
		}
		else
		{
			if (numero<0)
			{
				negativo = negativo*numero;
			}
		}
		respuesta=prompt("Para seguir ingrese 'si'");

	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN