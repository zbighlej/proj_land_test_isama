$ (document).ready(function () {
  $('.upper_map').hide();
  $('.upper_map_message').hide();
  $('.upper_map_phone').hide();
  $('.map').css('color','#1faae2');
  $(".owl-carousel").owlCarousel({
    items : 2,
    autoPlay : true,
    nav : true,
    rewindNav : true,
    rewindSpeed : 1000,
    navText : ["","<img src=\"img/arrownext.png\">"]
  });

});
/**


function item1() {
  $('.slider_big').css('background','url(img/slider_big.png)');
}
function item2() {
  $('.slider_big').css('background','url(img/slider_big_2.png)');
}
function item3() {
  $('.slider_big').css('background','url(img/slider_big_3.png)');
}
function item4() {
  $('.slider_big').css('background','url(img/slider_big_4.png)');
}
function item5() {
  $('.slider_big').css('background','url(img/slider_big_5.png)');
}
function item6() {
  $('.slider_big').css('background','url(img/slider_big_6.png)');
}
*/
function phone() {
  $('.phone').css('color','#1faae2');
  $('.map').css('color','#6d6e71');
  $('.message').css('color','#6d6e71');
  $('.upper_message_phone').css('display','block');
  $('.upper_message').css('display','none');
  $('.upper_message_message').css('display','none');

}
function map() {
  $('.map').css('color','#1faae2');
  $('.phone').css('color','#6d6e71');
  $('.message').css('color','#6d6e71');
  $('.upper_message').css('display','block');
  $('.upper_message_phone').css('display','none');
  $('.upper_message_message').css('display','none');

}
function message() {
  $('.message').css('color','#1faae2');
  $('.phone').css('color','#6d6e71');
  $('.map').css('color','#6d6e71');
  $('.upper_message_message').css('display','block');
  $('.upper_message').css('display','none');
  $('.upper_message_phone').css('display','none');

}
//filter block 3

  $(".all").click(function (eve) {
  $("[class*=our_project_item]").show();
  eve.preventDefault();
});

$(".mobile").click(function (eve) {
  $("[class*=our_project_item]").hide();
  $("[class*=mobile_item]").show();
  eve.preventDefault();
});

$(".identities").click(function (eve) {
  $("[class*=our_project_item]").hide();
  $("[class*=identities_item]").show();
  eve.preventDefault();
});

$(".interior").click(function (eve) {
  $("[class*=our_project_item]").hide();
  $("[class*=interior_item]").show();
  eve.preventDefault();
});

$(".uxui").click(function (eve) {
  $("[class*=our_project_item]").hide();
  $("[class*=uxui_item]").show();
  eve.preventDefault();
});

//buttonupp v2.0
var $upperbutton = $("#myBtn");
$(window).on("scroll", function () {
  if ($(window).scrollTop() >= 2000){
      $upperbutton.fadeIn();
}else {
  $upperbutton.fadeOut();
}
});

$upperbutton.on("click", function(){
$('html,body').animate({scrollTop:0}, 900)
});





//button up
/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

*/
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.295124, lng: 25.939908},
    zoom: 13,
    scrollwheel: true,
    disableDefaultUI: true,
    styles:
    [
{
"elementType": "geometry",
"stylers": [
 {
   "color": "#f5f5f5"
 }
]
},
{
"elementType": "labels.icon",
"stylers": [
 {
   "visibility": "off"
 }
]
},
{
"elementType": "labels.text.fill",
"stylers": [
 {
   "color": "#616161"
 }
]
},
{
"elementType": "labels.text.stroke",
"stylers": [
 {
   "color": "#f5f5f5"
 }
]
},
{
"featureType": "administrative.land_parcel",
"elementType": "labels.text.fill",
"stylers": [
 {
   "color": "#bdbdbd"
 }
]
},
{
"featureType": "poi",
"elementType": "geometry",
"stylers": [
 {
   "color": "#eeeeee"
 }
]
},
{
"featureType": "poi",
"elementType": "labels.text.fill",
"stylers": [
 {
   "color": "#757575"
 }
]
},
{
"featureType": "poi.park",
"elementType": "geometry",
"stylers": [
 {
   "color": "#e5e5e5"
 }
]
},
{
"featureType": "poi.park",
"elementType": "labels.text.fill",
"stylers": [
 {
   "color": "#9e9e9e"
 }
]
},
{
"featureType": "road",
"elementType": "geometry",
"stylers": [
 {
   "color": "#ffffff"
 }
]
},
{
"featureType": "road.arterial",
"elementType": "labels.text.fill",
"stylers": [
 {
   "color": "#757575"
 }
]
},
{
"featureType": "road.highway",
"elementType": "geometry",
"stylers": [
 {
   "color": "#dadada"
 }
]
},
{
"featureType": "road.highway",
"elementType": "labels.text.fill",
"stylers": [
 {
   "color": "#616161"
 }
]
},
{
"featureType": "road.local",
"elementType": "labels.text.fill",
"stylers": [
 {
   "color": "#9e9e9e"
 }
]
},
{
"featureType": "transit.line",
"elementType": "geometry",
"stylers": [
 {
   "color": "#e5e5e5"
 }
]
},
{
"featureType": "transit.station",
"elementType": "geometry",
"stylers": [
 {
   "color": "#eeeeee"
 }
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
 {
   "color": "#c9c9c9"
 }
]
},
{
"featureType": "water",
"elementType": "labels.text.fill",
"stylers": [
 {
   "color": "#9e9e9e"
 }
]
}
]
});

      marker = new google.maps.Marker({
      position: {lat: 48.295124, lng: 25.939908},
      map: map,
      icon: 'img/marker.png'
  });
}


//map nav

$(".map_location").click(function (eve) {
  $("[class*=upper_mapphone]").hide();
  $("[class=upper_map]").show();
  eve.preventDefault();
});

$(".map_phone").click(function (eve) {
  $("[class=upper_map]").hide();
  $("[class*=upper_mapphone]").show();
  eve.preventDefault();
});
