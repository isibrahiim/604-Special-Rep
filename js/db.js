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
  
  //   smooth scrolling
$("#navbar a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});
  