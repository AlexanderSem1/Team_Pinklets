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

    if (x[0].style.display === "block") {
        x[0].style.display = "none";
        y.style.transform = "rotate(0deg)";
		y.style.color = "black";
        
    } else {
        x[0].style.display = "block";
        y.style.transform = "rotate(180deg)";
		 y.style.color = "#FF5F5F";
        y.style.transition = "0.5s";
    }
}
function myFunction2() {
    var x = document.getElementsByClassName("information");
    var y = document.getElementById("img2");
    if (x[1].style.display === "block") {
        x[1].style.display = "none";
        y.style.transform = "rotate(0deg)";
		y.style.color = "black";
        
    } else {
        x[1].style.display = "block";
        y.style.transform = "rotate(180deg)";
		 y.style.color = "#FF5F5F";
        y.style.transition = "0.5s";
    }
}

function myFunction3() {
    var x = document.getElementsByClassName("information");
    var y = document.getElementById("img3");
    if (x[2].style.display === "block") {
        x[2].style.display = "none";
        y.style.transform = "rotate(0deg)";
		y.style.color = "black";
        
    } else {
        x[2].style.display = "block";
        y.style.transform = "rotate(180deg)";
		 y.style.color = "#FF5F5F";
        y.style.transition = "0.5s";
    }
}

function myFunction4() {
    var x = document.getElementsByClassName("information");
    var y = document.getElementById("img4");
    if (x[3].style.display === "block") {
        x[3].style.display = "none";
        y.style.transform = "rotate(0deg)";
		y.style.color = "black";
        
    } else {
        x[3].style.display = "block";
        y.style.transform = "rotate(180deg)";
		 y.style.color = "#FF5F5F";
        y.style.transition = "0.5s";
    }
}
function myFunction5() {
    var x = document.getElementsByClassName("information");
    var y = document.getElementById("img5");
    if (x[4].style.display === "block") {
        x[4].style.display = "none";
        y.style.transform = "rotate(0deg)";
		y.style.color = "black";
        
    } else {
        x[4].style.display = "block";
        y.style.transform = "rotate(180deg)";
		 y.style.color = "#FF5F5F";
        y.style.transition = "0.5s";
    }
}

function myFunction6() {
    var x = document.getElementsByClassName("information");
    var y = document.getElementById("img6");
    if (x[5].style.display === "block") {
        x[5].style.display = "none";
        y.style.transform = "rotate(0deg)";
		y.style.color = "black";
        
    } else {
        x[5].style.display = "block";
        y.style.transform = "rotate(180deg)";
		 y.style.color = "#FF5F5F";
        y.style.transition = "0.5s";
    }
}

function myFunction7() {
    var x = document.getElementsByClassName("information");
    var y = document.getElementById("img7");
    if (x[6].style.display === "block") {
        x[6].style.display = "none";
        y.style.transform = "rotate(0deg)";
		y.style.color = "black";
        
    } else {
        x[6].style.display = "block";
        y.style.transform = "rotate(180deg)";
		 y.style.color = "#FF5F5F";
        y.style.transition = "0.5s";
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


        function hoverOff() {
            var x = document.getElementById("nyhetH");
            var y = document.getElementById("nyhetImg");
            if (x.style.color === "black") {
                x.style.color = "#FF5F5F";
                y.style.opacity = "0.7";
                
            } else {
                x.style.color = "black";
                y.style.opacity = "1";
                x.style.textDecoration = "none";
              
            }
        }
        
        function hoverEffect()  {
            var x = document.getElementById("nyhetH");
            var y = document.getElementById("nyhetImg");
            if (x.style.color === "#FF5F5F") {
                x.style.color = "black";
                x.style.transition = "0.5s";
                y.style.opacity = "1";
                y.style.transition = "0.5s";
            } else {
                x.style.color = "#FF5F5F";
                y.style.opacity = "0.7";
                x.style.transition = "0.5s";
                y.style.transition = "0.5s";
                x.style.textDecoration = "underline";
              
            }
        }

function hoverOff1() {
    var x = document.getElementById("nyhetH1");
    var y = document.getElementById("nyhetImg1");
    if (x.style.color === "black") {
        x.style.color = "#FF5F5F";
        y.style.opacity = "0.7";
        
    } else {
        x.style.color = "black";
        y.style.opacity = "1";
        x.style.textDecoration = "none";
      
    }
}

function hoverEffect1()  {
    var x = document.getElementById("nyhetH1");
    var y = document.getElementById("nyhetImg1");
    if (x.style.color === "#FF5F5F") {
        x.style.color = "black";
        x.style.transition = "0.5s";
        y.style.opacity = "1";
        y.style.transition = "0.5s";
    } else {
        x.style.color = "#FF5F5F";
        y.style.opacity = "0.7";
        x.style.transition = "0.5s";
        y.style.transition = "0.5s";
        x.style.textDecoration = "underline";
      
    }
}

function hoverOff2() {
    var x = document.getElementById("nyhetH2");
    var y = document.getElementById("nyhetImg2");
    if (x.style.color === "black") {
        x.style.color = "#FF5F5F";
        y.style.opacity = "0.7";
        
    } else {
        x.style.color = "black";
        y.style.opacity = "1";
        x.style.textDecoration = "none";
      
    }
}

function hoverEffect2()  {
    var x = document.getElementById("nyhetH2");
    var y = document.getElementById("nyhetImg2");
    if (x.style.color === "#FF5F5F") {
        x.style.color = "black";
        x.style.transition = "0.5s";
        y.style.opacity = "1";
        y.style.transition = "0.5s";
    } else {
        x.style.color = "#FF5F5F";
        y.style.opacity = "0.7";
        x.style.transition = "0.5s";
        y.style.transition = "0.5s";
        x.style.textDecoration = "underline";
      
    }
}

// Merethes kode slutt 