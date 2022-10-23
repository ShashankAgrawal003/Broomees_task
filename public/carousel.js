let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

// current slide pe dot color nhi ho rha
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  
  
}

function onSubmit() {
  event.preventDefault();
  var category = document.getElementById("category");
  var categoryValue = category.options[category.selectedIndex].text;

  var model = document.getElementById("model");
  var modelValue = model.options[model.selectedIndex].text;

  var serialNumber = document.getElementById("serialNumber");
  var serialValue = serialNumber.value;

  var date = document.getElementById("date");
  var dateValue = date.value;

  var file = document.getElementById("file");
  var fileValue = file.value;
  if (categoryValue === "Select Category") {
    categoryValue = "";
  }
  if (modelValue === "Select Model") {
    modelValue = "";
  }

  const data = {
    category: categoryValue,
    model: modelValue,
    serialNumber: serialValue,
    date: dateValue,
    file: fileValue,
  };

  if (serialValue === "") {
    serialNumber.style.borderColor="red";
    
  } 
  else {
    $.ajax({
      url: "/submit",
      type: "POST",
      data: data,
      dataType: "json",
      success: function () {
        alert("Data inserted successfully!!!");
        location.reload();
      },
      error: function () {
        alert("Error Occurred!!!");
      },
    });
  }
}
