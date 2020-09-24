$(".closebtn").hide();
$(".display-business").hide();
$(".display-teach").hide();
$(".display-shop").hide();

$('.modal').on('show.bs.modal', function () {
  $("body").css('overflow-y', 'hidden');
  $("html").css('overflow-y', 'hidden');
});
$('.modal').on('hide.bs.modal', function () {
  $("body").css('overflow-y', 'auto');
  $("html").css('overflow-y', 'auto');
});

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  setTimeout(function(){
    $(".closebtn").show();
  },450);
  $("body").css('overflow-y', 'hidden');
  $("html").css('overflow-y', 'hidden');
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  $(".closebtn").hide();
  $(".closebtn").css("display","none");
  $("body").css('overflow-y', 'auto');
  $("html").css('overflow-y', 'auto');
  document.body.style.backgroundColor = "white";
}
$(".udemy-business").hover(function(){ //mouseenter
  $(".display-business").show();
}, function(){ //mouseleave
  $(".display-business").hide();
});

$(".udemy-teach").hover(function(){ //mouseenter
  $(".display-teach").show();
}, function(){ //mouseleave
  $(".display-teach").hide();
});

$(".udemy-shop").hover(function(){ //mouseenter
  $(".display-shop").show();
}, function(){ //mouseleave
  $(".display-shop").hide();
});
