/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaFahrenheit;
	var temperaturaCentígrados;
	temperaturaFahrenheit = document.getElementById('Temperatura').value;
	temperaturaCentígrados = (temperaturaFahrenheit-32)*(5/9);
	alert(temperaturaFahrenheit+" son "+temperaturaCentígrados+" centigrados");
}

function CentigradosFahrenheit () 
{
	var temperaturaFahrenheit;
	var temperaturaCentígrados;
	temperaturaCentígrados = document.getElementById('Temperatura').value;
	temperaturaFahrenheit = (temperaturaCentígrados*(9/5))+32;
	alert(temperaturaCentígrados+" son "+temperaturaFahrenheit+" Fahrenheit");
}
