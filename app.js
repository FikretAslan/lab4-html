function greet() {
  let username = prompt("What is your name?");
  document.write("Hello " + username);
}

function askTime () {
  let time = prompt("What hour is it? (0-23)");
  let message;

  if (time <=11) {
    message= "Good Morning";
  } else if (time <=17) {
    message = "Good afternoon";
  } else if (time < 24) {
    message="Good evening" ;
  } else {
    message ="Invalid input, please try again.";
  }

  document.write(message);

  }

function getRating() {
    let rating = prompt('Rate my site between 1-5','5');

    // validate / check that they input a number between 1 - 5; 

    while (rating < 0 || rating >= 5) {
      rating = prompt('Please enter a number 5 or lower!')
    } 

    // while (!(rating > 0 && rating <= 5)) {
    //   rating = prompt('Please enter a number 5 or lower!')
    // } 

    for (let i = 0; i < rating; i++) {
        document.write("<img src='pandarating.jpg'/>")
    }
}
















<script>
  var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
</script>


document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton");
  const hiddenImage = document.getElementById("hiddenImage");

  showButton.addEventListener("click", function () {
      // Toggle the image's visibility
      if (hiddenImage.style.display === "none") {
          hiddenImage.style.display = "block";
      } else {
          hiddenImage.style.display = "none";
      }
  });
});


function getRating() {
  let rating = prompt('Rate my site between 1-5','5');
  while (rating < 0 || rating >= 5) {
    rating = prompt('Please enter a number 5 or lower!')
  }

for (let i = 0; i < rating; i++) {
  document.write("<img src='https://static4.depositphotos.com/1026550/376/i/450/depositphotos_3763236-stock-photo-gold-star.jpg'/>")
}
}