console.log('app loaded baby');
//Navigation
function openMobNav() {
  document.getElementById("mobileNav").style.height = "100%";
  console.log('Navigation open');
}

function closeMobNav() {
  document.getElementById("mobileNav").style.height = "0%";
  console.log('Navigation closed');

}

new ModalVideo('.js-modal-video');
new WOW().init();


jQuery(function ($){



    var pageScrolled = false;
    var scrollTop = 1;
    var delayInMilliseconds = 1000; //1 second
    var base_url = window.location.origin;

    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);
      
       //if the site scrolls beyond 175 trigger the change
      if (scrollTop >= 175) {
        pageScrolled = true;
        $('#global-nav').addClass('scrolled-nav');
        $('.nav-container').addClass('scrolled-nav-container');
        $('#logo-container').attr('style','background:url("/wp-content/themes/mascarade-theme/dist/img/mascarade-wordmark-copper.svg") bottom no-repeat;');
        $('#logo-container').addClass('logo-scrolled');
        //if the site scrolls back to the top undo the change
      } else if (scrollTop < 175) {
        $('#global-nav').removeClass('scrolled-nav');
        $('.nav-container').removeClass('scrolled-nav-container');
        $('#logo-container').attr('style','background:url("/wp-content/themes/mascarade-theme/dist/img/mascarade-logo-cream.svg") center no-repeat;');
        $('#logo-container').removeClass('logo-scrolled');

       
        pageScrolled = false;
      }
    }); 

 

  //Mobile Navigation
  /* Open */
  
  //OPEN TRIGGER
var openTrigger = $('.menu-trigger');
var openTriggerTop = openTrigger.find('.menu-trigger-bar.top');
var openTriggerMiddle = openTrigger.find('.menu-trigger-bar.middle');
var openTriggerBottom = openTrigger.find('.menu-trigger-bar.bottom');

//CLOSE TRIGGER
var closeTrigger = $('.close-trigger');
var closeTriggerLeft = closeTrigger.find('.close-trigger-bar.left');
var closeTriggerRight = closeTrigger.find('.close-trigger-bar.right');

//LOGO
var logo = $('.logo');

//MENU
var menuContainer = $('.menu-container');
var menu = $('.menu');
var menuTop = $('.menu-bg.top');
var menuMiddle = $('.menu-bg.middle');
var menuBottom = $('.menu-bg.bottom');

//TL
var tlOpen = new TimelineMax({paused: true});
var tlClose = new TimelineMax({paused: true});

//OPEN TIMELINE
tlOpen.add("preOpen")
  .to(logo, 0.4, {
            scale: 0.8,
            opacity: 0,
            ease: Power2.easeOut
        }, "preOpen")
.to(openTriggerTop, 0.4, {
  x: "+80px", y: "-80px", delay: 0.1, ease: Power4.easeIn, onComplete: function() {
    closeTrigger.css('z-index','25');
    
    openMobNav();

  }
}, "preOpen")
.to(openTriggerMiddle, 0.4, {
  x: "+=80px", y: "-=80px", ease: Power4.easeIn,
  onComplete: function() {
    openTrigger.css('visibility','hidden'); 
  }
}, "preOpen")
.to(openTriggerBottom, 0.4, {
  x: "+=80px", y: "-=80px", delay: 0.2, ease: Power4.easeIn
}, "preOpen")
.add("open", "-=0.4")
.to(menuTop, 0.8, {
  y: "13%",
  ease: Power4.easeInOut
}, "open")
.to(menuMiddle, 0.8, {
  scaleY: 1,
  ease: Power4.easeInOut
}, "open")
.to(menuBottom, 0.8, {
  y: "-114%",
  ease: Power4.easeInOut
}, "open")
.fromTo(menu, 0.6, {
  y: 30, opacity: 0, visibility: 'hidden'
}, {
  y: 0, opacity: 1, visibility: 'visible', ease: Power4.easeOut
}, "-=0.2")
.add("preClose", "-=0.8")
.to(closeTriggerLeft, 0.8, {
  x: "-=100px", y: "+=100px", ease: Power4.easeOut
}, "preClose")
.to(closeTriggerRight, 0.8, {
  x: "+=100px", y: "+=100px", delay: 0.2, ease: Power4.easeOut
}, "preClose");

