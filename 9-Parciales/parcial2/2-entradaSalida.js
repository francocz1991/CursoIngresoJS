//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importeConIVA;

	importe = prompt("ingrese importe");
	importeConIVA = importe*1.21;

	alert(parseInt(importeConIVA));
}

