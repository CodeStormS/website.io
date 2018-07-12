 $(document).ready(function() {
                $('.section-slide').slick({
                autoplay:3000,
                arrows:false,
                });
                $('.section-6-slide').slick({
                dots: true,
                infinite: false,
                speed: 300,
                responsive: [
                {
                breakpoint: 768,
                settings: {
                infinite: true,
                dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ]
                });
                });
                
                // contact form js

                $("form").submit(function(event){
                  event.preventDefault();
                  var name = $('.name').val();
                  var email = $('.email').val();
                  var message = $('.message').val();

                  console.log(name,email,message);
                  
                  if(name.length == 0){
                     alert('Vendosni emrin');
                 } else if(name.length < 3){
                    alert('Emri duhet t jet me shm se dy karaktere!');
                  }
                   
                   if(email.length == 0){
                     alert('Vendosni email');
                 } 

                 if(message.length == 0){
                     alert('Vendosni nje message');
                 } else if(message.length < 50){
                     alert('Message duhet te permbarj jo me pak se 50 karaktere');
                 } 


                 });

                // closed contact form

            // function MAP
             function initMap() {
        var uluru = {lat: 41.327546, lng: 19.818698};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru, 
          styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          "title": 'Tirana',
          // icon:'images/icon-map.jpg',


        });
      }



// init Isotope
var $grid = $('.grid').isotope({
  
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ 
    filter: filterValue 
   

  });
});




//Page Smooth scrolling
$('a.page-scroll').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html,body').animate({
         scrollTop: target.offset().top - 40
       }, 900);
       return false;
     }
   }
});



// galery style popup

$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: { 
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Elios Maca</small>';
      }
    }
  });
});