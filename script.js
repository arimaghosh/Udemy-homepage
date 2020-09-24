$(".fa-bars").click(function(){
  $(".navbar-collapse").css("display","block");
  $("#close").css("display","block");
  $("#close").click(function(){
    $(".navbar-collapse").css("display","none");
    $("#close").css("display","none");
});
});
