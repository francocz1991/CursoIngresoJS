//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importeConIVA;
	
	importe = prompt('Ingrese importe');
	importeConIVA = importe*1.21;
	document.getElementById('importe').value = importeConIVA;
}

