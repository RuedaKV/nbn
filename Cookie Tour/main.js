// NAV BAR SCROLL EFFECT

const navColorChange = () => {
    document.querySelector('nav').className = "nav-bar nav-bar-scroll";
}

window.addEventListener("scroll", navColorChange);

// ADD ANY OTHER JS BELOW:

document.querySelectorAll('.cookie-location').forEach(option => option.addEventListener("click", displayCookieContent(option)));


function displayCookieContent(option) {
  return function() {
      if(option.style.display != "none"){
        option.style.display = "none";
      }

      option.style.display = "block";
      
    //   if(option.style.display == "none"){
    //       option.style.display = "block"
    //   }
  }
};





