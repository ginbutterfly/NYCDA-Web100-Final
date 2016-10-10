$(document).ready(function(){


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
	
});

