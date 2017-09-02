$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
	//below code if we are not using toggleClass
	//if li is gray
	/*console.log($(this).css("color"));
	if ($(this).css("color") === "rgb(128, 128, 128)"){
		// turn it black
		$(this).css({
		"color": "black",
		"textDecoration":"none"
	});
	}
	else{
		$(this).css({
		"color": "gray",
		"textDecoration":"line-through"
	});
	}*/
	
});
$("ul").on("click", "span", function(event){
	//this "this" is for span 
	$(this).parent().fadeOut(500, function(){
		// this this is for li we are refering parent here
		$(this).remove()
	});
	//stopPropagation stops the bubbling up
	event.stopPropagation();
	});
$("input[type='text']").keypress(function (event){
	if(event.which === 13){
		var toText = $(this).val();
		$(this).val("");
	$("ul").append("<li><span><i class='fa fa-trash''></i> </span>"+ toText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
