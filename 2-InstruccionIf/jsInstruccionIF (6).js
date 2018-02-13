function Mostrar()
{
//tomo la edad  

	var edad;
	edad = document.getElementById('edad').value;

	if (edad>17) 
	{
		alert('Eres mayor de edad');
	}
	else
	{
		if (edad<13) 
		{
			alert('Eres niño');
		}
		else
		{
			alert('Eres adolecente');
		}
	}



}//FIN DE LA FUNCIÓN