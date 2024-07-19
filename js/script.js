
$(document).ready(function () {
    $('.video-gallery').magnificPopup({
        delegate: 'a',
        type: 'iframe',
        gallery: {
            enabled: true
        }
    });
});



let menuBtn = document.querySelector('#menu-btn')
let navbar = document.querySelector('.header .flex .navbar')

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",

        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",

        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3,

        },
    },
});

var acc = document.getElementsByClassName("accordion");
var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
        // clearBox('myDiv_id1')
      } else {
        panel.style.display = "block";
        var firstElementChild = panel.children[0].id;
        var secondElementChild = panel.children[1].id;
        // console.log(firstElementChild);
        // console.log(secondElementChild);
                         
var text = document.getElementById(secondElementChild).innerHTML;
        
responsiveVoice.speak(text,'UK English Female', parameters);  
         printStringByLetter(secondElementChild,firstElementChild);
                    
// console.log(text); 
    
    // alert('i am here');
    
        
        
      }
    });
  }
var images = document.querySelectorAll(".faq-icon");
images.forEach(function(image) {
  image.addEventListener("click", changeImage);
});

function changeImage() {
  if (this.src.match("chevron-down")) {
  this.src = "https://cdn.jsdelivr.net/gh/linuxguist/faqa@main/chevron-up.svg";
  } else {
  this.src = "https://cdn.jsdelivr.net/gh/linuxguist/faqa@main/chevron-down.svg";
  }
}
     



function printStringByLetter(paragraph_id,myDiv_id) {
var myDiv = document.getElementById(myDiv_id);
var text = document.getElementById(paragraph_id).innerHTML;
// myDiv.innerHTML = "";
document.getElementById(myDiv_id).innerHTML = "";
// console.log(text.length);
var index = 0;
var intervalId = setInterval(function() {
myDiv.innerHTML += text.charAt(index);
index++;
// console.log(index);
if(index == text.length) {
  clearInterval(intervalId);
  index = 0;
  text = "";
}
}, 50);    
}    

function clearBox(elementID)
{
document.getElementById(elementID).innerHTML = "";
}

function voiceStartCallback() {
    console.log("Voice started");
}

function voiceEndCallback() {
    console.log("Voice ended");
}

var parameters = {
    onstart: voiceStartCallback,
    onend: voiceEndCallback,
    rate: 0.95
}

const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )