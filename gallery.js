$("#landscapes").on("click", function){
	$("#landscapes").css("display", "inline-block")
	$("#portaits, #religion, #abstracts").css("display", "none")
}

$("#portraits").on("click", function){
	$("#portraits").css("display", "inline-block")
	$("#landscapes, #religion, #abstracts").css("display", "none")
}

$("#religion").on("click", function){
	$("#religion").css("display", "inline-block")
	$("#portaits, #landscapes, #abstracts").css("display", "none")
}

$("abstracts").on("click", function){
	$("#abstracts").css("display", "inline-block")
	$("#portaits, #religion, #landscapes").css("display", "none")
}

