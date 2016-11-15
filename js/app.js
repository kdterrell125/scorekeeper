// Make sure the HTML loads before any javascript occurs
$("document").ready(function(){
	var score = 0;
	$("#increase-5").on("click", function(){
		score += 5;
		$("#score").html(score);
	});
	$("#decrease-5").on("click", function(){
		score -= 5;
		$("#score").html(score);
	});
	$("#submit-custom-score").on("click", function(){
		$("text").val();
	});
});

// sqlzoo.net