function Mostrar()
{
//tomo la edad  
	var edad;
	edad =  document.getElementById('edad').value;

	/*if (edad>17 || edad<13) 
	{
		alert("No eres adolecente");
	}*/

	if (edad>17)
	{
		alert("No eres adolecente");
	}
	else
	{
		if (edad<13) 
		{
			alert("No eres adolecente");
		}
	}

}//FIN DE LA FUNCIÓN