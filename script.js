

$(document).ready(function() {
    var sideNav = $('#side-nav');
    var homeSectionHeight = $('#home').height();
    
    // On scroll, make the side navigation sticky
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        // Make side navigation sticky after scrolling past the first section
        if (scrollTop > homeSectionHeight) {
            sideNav.addClass('sticky');
        } else {
            sideNav.removeClass('sticky');
        }

        // Highlight navigation link based on scroll position
        $('.nav-link').each(function() {
            var sectionOffset = $($(this).attr('href')).offset().top - 100;
            if (scrollTop >= sectionOffset) {
                $('.nav-link').removeClass('active');
                $(this).addClass('active');
            }
        });
    });

        // Smooth scroll for footer quick links
    document.querySelectorAll('.footer-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

// Update progress bar on page scroll
window.onscroll = function() {
    scrollProgress();
};

function scrollProgress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}


window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// Listen for scroll event for Project section
window.addEventListener('scroll', function() {
    // Get the project section and containers
    var projectSection = document.getElementById('projects-section');
    var projectContainers = document.querySelectorAll('.project-card');
    
    // Get the position of the project section relative to the viewport
    var sectionTop = projectSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    // Check if the project section is in view
    if (sectionTop <= windowHeight - 100) { // Trigger 100px before the section
        // Add the fade-in class to each project container
        projectContainers.forEach(function(container) {
            container.classList.add('fade-in');
        });
    }
});

// Listen for scroll event for Skills section
window.addEventListener('scroll', function() {
    // Get the project section and containers
    var projectSection = document.getElementById('skills-section');
    var projectContainers = document.querySelectorAll('.skill-division');
    
    // Get the position of the project section relative to the viewport
    var sectionTop = projectSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    // Check if the project section is in view
    if (sectionTop <= windowHeight - 100) { // Trigger 100px before the section
        // Add the fade-in class to each project container
        projectContainers.forEach(function(container) {
            container.classList.add('fade-in');
        });
    }
});

// Listen for scroll event for About section
window.addEventListener('scroll', function() {
    // Get the project section and containers
    var projectSection = document.getElementById('about-section');
    var projectContainers = document.querySelectorAll('.details-list');
    
    // Get the position of the project section relative to the viewport
    var sectionTop = projectSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    // Check if the project section is in view
    if (sectionTop <= windowHeight - 100) { // Trigger 100px before the section
        // Add the fade-in class to each project container
        projectContainers.forEach(function(container) {
            container.classList.add('fade-in');
        });
    }
});
