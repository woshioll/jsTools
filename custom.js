 jQuery(function ($) {

     $(".sidebar-dropdown > a").click(function () {
         $(".sidebar-submenu").slideUp(250);
         if ($(this).parent().hasClass("active")) {
             $(".sidebar-dropdown").removeClass("active");
             $(this).parent().removeClass("active");
         } else {
             $(".sidebar-dropdown").removeClass("active");
             $(this).next(".sidebar-submenu").slideDown(250);
             $(this).parent().addClass("active");
         }

     });

     $("#toggle-sidebar").click(function () {
         $(".page-wrapper").toggleClass("toggled");
     });

     if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         $(".sidebar-content").mCustomScrollbar({
             axis: "y",
             autoHideScrollbar: true,
             scrollInertia: 300
         });
         $(".sidebar-content").addClass("desktop");

     }
 });

 var timer1 = null;
 var timer2 = null;
 var timer3 = null;
 var timer4 = null;
 function testIp(obj) {
     $(obj).keyup(function () {
         var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
         if (!reg.test(this.value)) {
             $(this).parent().parent().addClass("has-error");
         } else {
             $(this).parent().parent().attr("class", "form-group");
         };
     });

 }

<<<<<<< HEAD
 function startup(time) {
=======
<<<<<<< HEAD
 function startup(time) {
=======
 function startup(time,respond) {
>>>>>>> tool
>>>>>>> tools
     $('.userStat').html('');
     $('.userStat').append(`
     <div class="container alert alert-info alert-dismissible USText" role="alert">
         <strong>正在修改</strong> 请稍候 预计等待时间（<span class="waitSec"></span>）
         <span class="dasd"></span>
     </div>
     <div class="container alert alert-success alert-dismissible  USsuc" role="alert">
         <strong>修改成功</strong>
     </div>
     <div class="container alert alert-warning alert-dismissible  USwar" role="alert">
         <strong>修改失败，请重试</strong>
     </div>
     <div class="modal fade loading mask" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true" data-backdrop="static" data-keyboard="false"></div>`);
     addDasd();
     shutdown(time);
     waitSec(time);
     $(".USText").show();
     $("#myModal").modal('show');
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    respond?$(".USsuc").addClass('oll'):$(".USwar").addClass('oll')
>>>>>>> tool
>>>>>>> tools
 }

 function shutdown(time) {
     timer4 = setInterval(function () {
         $(".USText").slideUp()
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> tools
         $(".USwar").show()
     }, time)
     timer1 = setInterval(function () {
         $("#myModal").modal('hide');
         $(".USwar").slideUp()
<<<<<<< HEAD
=======
=======
         $('.oll').show()
     }, time)
     timer1 = setInterval(function () {
         $("#myModal").modal('hide');
         $('.oll').slideUp()
>>>>>>> tool
>>>>>>> tools
         clearInterval(timer1)
         clearInterval(timer2)
         clearInterval(timer3)
         clearInterval(timer4)
<<<<<<< HEAD
         Refresh();
=======
<<<<<<< HEAD
         Refresh();
=======
        //  Refresh();
>>>>>>> tool
>>>>>>> tools
     }, time+1000)
 }

 function addDasd() {
     var i = 0;
     timer2 = setInterval(function () {
         var dd = '';
         i++;
         i == 7 ? i = 0 : ''
         for (var j = 0; j <= i; j++) {
             $('.dasd').html = ''
             dd += '<span>' + '.' + '</span>'
         }
         $('.dasd').html(dd)
     }, 200)
 }

 function waitSec(time) {
     var i = time/1000;
     $('.waitSec').html(i)
     timer3 = setInterval(function () {
         $('.waitSec').html(i-1)
         i--;
     }, 1000)
 }