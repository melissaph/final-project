var flag = true

$(".mobileNav").click(function(){
	$(".hamburger").slideToggle(500)

	if(flag == true){
	$(".mobileNav").html("-")
		flag = false
	}else{
		$(".mobileNav").html("+")
		flag = true
	}
})
