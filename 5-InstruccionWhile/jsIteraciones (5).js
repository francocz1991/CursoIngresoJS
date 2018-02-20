function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	while(sexo!="f" && sexo !="m")
	//while(!(sexo=="f" || sexo=="m"))
	{
		sexo = prompt("Ingrese letra nuevamente");
	}

	if(sexo=="f")
	{
		sexo ="Femenino";
	}
	else
	{
		if (sexo=="m")
		{
			sexo ="Masculino";
		}
	} 

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN