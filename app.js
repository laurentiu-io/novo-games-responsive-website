// Controlling the mobile nav
const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');
const colorOverlay = document.querySelector('.color-overlay');
const body = document.querySelector('body');
const box = document.querySelector('.box');

navbarBtn.addEventListener('click', function(){

    let value = navbarLinks.classList.contains('navbar__collapse');

    if(value){
        navbarLinks.classList.remove('navbar__collapse');
        navbarLinks.style.width = "0";
        navbarLinks.style.opacity = "0";
        setTimeout(() => {  colorOverlay.style.display = "none"; }, 150);
        colorOverlay.animate([{opacity: '0.8'}, {opacity: '0.0'}], 
        {duration: 100, fill:'forwards'});

        body.style.overflow = "auto";
        navbarBtn.classList.remove('change');
    }

    else{
        navbarLinks.classList.add('navbar__collapse');
        navbarLinks.style.width = "75%";
        navbarLinks.style.opacity = "1";
        setTimeout(() => {  colorOverlay.style.display = "block"; }, 10);
        colorOverlay.animate([{opacity: '0.1'}, {opacity: '0.8'}], 
        {duration: 300, fill:'forwards'});

        body.style.overflow = "hidden";
        navbarBtn.classList.add('change');

    }
});

// Hiding gradients on the navbar on Safari Desktop
if (navigator.userAgent.indexOf('Safari') != -1 && 
    navigator.userAgent.indexOf('Chrome') == -1 && 
    !navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)) {

    document.querySelectorAll(".navbar__link p").forEach( (item) => {
      item.style.webkitTextFillColor = "black";
    })

    // document.querySelector(".slider-image").style.display = "none";
    // document.querySelector("#bm-phone-frame").src = `./img/bobblehead-mania/bobblehead-mania-phone-frame-mobile.png`;

    if(document.querySelector(".dark")) {

      document.querySelector(".dark").style.display = "none";
      
    }
    
}


