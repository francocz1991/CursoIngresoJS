var numero;
var contadorDeDivisores = 0;

function Mostrar()
{
	numero = prompt("Ingrese numero");
	
	for(contador = 1; contador<numero; contador++)
	{
		if (numero%contador==0)
		{
			document.write(contador+"<br>");
			contadorDeDivisores++;
		}
	}

	document.write("Cantidad de divisores del numero "+numero+" es: "+contadorDeDivisores);

}//FIN DE LA FUNCIÓN