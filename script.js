

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