//Adding options for mirror dash page
if (body.classList.contains("mirror")) {

  let character = null;

  window.addEventListener('load', (event) => {


      setTime();
      setInterval(setTime, 10000);
      
  });

  // Enable and disable the jumping animation
  function setTime() {

      const italy_up = document.querySelector('#italy-up');
      const japan_up = document.querySelector('#japan-up');
      const britain_up = document.querySelector('#britain-up');
      const france_up = document.querySelector('#france-up');
      const italy_down = document.querySelector('#italy-down');

      const characters = [italy_up, japan_up, britain_up, france_up, italy_down];
      
      character = characters[getRandomInt(5)];

      addBox();
      setTimeout(removeBox, 2000);
  }


  function removeBox() {

      character.style.display = "none";
      box.classList.remove('bounce-1');
  }

  function addBox() {

      character.style.display = "block";
      box.classList.add('bounce-1');

  }


  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



  // Generate and display particle effects for jumping character
  if (document.body.animate) {
    box.addEventListener('animationstart', pop);
    box.addEventListener('animationend', pop2);
  }

  function pop (e) {

    for (let i = 0; i < 100; i++) {
        createParticle(0, 600);
    }

  }

  function pop2 (e) {

    for (let i = 0; i < 100; i++) {
        createParticle(1760, 325);
    }

  }

  // Create a particle
  function createParticle (x, y, colour) {

    const particle = document.createElement('particle');
    document.body.appendChild(particle);

    let width = Math.floor(Math.random() * 8 + 5);
    let height = width;

    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;

    // Generate a random color in a blue/purple palette
    particle.style.background = `hsl(${Math.random() * 60 + 240}, 70%, 60%)`;
    
    // Generate a random x & y destination within a distance of 75px from the mouse
    const destinationX = x + (Math.random() - 0.5) * 2 * 75;
    const destinationY = y + (Math.random() - 0.5) * 2 * 75;

    // Store the animation in a variable as we will need it later
    const animation = particle.animate([
      {
        // Set the origin position of the particle
        // We offset the particle with half its size to center it around the mouse
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        opacity: 1
      },
      {
        // We define the final coordinates as the second keyframe
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0
      }
    ], {
      // Set a random duration from 500 to 1500ms
      duration: Math.random() * 1000 + 500,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      // Delay every particle with a random value of 200ms
      delay: Math.random() * 200
    });
    
    // When the animation is complete, remove the element from the DOM
    animation.onfinish = () => {
      particle.remove();
    };
  }


  // Enable/Disable the dark mode for mirror dash page

  const moonPath = "M28.1818 50C28.1818 77.6142 50 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C50 0 28.1818 22.3858 28.1818 50Z";
  const sunPath = "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z";
    
  const darkMode = document.querySelector('#darkMode');
  const presentation = document.querySelector('.presentation');
  const introText = document.querySelector('.intro-text');
  const gameLogo = document.querySelector('#game-logo');
  const palmTree = document.querySelector('#palm-tree');
  const cover = document.querySelector('.top-cover-container');
  const bottomCover = document.querySelector('#bottom-cover-image');
  const stars = document.querySelector('.stars');
  const navbar = document.querySelector('.navbar');
  const navbarBtn = document.querySelector('.navbar__btn');
  const navbarLinksContainer = document.querySelector('.navbar__links');
  const navbarLinks = document.querySelectorAll('.navbar__link');
  const navbarLogo = document.querySelector('.navbar__logo');
  const ctas = document.querySelector('.cta');
  const darkModeText = document.querySelector('.dark-mode-text');
  const switchBox = document.querySelector('#switch');
  const section_1 = document.querySelector('.section-1');
  let darkTheme = false;


  switchBox.addEventListener('change', (event)=>{

    if (event.target.checked) {

      dayNightSwitch();

    } else {

      dayNightSwitch();

    }

  });

  darkMode.addEventListener('click', dayNightSwitch);

  function dayNightSwitch(){
        
      // We need to use anime.js
      // Here we set up the Timeline
      const timeline = anime.timeline({
          duration: 750,
          easing: "easeOutExpo"
      });

      // Add different animation to the timeline
      timeline.add({
          targets: '.sun',
          d: [{value: darkTheme ? sunPath : moonPath}],
          fill: [{value: darkTheme ? 'rgb(226,37,90)' : 'rgb(253,236,245)'}],
          boxShadow: [{value: darkTheme ? 'none' : '0 0 150px 20px white'}]
          
      })
      .add({
          targets: '#darkMode',
          rotate: darkTheme ? -320 : 320
      }, '-= 550')
      .add({
          targets: presentation,
          background: darkTheme ? '-webkit-linear-gradient(90deg, rgb(246,231,233), rgb(235,197,202))' : '-webkit-linear-gradient(-90deg, rgb(0,1,11), rgb(37,22,89))', 
          color: darkTheme ? 'rgb(22, 22, 22)' : 'rgb(255, 255, 255)'
      }, '-= 700')

      .add({
        targets: navbar,
        boxShadow: darkTheme ? '0px 0px 6px rgba(0, 0, 0, 0.25)' : '0px 0px 1px rgba(255, 255, 255, 1.0)',
        background: darkTheme ? 'rgb(255, 255, 255)' : 'rgb(0,1,11)'
      }, '-= 900')

      .add({
        targets: navbarLinks,
        color: darkTheme ? 'rgb(0,0,0)' : 'rgb(255, 255, 255)'
      }, '-= 900')

      .add({
        targets: section_1,
        borderRight: darkTheme ? '2px rgb(0,0,0) solid' : '2px rgb(255, 255, 255) solid',
        borderBottom: darkTheme ? '2px rgb(0,0,0) solid' : '2px rgb(255, 255, 255) solid'
      }, '-= 900')

      .add({
        targets: navbarLinksContainer,
        backgroundColor: darkTheme ? 'rgb(255, 255, 255)' : 'rgb(0,1,11)'
      }, '-= 900')

      .add({
        targets: darkModeText,
        color: darkTheme ? 'rgba(226,37,90, 0.5)' : 'rgb(255, 255, 255)'
      }, '-= 900')

      .add({
        targets: navbarLogo,
        filter: darkTheme ? 'invert(0)' : 'invert(1)'
      }, '-= 900')

      .add({
        targets: navbarBtn,
        filter: darkTheme ? 'invert(0)' : 'invert(1)'
      }, '-= 900')

      .add({
        targets: introText,
        filter: darkTheme ? 'invert(0)' : 'invert(0.9)'
      }, '-= 1000')
      .add({
        targets: gameLogo,
        filter: darkTheme ? 'invert(0)' : 'invert(0.9)'
      }, '-= 1000')
      .add({
        targets: palmTree,
        filter: darkTheme ? 'invert(0)' : 'invert(0.9)'
      }, '-= 1000')
      .add({
        targets: cover,
        filter: darkTheme ? 'brightness(100%)' : 'brightness(55%)'
      }, '-= 1000')
      .add({
        targets: bottomCover,
        filter: darkTheme ? 'brightness(100%)' : 'brightness(55%)'
      }, '-= 1000')
      .add({
        targets: stars,
        zIndex: darkTheme ? '-1' : '1'
      }, '-= 6000')

      .add({
        targets: ctas,
        filter: darkTheme ? 'invert(0)' : 'invert(1)'
      }, '-= 1000')
      
      // Everytime we click on the sun I want to toggle to switch
      if(!darkTheme) {
          darkTheme = true;
          switchBox.checked = true;

      } else {
          darkTheme = false;
          switchBox.checked = false;
      }
  }
  

}


