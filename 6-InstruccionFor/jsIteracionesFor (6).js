
var numero;
var contadorDePares = 0;

function Mostrar()
{
	numero =  prompt("Ingrese numero");
	for(contador = 1; contador<numero; contador++)
	{
		if (contador%2==0)
		{
			document.write(contador+"<br>");
			contadorDePares++;
		}
		
	}
	document.write("cantidad de Pares: "+contadorDePares);

}//FIN DE LA FUNCIÓN

