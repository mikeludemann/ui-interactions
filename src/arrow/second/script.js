var icon = document.getElementById("arrow");

icon.addEventListener("click", function(){

	if(icon.classList.contains("is-active")){

		icon.classList.remove("is-active");

	} else {

		icon.classList.add("is-active");

	}

});