// Enable tubes spit and balls animation
if(body.classList.contains("tubes")) {

  window.tubObstacleLeft_1 = document.querySelector("#tub-obstacle-left-1-img");
  window.tubObstacleLeft_2 = document.querySelector("#tub-obstacle-left-2-img");
  window.tubObstacleLeft_4 = document.querySelector("#tub-obstacle-left-4-img");
  window.tubObstacleRight_1 = document.querySelector("#tub-obstacle-right-1-img");
  window.tubObstacleRight_2 = document.querySelector("#tub-obstacle-right-2-img");

  window.ballOrange = document.querySelector(".ball-orange");
  window.ballPink = document.querySelector(".ball-pink");
  window.ballYellow = document.querySelector(".ball-yellow");
  window.ballGreen = document.querySelector(".ball-green");
  window.ballsCyan = document.querySelectorAll(".ball-cyan");
  window.ballsPurple = document.querySelectorAll(".ball-purple");

  window.addEventListener('load', () => {

    activateTubes();
    setInterval(activateTubes, 5000);
    
  });

  function activateTubes() {

    addAnimations();
    setTimeout(removeAnimations, 1500);
  }


  function removeAnimations() {

    tubObstacleLeft_1.classList.remove("tube-spit");
    tubObstacleLeft_2.classList.remove("tube-spit");
    tubObstacleLeft_4.classList.remove("tube-spit");
    tubObstacleRight_1.classList.remove("tube-spit");
    tubObstacleRight_2.classList.remove("tube-spit");

    ballOrange.classList.remove("ball-moving");
    ballPink.classList.remove("ball-moving");
    ballYellow.classList.remove("ball-moving");
    ballGreen.classList.remove("ball-moving");
    
    ballsCyan.forEach((item) => {

      item.classList.remove("ball-moving");
    
    })

    ballsPurple.forEach((item) => {

      item.classList.remove("ball-moving");
    
    })

  }

  function addAnimations() {

    tubObstacleLeft_1.classList.add("tube-spit");
    tubObstacleLeft_2.classList.add("tube-spit");
    tubObstacleLeft_4.classList.add("tube-spit");
    tubObstacleRight_1.classList.add("tube-spit");
    tubObstacleRight_2.classList.add("tube-spit");

    ballOrange.classList.add("ball-moving");
    ballPink.classList.add("ball-moving");
    ballYellow.classList.add("ball-moving");
    ballGreen.classList.add("ball-moving");


    ballsCyan.forEach((item) => {

      item.classList.add("ball-moving");
    
    })

    ballsPurple.forEach((item) => {

      item.classList.add("ball-moving");
    
    })


  }


}


