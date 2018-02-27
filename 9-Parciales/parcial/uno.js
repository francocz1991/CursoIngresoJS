
/*altura pro prompt de un triangulo equilatero, 
informar perimetro y superficie*/

function Mostrar()
{
	/*var base;
	var perimetro;

	base = document.getElementById('laBase').value;

	base = parseInt(base);
	
	perimetro = base*4;
	
	alert("El perimetro es: "+perimetro);*/

	var altura;
	var lado;
	var perimetro;
	var superficie;
	
	altura = prompt("Ingrese altura");
	altura = parseInt(altura);

	lado = ((2*altura)*Math.sqrt(3))/4;
	perimetro = lado * 3;
	perimetro = parseInt(superficie);

	


	alert("perimetro: "+perimetro);
	alert("superficie: "+superficie);

}
