$(document).ready(function(){

	$(".red1, .red2, .red3, .red4, .red5").hide();

	$( "p" ).hover(function() {
	  		$( this ).css( "color", "#8D909B" );
	  	}, function() {
	  		$( this ).css( "color", "#2d4654" );
	});


	$( "#welcome" ).hover(function() {
	  		$( this ).css( {
	  			"border-style": "solid",
	  			"border-color": "#eaf2ef",
	  			"background-color": "#2d4654",
	  		});
	  	}, function() {
	  		$( this ).css( {
	  			"border-style": "none",
	  			"background-color": "#8d909b", 
	  		});
	});


	$( "#student" ).hover(function() {
	  		$( this ).css( {
	  			"border-style": "solid",
	  			"border-color": "#87bcde",
	  			"background-color": "#2d4654",
	  		});
	  	}, function() {
	  		$( this ).css( {
	  			"border-style": "none",
	  			"background-color": "#8d909b", 
	  		});
	});

	$( "#see-above" ).hover(function() {
	  		$( this ).css( {
	  			"border-style": "solid",
	  			"border-color": "#eaf2ef",
	  			"background-color": "#2d4654",
	  		});
	  	}, function() {
	  		$( this ).css( {
	  			"border-style": "none",
	  			"background-color": "#8d909b", 
	  		});
	});


	$( "#contact" ).hover(function() {
	  		$( this ).css( {
	  			"border-style": "solid",
	  			"border-color": "#87bcde",
	  			"background-color": "#2d4654",
	  		});
	  	}, function() {
	  		$( this ).css( {
	  			"border-style": "none",
	  			"background-color": "#8d909b", 
	  		});
	});


	$( "#main-heading2" ).hover(function() {
	  		$( this ).css( "color", "red" );
	  	}, function() {
	  		$( this ).css( "color", "#2d4654" );
	});

	$( ".red1, .red2, .red3, .red4, .red5" ).hover(function() {
	  		$( this ).css( "color", "red" );
	  	}, function() {
	  		$( this ).css( "color", "#2d4654" );
	});

	$("#head-drop1").click(function(){
      $(".red1").slideToggle("slow");
   });

   $("#head-drop2").click(function(){
      $(".red2").slideToggle("slow");
   });

   $("#head-drop3").click(function(){
      $(".red3").slideToggle("slow");
   });

   $("#head-drop4").click(function(){
      $(".red4").slideToggle("slow");
   });

   $("#head-drop5").click(function(){
      $(".red5").slideToggle("slow");
   });


});

