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