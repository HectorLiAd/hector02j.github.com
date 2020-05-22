let salir = document.querySelectorAll(".close");

salir.forEach(function(close){
	close.addEventListener('click', function(evt){
		//evt.preventDefault();
		evt.preventDefault();

		let content = document.querySelector(".content");
		//Eliminar clases
		content.classList.remove("fadeInDown");
		content.classList.remove("animated");
		//Agregar clases
		content.classList.add("fadeOutUp");
		content.classList.add("animated");

		setTimeout(function(){
			location.href = "../index.html";	
		}, 600)

		/*setInterval(function(){
			location.href = "../index.html";	
		}, 1000)
		*/

		return false;
	});
})

/*let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){

	//Eliminar la clase
	icono.classList.remove("fa-star");
	//Agregar una clase
	icono.classList.add("fa-star");
})*/