

// Grab the input

document.querySelector(".js-go").addEventListener('click', function(){				//listens to button
	var input = document.querySelector("input").value;								//grabs input value
	pushToDom(input);																//portals input to be used outside of scope
	var container = document.querySelector(".js-container");						//selects the js-container where the giphys will display
	container.innerHTML = " ";														//clears the container incase giphys are already showing
});

document.querySelector(".js-userinput").addEventListener('keyup', function(e){		//selects and listens the text box
	var input = document.querySelector("input").value;								//grabs input value
	if(e.which === 13){																//if the key enter is pressed
		pushToDom(input);															//portals input to be used outside of scope
		var container = document.querySelector(".js-container");					//selects the js-container where the giphys will display
	container.innerHTML = " ";														//clears the container incase giphys are already showing
	}
	
});





//gets data from api for funny cats, what is showing on load

var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";	//url for the giphy api with funny cats already requested

var GiphyAJAXCall = new XMLHttpRequest();											//AJAX request
GiphyAJAXCall.open( 'GET', url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function(e){									

	var data = e.target.response;
	pushData(data);																	//portals data out of scope to the function


});

//takes the user input and searches it on the giphy site and returns data
function pushToDom(input){
	var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC";

	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url);
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load', function(e){

	var data = e.target.response;
	pushData(data);


});
	
}

// show me the gifs

function pushData(data) {			
	var response = JSON.parse(data);											//converts data so javscript can read it

	var imagesURLS = response.data;												//grabs the url of each giphy in an array
	

	imagesURLS.forEach(function(image){											//interates through each image
		src= image.images.fixed_height.url;										//stores the individual image url
	
		var container = document.querySelector(".js-container");				//displays the giphy
		container.innerHTML = container.innerHTML +  "<img src = \"" + src + "\";>"
	});




}
