document.addEventListener("DOMContentLoaded", function () {

    var nextButton = document.querySelector(".changeNext")
    var prevButton = document.querySelector(".changePrev")
    var list = document.querySelectorAll(".mainPhoto li")

    var sliderArr = Array.from(document.querySelectorAll(".gallery li"))
    var counter = 0;

    sliderArr[counter].classList.add("visible");

    nextButton.addEventListener('click', function () {
        if (counter == sliderArr.length - 1) {
            sliderArr[counter].classList.remove('visible');
            counter = 0;
            sliderArr[counter].classList.add('visible');
        } else {
            sliderArr[counter].classList.remove('visible');
            counter++
            sliderArr[counter].classList.add('visible');
        }
    })

    prevButton.addEventListener('click', function () {
        if (counter == 0) {
            sliderArr[counter].classList.remove('visible');
            counter = sliderArr.length - 1;
            sliderArr[counter].classList.add('visible');
        } else {
            sliderArr[counter].classList.remove('visible');
            counter--;
            sliderArr[counter].classList.add('visible');
        }
    })


/* SLIDER MOBILE ////////////////*/

    var list = document.querySelector(".mainPhoto");
    var sliderArr = Array.from(document.querySelectorAll(".gallery li"));
    var counter = 0;


    sliderArr[counter].classList.add("visible");
    list.addEventListener('touchstart', function () {
        if (counter == sliderArr.length - 1) {
            sliderArr[counter].classList.remove('visible');
            counter = 0;
            sliderArr[counter].classList.add('visible');
        } else {
            sliderArr[counter].classList.remove('visible');
            counter++;
            sliderArr[counter].classList.add('visible');
        }
    })

    /* HIDE BOX /////////////////////*/
    var hoverBox1 = document.querySelector(".box:first-child");
    var hoverBox2 = document.querySelector(".box:nth-child(2)");
    var hideBlock = document.querySelector(".box:first-child .opacityBackground");
    var hideBlock2 = document.querySelector(".box:nth-child(2) .opacityBackground");
    
    hoverBox1.addEventListener("mouseover", function() {
        hideBlock.style.display = "none";
        hoverBox1.style.transform = "scale(1.05)";
        hoverBox1.style.transition = "1s";
    })
    
     hoverBox1.addEventListener("mouseout", function() {
        hideBlock.style.display = "flex";
         hoverBox1.style.transform = "scale(1)";
    })
    
      hoverBox2.addEventListener("mouseover", function() {
        hideBlock2.style.display = "none";
          hoverBox2.style.transform = "scale(1.05)";
        hoverBox2.style.transition = "1s";
    })
    
     hoverBox2.addEventListener("mouseout", function() {
        hideBlock2.style.display = "flex";
         hoverBox2.style.transform = "scale(1)";
    })

    /* DROPDOWN ////////////////////*/
    
    var navMenu = document.querySelector(".hovermenu")
     var navMenuHover = document.querySelector(".menuOnHover")
     
     navMenu.addEventListener("mousemove", function() {
         navMenuHover.style.display = "block"
     })
    
     navMenu.addEventListener("mouseout", function() {
         navMenuHover.style.display = "none"
     })



})


