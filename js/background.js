const images =[
	"0.jpeg",
	"1.jpeg",
	"2.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

function changeBack(){
	let my_style = document.createElement("style");
	my_style.innerHTML = "body{ background-image: url(" + '"img/' + chosenImage + '"'+ ");}"; 
	document.head.appendChild(my_style);
}

window.onload = function() {                         
              changeBack();
}