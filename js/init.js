$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.dropdown-trigger').dropdown();
  let thisfilefullname = $(location).attr('href').substring(document.URL.lastIndexOf("/") + 1, document.URL.length);
  if(thisfilefullname=="sub-card.html"){
    $('#waterfall').NewWaterfall({
      width: 300, 
      delay: 30,
      repeatShow: false    
    });
  }

});

function volumeControl(val) {
  $("#video-banner").prop('muted', val);
  $("#mute-btn").toggle();
  $("#unmute-btn").toggle();
};

$("#main-navbar li.more").mouseenter(function () {
  let subName = $(this).addClass("active").attr("id").replace("menu","sub");
  $(this).siblings().removeClass("active");
  $("#sub-navbar").show();
  $("#" + subName).show().siblings().hide();  
});
$("#main-navbar li").not(".more").mouseenter(function () {
  let subName = $(this).addClass("active");
  $(this).siblings().removeClass("active");
  $("#sub-navbar").hide(); 
});
$(".navbar-fixed").mouseleave(function () {
  $("#sub-navbar").hide();
  $("#main-navbar li").removeClass("active");
});

$("#nav-mobile > li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(this).children("ul").show();
  $(this).siblings().children("ul").hide();

});

$("#more-sitemap").click(function () {
  $("#second-sitemap").toggle();
  $("#more-sitemap").hide();
});

$("#mute-btn").click(function () {
  volumeControl(false);
});

$("#unmute-btn").click(function () {
  volumeControl(true);
});


// Origin: https://pawelgrzybek.com/background-video-made-easy/
var banner = document.querySelector('.banner');
var bannerVideo = document.querySelector('.banner__video');

if (/iPad|iPhone|iPod/.test(navigator.platform)) {
  banner.style.backgroundImage = 'url("' + bannerVideo.poster + '")';
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';
  bannerVideo.style.display = 'none';
}