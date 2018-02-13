function Mostrar()
{
	var importe;
	var importeFinal;

	importe = prompt('Ingrese un importe','Importe aqui');
	importeFinal = importe*0.75;
	document.getElementById('importeFinal').value = importeFinal;

}
