// Alex Code Start 
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