// Start and use the modal for screenshots
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector("#modal-overlay");
const modalContent = document.querySelector(".modal-overlay");

const captionText = document.querySelector(".modal-caption");
const modalImg = document.querySelector("#modalImg");

const leftBtn = document.querySelector('.modal-nav-left');
const rightBtn = document.querySelector('.modal-nav-right');
const closeModal = document.querySelector('.modal-close');

const screenshots = document.querySelector('.screenshots');
let totalScreenshots = 0;

document.querySelectorAll('.screenshot').forEach(function(item, index) {

  totalScreenshots++;

  item.addEventListener('click', () => {
      startModal(item, index);
  });

})


// Making the modal visible
function startModal(item, index) {

  index++;

  console.log("Start modal of index: " + index);
  console.log("Item clicked is: " + item.src);
  console.log("Scroll position is: " + window.scrollY);

  modalOverlay.style.display = "block";
  modal.style.display = "block";
  modal.style.top = `${window.scrollY}px`;
  body.style.overflow = "hidden";
  modalImg.src = item.src;

  captionText.innerHTML = "Image " + index + " of " + totalScreenshots;

  modal.animate([{opacity: '0.1'}, {opacity: '1.0'}], 
    {duration: 500, fill:'forwards'});

  modalOverlay.animate([{opacity: '0.1'}, {opacity: '1.0'}], 
    {duration: 300, fill:'forwards'});

  let counter = index;

  // Adding events listeners on the modal
  leftBtn.addEventListener('click', leftSlide);
  rightBtn.addEventListener('click', rightSlide);
  closeModal.addEventListener('click', modalClose);
  modalOverlay.addEventListener('click', modalClose);

  // Function for clicking the right side of the screenshot for all pages
  function rightSlide(){

    modalImg.animate([{opacity: '0.1'}, {opacity: '1.0'}], 
    {duration: 300, fill:'forwards'});

    if(counter === 6){
        counter = 0;
    }

    counter++;

    if (screenshots.classList.contains('bm')) {

      captionText.innerHTML = "Image " + counter + " of 6";

      modalImg.src = `./img/bobblehead-mania/bobblehead-mania-${counter}.jpg`;
    }

    else if (screenshots.classList.contains('pol')) {

      if(counter == 4) {
        counter = 1;
      }

      modalImg.src = `./img/polarity/polarity-${counter}.png`;

      captionText.innerHTML = "Image " + counter + " of " + totalScreenshots;

    }

    else if (screenshots.classList.contains('tub')) {

      if(counter == 4) {
        counter = 1;
      }

      modalImg.src = `./img/tubes/tubes-${counter}.png`;

      captionText.innerHTML = "Image " + counter + " of " + totalScreenshots;

    }

    else {

      captionText.innerHTML = "Image " + counter + " of 6";

      modalImg.src = `./img/mirror-dash/mirror-dash-${counter}.png`;
    }
    
  }

   // Function for clicking the left side of the screenshot for all pages
  function leftSlide(){

    modalImg.animate([{opacity: '0.1'}, {opacity: '1.0'}], 
    {duration: 500, fill:'forwards'});

    counter--;

    if (screenshots.classList.contains('bm')) {

      if(counter === 0){
          counter = 6;
      }

      captionText.innerHTML = "Image " + counter + " of 6";

      modalImg.src = `./img/bobblehead-mania/bobblehead-mania-${counter}.jpg`;
    }

    else if (screenshots.classList.contains('pol')) {

      if(counter == 0) {
        counter = 3;
      }

      modalImg.src = `./img/polarity/polarity-${counter}.png`;

      captionText.innerHTML = "Image " + counter + " of " + totalScreenshots;

    }

    else if (screenshots.classList.contains('tub')) {

      if(counter == 0) {
        counter = 3;
      }

      modalImg.src = `./img/tubes/tubes-${counter}.png`;

      captionText.innerHTML = "Image " + counter + " of " + totalScreenshots;

    }

    else {

      if(counter === 0){
          counter = 6;
      }

      captionText.innerHTML = "Image " + counter + " of 6";

      modalImg.src = `./img/mirror-dash/mirror-dash-${counter}.png`;
    }
    

  }

  // Function that closes the modal
  function modalClose() {

    modal.animate([{opacity: '1.0'}, {opacity: '0.0'}], 
    {duration: 300, fill:'forwards'});

    modalOverlay.animate([{opacity: '1.0'}, {opacity: '0.0'}], 
    {duration: 150, fill:'forwards'});

    body.style.overflow = "";

    setTimeout(() => {  modalOverlay.style.display = "none"; modal.style.display = "none"; }, 400);

  }


}


