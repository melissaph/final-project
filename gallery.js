$("#cat1").on("click", function(){
	$("#landscapes").css("display", "inline-block")
	$("#portaits, #religion, #abstracts").css("display", "none")
})

$("#cat2").on("click", function(){
	$("#portraits").css("display", "inline-block")
	$("#landscapes, #religion, #abstracts").css("display", "none")
})

$("#cat3").on("click", function(){
	$("#religion").css("display", "inline-block")
	$("#portaits, #landscapes, #abstracts").css("display", "none")
})

$("#cat4").on("click", function(){
	$("#abstracts").css("display", "inline-block")
	$("#portaits, #religion, #landscapes").css("display", "none")
})


this.onclick = function(e){
	if(e.target.getAttribute("src")){
		$("#box").fadeToggle()
		var address = e.target.getAttribute("src")
		$("#pic2").attr("src", address)
}}
