function Mostrar()
{
	var importe;

	importe = prompt("Ingrese importe");
	importe = parseInt(importe);

	while(importe<1)
	{
		importe = prompt("Reingrese importe");
	}
}
