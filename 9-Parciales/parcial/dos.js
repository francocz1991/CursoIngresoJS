function Mostrar()
{
 	var importe;
 	var importeFinal;

 	importe = prompt("Ingrese el precio de producto","$$$"); 

 	importeFinal = importe*1.21;

 	document.getElementById("importeFinal").value = parseInt(importeFinal);
}
