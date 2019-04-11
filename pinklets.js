// Alex Code Start 

function noroffOslo() {
	let location = "Noroff Oslo"
	document.getElementById('gmap_canvas').src = "https://maps.google.com/maps?q=" + location + "&t=&z=12&ie=UTF8&iwloc=&output=embed"
}

function noroffStavanger() {
	let location = "Noroff Stavanger"
	document.getElementById('gmap_canvas').src = "https://maps.google.com/maps?q=" + location + "&t=&z=12&ie=UTF8&iwloc=&output=embed"
}

function noroffBergen() {
	let location = "Noroff Bergen"
	document.getElementById('gmap_canvas').src = "https://maps.google.com/maps?q=" + location + "&t=&z=12&ie=UTF8&iwloc=&output=embed"
}

function noroffKristiansand() {
	let location ="Noroff Kristiansand"
	document.getElementById('gmap_canvas').src = "https://maps.google.com/maps?q=" + location + "&t=&z=12&ie=UTF8&iwloc=&output=embed"
}

//  Alex Code End 
        
//  Benni Code Start 
//  Benni Code End 
        
//  Faisal Code Start 
function myFunction1() {
    var x = document.getElementsByClassName("information");
    var y = document.getElementById("img1");

    if (x[0].style.display === "none") {
        x[0].style.display = "block";
        y.style.transform = "rotate(180deg)";
		 y.style.color = "#FF5F5F";
        y.style.transition = "0.5s";
    } else {
        x[0].style.display = "none";
        y.style.transform = "rotate(0deg)";
		y.style.color = "black";
    }
}
function myFunction2() {
    var x = document.getElementsByClassName("information");
    var y = document.getElementById("img2");
    if (x[1].style.display === "none") {
        x[1].style.display = "block";
        y.style.transform = "rotate(180deg)";
		 y.style.color = "#FF5F5F";
        y.style.transition = "0.5s";
    } else {
        x[1].style.display = "none";
        y.style.transform = "rotate(0deg)";
		y.style.color = "black";
    }
}

function myFunction3() {
    var x = document.getElementsByClassName("information");
    var y = document.getElementById("img3");
    if (x[2].style.display === "none") {
        x[2].style.display = "block";
        y.style.transform = "rotate(180deg)";
		 y.style.color = "#FF5F5F";
        y.style.transition = "0.5s";
    } else {
        x[2].style.display = "none";
        y.style.transform = "rotate(0deg)";
		y.style.color = "black";
    }
}

function myFunction4() {
    var x = document.getElementsByClassName("information");
    var y = document.getElementById("img4");
    if (x[3].style.display === "none") {
        x[3].style.display = "block";
        y.style.transform = "rotate(180deg)";
		 y.style.color = "#FF5F5F";
        y.style.transition = "0.5s";
    } else {
        x[3].style.display = "none";
        y.style.transform = "rotate(0deg)";
		y.style.color = "black";
    }
}
function myFunction5() {
    var x = document.getElementsByClassName("information");
    var y = document.getElementById("img5");
    if (x[4].style.display === "none") {
        x[4].style.display = "block";
        y.style.transform = "rotate(180deg)";
		 y.style.color = "#FF5F5F";
        y.style.transition = "0.5s";
    } else {
        x[4].style.display = "none";
        y.style.transform = "rotate(0deg)";
		 y.style.color = "black";
    }
}

function myFunction6() {
    var x = document.getElementsByClassName("information");
    var y = document.getElementById("img6");
    if (x[5].style.display === "none") {
        x[5].style.display = "block";
        y.style.transform = "rotate(180deg)";
		 y.style.color = "#FF5F5F";
        y.style.transition = "0.5s";
    } else {
        x[5].style.display = "none";
        y.style.transform = "rotate(0deg)";
		y.style.color = "black";
    }
}

function myFunction7() {
    var x = document.getElementsByClassName("information");
    var y = document.getElementById("img7");
    if (x[6].style.display === "none") {
        x[6].style.display = "block";
        y.style.transform = "rotate(180deg)";
        y.style.color = "#FF5F5F";
        y.style.transition = "0.5s";
    } else {
        x[6].style.display = "none";
        y.style.transform = "rotate(0deg)";

        y.style.color = "black";
    }
}


// slider start

//  Faisal Code End 
        
// Merethes kode start 

var slide_index = 1;  
        displaySlides(slide_index);  
  
        function nextSlide(i) {  
            displaySlides(slide_index += i);  
        }  
  
        function currentSlide(i) {  
            displaySlides(slide_index = i);  
        }  
  
        function displaySlides(i) {  
            var i;  
            var slides = document.getElementsByClassName("sliderImg");  
            if (i > slides.length){ 
                slide_index = 1 }  

            if (i < 1){ 
                slide_index = slides.length }  
                
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display = "block";  
        }  

// Merethes kode slutt 