let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// current slide pe dot color nhi ho rha
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}
// .........................................................................................
function submitFunction(){
  var category = document.getElementById("category");
  var categoryValue= category.options[category.selectedIndex].text;
  console.log(categoryValue);

  var model = document.getElementById("model");
  var modelValue= model.options[model.selectedIndex].text;
  console.log(modelValue);

  var serialNumber = document.getElementById("serialNumber");
  var serialValue=serialNumber.value;
  console.log(serialValue);

  var date = document.getElementById("date");
  var dateValue=date.value;
  console.log(dateValue);
  

  var file=document.getElementById("file");
  var fileValue=file.value;
  console.log(fileValue);







}
