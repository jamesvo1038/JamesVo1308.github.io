// Code will execute when the document i.e. the page is ready
// The '$" is Jquery syntax
$(document).ready(function() {

    // The id here has to match with the one from index.html
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Software Engineer", "Web Developer", "Student"],
        typeSpeed: 50,
        loop:true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });

    

    // this is the jQuery object was referred to the class="skillsSection"
    //offset() method gets to position horizontally and vertically of the element 
    var skillsTopOFFset = $(".skillsSection").offset().top;
    
    $(window).scroll(function(){

        //this window.pageYOffset is just way where the scroll position is
        if(window.pageYOffset > skillsTopOFFset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                //find this element has class=percent and then
                //set the text to be the value of the percent
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

    });

    //This is a counter to count up the number in the stats but didn't work
    //It is asking for a dependency for a JavaScript which i do not know how to
    //implement it.
    $(".counter").each(function(){
        var element = $(this);
        var endVal = parseInt(element.text());

        element.countup(endVal); 
    });
    

});