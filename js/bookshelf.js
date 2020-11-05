$(function() {
		
	var $book_container = $( "#bookshelf-container" );
	var $book101 = $( "#book-101" );
	var $book102 = $( "#book-102" );
	var $book103 = $( "#book-103" );
	
	$book101
	.addClass("book-shape")
	.css ({
			"display": "inline-block",
			"width": ( 6 ) + "px",
			"height": "58px",
			"background-color": "#C0272D",
			"border": "1px solid #231F20",
			"position": "absolute",
			"top": (41.01 + 3) + "px",
			"left": "21px"
		});
	
	$book102
		.addClass("book-shape")
		.css ({
			"display": "inline-block",
			"width": ( 4 ) + "px",
			"height": "48px",
			"background-color": "#BCCBD3",
			"border": "1px solid #231F20",
			"position": "absolute",
			"top": (41.01 + 3 + 10) + "px",
			"left": (21 + 4 + 5) + "px"
		});
			
	$book103
		.addClass("book-shape")
		.css ({
			"display": "inline-block",
			"width": ( 12) + "px",
			"height": "62px",
			"background-color": "#E5E5E5",
			"border": "1px solid #231F20",
			"position": "absolute",
			"top": (40.01 ) + "px",
			"left": (21 + 14 + 2) + "px"
		});
		

	
	//$book_container.append($book_shape);
	
	console.log($("#bookshelf-container"));
	
	
});