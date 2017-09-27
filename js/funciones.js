//funciones
function Mostrardias(fx,fy){
	//var fecha1= "12/06/2008";
	var fecha1=fx.value;
	var dia1= fecha1.substr(0,2);
	var mes1= fecha1.substr(3,2);
	var anyo1= fecha1.substr(6);
	
	//var fecha2= "29/06/2008";
	var fecha2=fy.value;
	var dia2= fecha2.substr(0,2);
	var mes2= fecha2.substr(3,2);
	var anyo2= fecha2.substr(6);

	var nuevafecha1= new Date(anyo1+","+mes1+","+dia1);
	var nuevafecha2= new Date(anyo2+","+mes2+","+dia2);

	var Dif= nuevafecha2.getTime() - nuevafecha1.getTime();
	var dias= Math.floor(Dif/(1000*24*60*60));
	
	document.getElementById('diitas').innerHTML = dias;
	var mora = document.getElementById("monto").value;

	if (dias>=0 && dias<=15){
document.getElementById('time').innerHTML = "Justo a tiempo"
document.getElementById('totalMonto').innerHTML =(parseInt(mora*0.03)+parseInt(mora));
document.getElementById('time').style.color='#0026ff';
document.getElementById('recargo').innerHTML ="3% "

return 0;
	}
	else if (dias>=16 && dias<=30){
document.getElementById('time').innerHTML = "tiempo recargado"
document.getElementById('totalMonto').innerHTML =(parseInt(mora*0.07)+parseInt(mora));
document.getElementById('time').style.color='#ecfb00';
document.getElementById('recargo').innerHTML ="7% "
return 0;
	}
else if (dias>=31 && dias<=60){
document.getElementById('time').innerHTML = "tiempo sobrepasado"
document.getElementById('totalMonto').innerHTML =(parseInt(mora*0.25)+parseInt(mora));
document.getElementById('time').style.color='#ff6800';
document.getElementById('recargo').innerHTML ="25% "
return 0;
	}
else if (dias>=61 && dias<=90){
document.getElementById('time').innerHTML = "tiempo alto"
document.getElementById('totalMonto').innerHTML =(parseInt(mora*0.40)+parseInt(mora));
document.getElementById('time').style.color='#a55218';
document.getElementById('recargo').innerHTML ="40% "
return 0;
	}
else if (dias>=91){
document.getElementById('time').innerHTML = "tiempo elevado"
document.getElementById('totalMonto').innerHTML =(parseInt(mora*0.60)+parseInt(mora));
document.getElementById('time').style.color='#ff0000';
document.getElementById('recargo').innerHTML ="60% "
return 0;
	}

}

function color(){
	var radiovalor = document.getElementsByName("radSize");

	if(radiovalor[0].checked==true){
		document.getElementById('eti').style.color='#0b3df2';
	}
	if(radiovalor[1].checked==true){
		document.getElementById('eti').style.color='#f51313';
	}
	if(radiovalor[2].checked==true){
		document.getElementById('eti').style.color='#0fa43e';
	}

}
function validarEntero(valor){
	//intentar converitr entero
	//si es un número entonces no lo afecta,
	//pero sino entonces lo convierte
	valor = parseInt(valor);
	//comprobar si es un valor numérico
	if(isNaN(valor)){
		//si esto es verdad (no es un número) entonces
		//devuelva el valor cadena vacía
		return "";
	}
	else{
		//En caso contrario (Si era número) devualva el valor
		return valor;
	}
}
function MostrarFecha(){
	var fecha;
	var meses=new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	fecha=new Date();
	var cadena=fecha.getDate()+'/'+meses[fecha.getMonth()]+'/'+fecha.getFullYear();
	document.getElementById('etiqueta').innerHTML = cadena;
	var fecha1=document.getElementById("f1");
	alert(fecha1);
}
function valida_envia(){
	//validar el nombre
	if(document.fvalida.nombre.value.length==0){
		alert("Tiene que escribir su nombre");
		document.fvalida.nombre.focus() ;
		return 0;
	}
	//Validar la edad, tiene que ser número entero mayor que 18
	edad = document.fvalida.edad.value;
	edad = validarEntero(edad);
	document.fvalida.edad.value=edad;
	if(edad==""){
		alert("Tiene que introducir un número entero en su edad.");
		document.fvalida.edad.focus();
		return 0;
	}
	else{
		if(edad<18){
			alert("Debe escribir una edad mayor o igual a 18 años.");
			return 0;
		}
	}
	//Validar en interés
	if(document.fvalida.interes.selectedIndex==0){
		alert("Debe seleccionar un motivo de su contacto!");
		document.fvalida.interes.focus();
		return 0;
	}
	alert("Muchas gracias por enviar el formulario");
	MostrarFecha();
	//Mostrardias();
}