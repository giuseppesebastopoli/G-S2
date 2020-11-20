//Menu desplegable responsive. Para pantallas pequeñas.
$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});

});

//Añadir fecha actual a los articulos de publicacion.
window.onload=(function fechaJS(){
   var fecha = new Date();
   
   var month = new Array();
   month[0] = "Enero";
   month[1] = "Febrero";
   month[2] = "Marzo";
   month[3] = "Abril";
   month[4] = "Mayo";
   month[5] = "Junio";
   month[6] = "Julio";
   month[7] = "Agosto";
   month[8] = "Septiembre";
   month[9] = "Octubre";
   month[10] = "Noviembre";
   month[11] = "Diciembre";
   
   var elementoNodo = document.createElement("span");
   var contenidoNodo = document.createTextNode(fecha.getDate() + " " + month[fecha.getMonth()] + " " + fecha.getFullYear());
   
   elementoNodo.appendChild(contenidoNodo);
 
   var padreNodo = document.getElementsByTagName("time")[0].parentNode;
 
   var hijoNodo = document.getElementsByTagName("time")[0];
   
   padreNodo.replaceChild(elementoNodo, hijoNodo);
}());