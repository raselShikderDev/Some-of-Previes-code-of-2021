//creating a image slider
//
var photos = ["img/images1.jpeg","img/images2.jpeg","img/images3.jpeg","img/images4.jpeg"];
var element = document.querySelector("img");
var count = 0

function nextButton() {
	count++;
	
	if(count >= photos.length){
	count = 0
	element.src = photos[0]
	}
	
	else{
	element.src = photos[count]
	}
}

function prevButton() {
		count--
			if(count < 0){
		count = photos.length - 1
			element.src = photos[count]
		}
		else{
			element.src = photos[count]
		}
}

