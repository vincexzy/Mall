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

$("#backtop").click(function () {
  $(this).css("background-position-x","-38px");
  console.log($(window).scrollTop());
  console.log($(window).height());
  $("html").animate({
    scrollTop:0
  },800);
});
$(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
  console.log($(window).scrollTop());
       if ($(window).scrollTop() > 0)
           $("#backtop").fadeIn();
       else
            $("#backtop").fadeOut();
   });
