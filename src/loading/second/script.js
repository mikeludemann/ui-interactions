var icon = document.getElementById("loading");

icon.addEventListener("click", function(){

	if(icon.classList.contains("is-active")){

		icon.classList.remove("is-active");

	} else {

		icon.classList.add("is-active");

	}

});