// Slider for bobblehead mania
if(body.classList.contains("bobble")) { 

  window.counter = 1;
  window.sliderImage = document.querySelector(".slider-image");
  window.bobblePhoneFrame = document.querySelector("#bm-phone-frame");

  if(screen.width < 600 ) {

    sliderImage.style.display = "none";
    bobblePhoneFrame.src = './img/bobblehead-mania/bobblehead-mania-phone-frame-mobile.png';
    console.log("It is smaller!");

  }

  else {
    setTimeout(changeSlide, 0);
    setInterval(changeSlide, 3500);

  }
  
  function changeSlide() {

    counter++;

    if(counter == 7) {
      counter = 1;
    }

    sliderImage.style.display = "block";
  
    sliderImage.animate([{opacity: '0.1'}, {opacity: '1.0'}], 
    {duration: 500, fill:'forwards'});
    
    sliderImage.src = `./img/bobblehead-mania/bobblehead-mania-${counter}.jpg`;
  
  }


}



// Adding the swiper for 'Other Games' section on mobile 
checkSwiper();

function checkSwiper() {

  const screenWidth = screen.width;
  const swiperContainer = document.querySelector("#swiperContainer");
  const presentation = document.querySelector('.presentation');

  //Create new Swiper object
  let swiper = new Swiper('.swiper-container', {
      init: false,
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
  });

  // Display the swiper only on resolutions lower than 600
  if(screenWidth < 600) {

    presentation.style.height = `${window.innerHeight-65}px`;

    console.log("Screen width is smaller than 600: " + screenWidth);

    document.querySelector("#swiperPagination").classList.add("swiper-pagination");

    swiper.init();

    console.log("Swiper was initalised!");

    document.querySelectorAll('#swiperSlide').forEach( (item) => {
          item.classList.add("swiper-slide");
    })    

    if (swiperContainer.classList.contains("other-games")) {
      swiperContainer.classList.remove("other-games");
    }

    if (!swiperContainer.classList.contains("swiper-container")) {
      swiperContainer.classList.add("swiper-container");
    }

  }

  else if(screenWidth >= 600) {

    console.log("Screen width is bigger or equal than 600: " + screenWidth);

    swiper.init();

    if(swiper) {swiper.destroy(true, true); console.log("Swiper was init then destroyed!");}
    

    document.querySelectorAll('#swiperSlide').forEach( (item) => {
      item.classList.remove("swiper-slide");
    })  

    if (!swiperContainer.classList.contains("other-games")) {
      swiperContainer.classList.add("other-games");
    }

    if (swiperContainer.classList.contains("swiper-container")) {
      swiperContainer.classList.remove("swiper-container");
    }

  }

}


// Smooth scroll
function smoothScrool(target, duration){

  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition - 150;
  var startTime = null;

  function animation(currentTime){

      if(startTime === null) startTime = currentTime;

      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);

      window.scrollTo(0, run);

      if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t*t*t*t + b;
      t -= 2;
      return c/2*(t*t*t*t*t + 2) + b;
  };
  
  requestAnimationFrame(animation);

}; 

const section_1 = document.querySelector('.section-1');

section_1.addEventListener('click', function(){
  smoothScrool('.section-2', 1500);
});