//CLOSE TIMELINE
tlClose.add("close")
  .to(menuTop, 0.2, {
  backgroundColor: "#DFBC6C", ease: Power4.easeInOut, onComplete: function() {
    logo.css('z-index','26');
    closeTrigger.css('z-index','5');
 openTrigger.css('visibility','visible');
 closeMobNav();
  }
}, "close")
.to(menuMiddle, 0.2, {
  backgroundColor: "#DFBC6C", ease: Power4.easeInOut
}, "close") 
.to(menuBottom, 0.2, {
  backgroundColor: "#DFBC6C", ease: Power4.easeInOut
}, "close")
  .to(menu, 0.6, {
  y: 20, opacity: 0, ease: Power4.easeOut, onComplete: function() {
    menu.css('visibility','hidden');
  }
}, "close")
.to(logo, 0.8, {
  scale: 1, opacity: 1, ease: Power4.easeInOut
}, "close", "+=0.2")
.to(menuTop, 0.8, {
  y: "-113%",
  ease: Power4.easeInOut
}, "close", "+=0.2")
.to(menuMiddle, 0.8, {
  scaleY: 0,
  ease: Power4.easeInOut
}, "close", "+=0.2")
.to(menuBottom, 0.8, {
  y: "23%",
  ease: Power4.easeInOut,
  onComplete: function() {
    menuTop.css('background-color','#DFBC6C');
    menuMiddle.css('background-color','#DFBC6C');
    menuBottom.css('background-color','#DFBC6C');
  }
}, "close", "+=0.2")
.to(closeTriggerLeft, 0.2, {
  x: "+=100px", y: "-=100px", ease: Power4.easeIn
}, "close")
.to(closeTriggerRight, 0.2, {
  x: "-=100px", y: "-=100px", delay: 0.1, ease: Power4.easeIn
}, "close")
.to(openTriggerTop, 1, {
  x: "-=80px", y: "+=80px", delay: 0.2, ease: Power4.easeOut
}, "close")
.to(openTriggerMiddle, 1, {
  x: "-=80px", y: "+=80px", ease: Power4.easeOut
}, "close")
.to(openTriggerBottom, 1, {
  x: "-=80px", y: "+=80px", delay: 0.1, ease: Power4.easeOut
}, "close");

//EVENTS
openTrigger.on('click', function(){
  if(tlOpen.progress() < 1){
                tlOpen.play();
                
            } else {
                tlOpen.restart();
            }
});
       
closeTrigger.on('click', function(){
  if(tlClose.progress() < 1){
                tlClose.play();
                
            } else {
                tlClose.restart();
            }
});

$('.patterns-left, .patterns-right').paroller();
$('.cta-right-box').paroller();
$('.cta-left-box').paroller();



// Modal control
// Get the modal

/** 
 * Click on button
 * Open modal neaerest button clicked
 * click anywhere other than modal shut modal
*/

$('.teamModalBtn').click(function(){
  console.log('button click');
  $(this).next('.modal').css("display","block");
});

//if close button on modal clicked.
$('.close').click(function() {
  $('.modal').css("display","none");
});




  });


 /// THIS IS FOR MAPS
 (function($) {

  /*
  *  new_map
  *
  *  This function will render a Google Map onto the selected jQuery element
  *
  *  @type	function
  *  @date	8/11/2013
  *  @since	4.3.0
  *
  *  @param	$el (jQuery element)
  *  @return	n/a
  */
  
  function new_map( $el ) {
    
    // var
    var $markers = $el.find('.marker');
    
    
    // vars
    var args = {
      zoom		: 16,
      center		: new google.maps.LatLng(0, 0),
      mapTypeId	: google.maps.MapTypeId.ROADMAP
    };
    
    
    // create map	        	
    var map = new google.maps.Map( $el[0], args);
    
    
    // add a markers reference
    map.markers = [];
    
    
    // add markers
    $markers.each(function(){
      
        add_marker( $(this), map );
      
    });
    
    
    // center map
    center_map( map );
    
    
    // return
    return map;
    
  }
  
  /*
  *  add_marker
  *
  *  This function will add a marker to the selected Google Map
  *
  *  @type	function
  *  @date	8/11/2013
  *  @since	4.3.0
  *
  *  @param	$marker (jQuery element)
  *  @param	map (Google Map object)
  *  @return	n/a
  */
  
  function add_marker( $marker, map ) {
  
    // var
    var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );
  
    // create marker
    var marker = new google.maps.Marker({
      position	: latlng,
      map			: map
    });
  
    // add to array
    map.markers.push( marker );
  
    // if marker contains HTML, add it to an infoWindow
    if( $marker.html() )
    {
      // create info window
      var infowindow = new google.maps.InfoWindow({
        content		: $marker.html()
      });
  
      // show info window when marker is clicked
      google.maps.event.addListener(marker, 'click', function() {
  
        infowindow.open( map, marker );
  
      });
    }
  
  }
  
  /*
  *  center_map
  *
  *  This function will center the map, showing all markers attached to this map
  *
  *  @type	function
  *  @date	8/11/2013
  *  @since	4.3.0
  *
  *  @param	map (Google Map object)
  *  @return	n/a
  */
  
  function center_map( map ) {
  
    // vars
    var bounds = new google.maps.LatLngBounds();
  
    // loop through all markers and create bounds
    $.each( map.markers, function( i, marker ){
  
      var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );
  
      bounds.extend( latlng );
  
    });
  
    // only 1 marker?
    if( map.markers.length == 1 )
    {
      // set center of map
        map.setCenter( bounds.getCenter() );
        map.setZoom( 16 );
    }
    else
    {
      // fit to bounds
      map.fitBounds( bounds );
    }
  
  }
  
  /*
  *  document ready
  *
  *  This function will render each map when the document is ready (page has loaded)
  *
  *  @type	function
  *  @date	8/11/2013
  *  @since	5.0.0
  *
  *  @param	n/a
  *  @return	n/a
  */
  // global var
  var map = null;
  
  $(document).ready(function(){
  
    $('.acf-map').each(function(){
  
      // create map
      map = new_map( $(this) );
  
    });
  
  });
  
  })(jQuery);



