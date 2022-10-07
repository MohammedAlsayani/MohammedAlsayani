/*
const toggle = document.querySelector(".toggle");
const menuBtn = document.querySelectorAll(".menu-btn");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", function() {

    if (menu.classList.contains("humberger")) {
        menu.classList.add("humberger");

        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.remove("humberger");
        menuBtn.toggle();
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";

    }

});
*/
$(document).ready(function() {
    $(".hum").click(function() {
        $(".logo").toggleClass("active")
    })

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.hum').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});