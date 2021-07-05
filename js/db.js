// Display Time function
function updateClock() {
    document.querySelector(".clock").style.color = "#fff";
    const clockContainer = document.querySelector(".clock");
  
    clockContainer.innerHTML =
      // "<b>" + new Date().toLocaleDateString("uk") + "</b>";
      "<b>" + new Date().toLocaleTimeString("uk") + "</b>";
  }
  setInterval(updateClock, 1000);
  // JSON Data to HTML 
  const bio = {
    "title": "What I do",
    "btm-line" : '',
    "desc": " I'm a Web designer and also a mobile App Designer, I work in the illustration niche, as well as graphic and motion design, photography, and combine them with other visual arts. I work with commercial and social projects of any scale and bring every work to the highest level of perfection.",
    
  };
  
  let bioHtml = "";
  bioHtml += `
  
  <h2 class="section-title"> ${bio.title} </h2>
  <div class="bottom-line"> </div>
  <p class = 'lead'> ${bio.desc}</p>
  `;
  document.querySelector(".bio").innerHTML = bioHtml;

  //   sicky menue= background
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});
  
  //   smooth scrolling
// $("#navbar a").on("click", function (event) {
//   if (this.hash !== "") {
//     event.preventDefault();
//     const hash = this.hash;
//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top,
//       },
//       800
//     );
//   }
// });
// Type Writing 

//smooth scrolling js
let scrollButton= document.getElementById('btn-scroll');
window.onscroll = function () {
  scrollFunction()
}
function scrollFunction() {
  if(document.body.scroll > 100 || document.documentElement.scrollTop > 100){
scrollButton.style.display = "block";
  }
  else {
    scrollButton.style.display = "none";
  }
} 
// Send Email Js Function

function sendEmail() {
  let emailInput = document.querySelector(".email-input2").value;
  Email.send({
    SecureToken: "4a1a26e2-36a8-41ef-b409-308c841b9c0a",
    Host: "smtp.gmail.com",
    Username: "mezdunaame@gmail.com",
    Password: "kmfuunayqrqrwxso",
    To: "mezdunaame@gmail.com",
    From: "mezdunaame@gmail.com",
    Subject: `${emailInput} has Subscribed To Your Website`,
    Body: `This Email: ${emailInput} Has Subscribed To Your Website`,
  }).then((message) =>
    alert(` ${emailInput} You Have successfully Subscribed To Newsletter `)
  );
  document.querySelector(".email-input2").value = "";
}
//testmonials
const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;

for (let i = 0; i < indicatorImages.length; i++) {
  indicatorImages[i].addEventListener("click", function () {
    for (let j = 0; j < indicatorImages.length; j++) {
      indicatorImages[j].classList.remove("active");
    }
    this.classList.add("active");
    const id = this.getAttribute("data-id");
    for (let j = 0; j < slides.length; j++) {
      slides[j].classList.remove("active");
    }

    slides[id].classList.add("active");
  });
}


// Type Writing
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer", "Web Designer", "IT-Consultant"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

//contact Form
let model = document.getElementById('content-model');
let openModel = document.getElementById('model-open');
let closeModel = document.querySelector('.close-model');
openModel.addEventListener('click',function(){
  model.style.display ='block'
})
closeModel.addEventListener('click',function(){
  model.style.display = 'none';
})
window.addEventListener('click',function(e){
if(e.target == model){
  model.style.display = 'none';
}
})
  