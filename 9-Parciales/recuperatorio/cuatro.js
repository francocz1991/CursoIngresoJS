function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = prompt('Ingrese numero');
	numeroDos = prompt('ingrese numero');

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = numeroUno+numeroDos;

	if (suma>0)
	{
		document.write("<h1>Positivo</h1>");
	}
	else
	{
		if (suma<0)
		{
			document.write("<h1>Negativo</h1>");
		}
		else
		{
			document.write("<h1>Cero</h1>");
		}
	}
}
