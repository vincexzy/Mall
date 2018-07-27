$(".menu_box").mouseover(function () {
  $(this).find(".menu_sub").removeClass("bn");
});
$(".menu_box").mouseout(function () {
  $(this).find(".menu_sub").addClass("bn");
});



$(".recommendTab").click(function () {
  $(this).parent().children().css("border","none");
  $(this).css("border-bottom","2px solid #333");
  $(".job_list").children().css("display","none");
  $(".rec_posHotPosition").css("display","block");
});
$(".hotTab").click(function () {
  $(this).parent().children().css("border","none");
  $(this).css("border-bottom","2px solid #333");
  $(".job_list").children().css("display","none");
  $(".hot_posHotPosition").css("display","block");
});
$(".newTab").click(function () {
  $(this).parent().children().css("border","none");
  $(this).css("border-bottom","2px solid #333");
  $(".job_list").children().css("display","none");
  $(".new_posHotPosition").css("display","block");
});
