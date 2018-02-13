function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota = Math.random()*11;
	nota = parseInt(nota);

	if(nota>8)
	{
		alert("Tu nota es: "+nota+". EXCELENTE");
	}
	else
	{
		if(nota>3)
		{
			alert("Tu nota es: "+nota+". APROBÓ");
		}
		else
		{
			alert("Tu nota es: "+nota+". Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN