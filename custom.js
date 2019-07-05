jQuery(function ($) {
    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(250);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown").removeClass("active");
            $(this).parent().removeClass("active")
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this).next(".sidebar-submenu").slideDown(250);
            $(this).parent().addClass("active")
        }
    });
    $("#toggle-sidebar").click(function () {
        $(".page-wrapper").toggleClass("toggled")
    });
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".sidebar-content").mCustomScrollbar({
            axis: "y",
            autoHideScrollbar: true,
            scrollInertia: 300
        });
        $(".sidebar-content").addClass("desktop")
    }
});
var timer1 = null;
var timer2 = null;
var timer3 = null;
var timer4 = null;
var timer5 = null;

function testIp(obj) {
    var reg = /(^$)|^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    if (!reg.test(obj.value)) {
        // $(obj).parent().parent().addClass("has-error")
        // $(obj).parent().parent().find('.red').show()
        $(obj).next().html(1)
    } else {
        // $(obj).parent().parent().removeClass("has-error")
        // $(obj).parent().parent().find('.red').hide()
        $(obj).next().html(0)
    }
}

function testMask(obj) {
    var reg = /(^$)|^(254|252|248|240|224|192|128|0)\.0\.0\.0$|^(255\.(254|252|248|240|224|192|128|0)\.0\.0)$|^(255\.255\.(254|252|248|240|224|192|128|0)\.0)$|^(255\.255\.255\.(254|252|248|240|224|192|128|0))$/;
    if (!reg.test(obj.value)) {
        // $(obj).parent().parent().addClass("has-error")
        // $(obj).parent().parent().find('.red').show()
        $(obj).next().html(1)
    } else {
        // $(obj).parent().parent().attr("class", "form-group")
        // $(obj).parent().parent().find('.red').hide()
        $(obj).next().html(0)
    }
}

function startup(time, respond) {
    $(".userStat").html("");
    $(".userStat").append('<div class="container alert alert-info alert-dismissible USText" role="alert"><strong>正在操作</strong> 请稍候，期间请勿刷新页面……<span class="jdt"><div class="progress" id="tyjdt"> <div class="progress-bar progress-bar-success active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 0%"> </div> </div></span></div><div class="container alert alert-success alert-dismissible USsuc" role="alert"><strong>操作成功</strong></div><div class="container alert alert-warning alert-dismissible USwar" role="alert"><strong>操作失败，请检查后重试</strong></div><div class="modal fade loading mask" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false"></div>');
    shutdown(time);
    waitSec(time);
    var sudo = time / 100;
    wait(sudo + 2);
    $(".USText").show();
    $("#myModal").modal("show");
    if (respond == "true") {
        $(".USsuc").addClass("oll")
    } else {
        if (respond == "false") {
            $(".USwar").addClass("oll")
        } else {
            if (respond == "xh") {}
        }
    }
}

function shutdown(time) {
    timer4 = setInterval(function () {
        $(".USText").slideUp();
        $(".oll").show()
    }, time);
    timer1 = setInterval(function () {
        $("#myModal").modal("hide");
        $(".oll").slideUp();
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
        clearInterval(timer4);
        clearInterval(timer5)
    }, time + 1000)
}

function wait(sudo) {
    var S = 0;
    timer5 = setInterval(function () {
        if (sudo == '52') {
            S > 99 ? S = 100 : S += 1.5
        } else {
            S > 99 ? S = 100 : S += 1.1
        }
        $('.active').attr('style', 'width:' + S + '%')
    }, sudo)
}

function waitSec(time) {
    var i = time / 1000;
    $(".waitSec").html(i);
    timer3 = setInterval(function () {
        $(".waitSec").html(i - 1);
        i--
    }, 1000)
}

function logout() {
    window.sessionStorage.removeItem("login")
    window.sessionStorage.removeItem("message")
};

function canclk() {
    window.sessionStorage.removeItem("noclk")
};

function noclk() {
    sessionStorage.setItem('noclk', 'true');
};

(function ($) {
    $.extend({
        NV: function (name) {
            var NV = {};
            var UA = navigator.userAgent.toLowerCase();
            try {
                NV.name = (UA.indexOf("firefox") > 0) ? 'firefox' : (UA.indexOf("chrome") > 0) ? 'chrome' : 'unkonw'
            } catch (e) {};
            try {
                NV.version = (NV.name == 'ie') ? UA.match(/msie ([\d.]+)/)[1] : (NV.name == 'firefox') ? UA.match(/firefox\/([\d.]+)/)[1] : (NV.name == 'chrome') ? UA.match(/chrome\/([\d.]+)/)[1] : (NV.name == 'opera') ? UA.match(/opera.([\d.]+)/)[1] : (NV.name == 'safari') ? UA.match(/version\/([\d.]+)/)[1] : '0'
            } catch (e) {};
            try {
                NV.shell = (UA.indexOf('360ee') > -1) ? '360极速浏览器' : (UA.indexOf('360se') > -1) ? '360安全浏览器' : (UA.indexOf('se') > -1) ? '搜狗浏览器' : (UA.indexOf('aoyou') > -1) ? '遨游浏览器' : (UA.indexOf('theworld') > -1) ? '世界之窗浏览器' : (UA.indexOf('worldchrome') > -1) ? '世界之窗极速浏览器' : (UA.indexOf('greenbrowser') > -1) ? '绿色浏览器' : (UA.indexOf('qqbrowser') > -1) ? 'QQ浏览器' : (UA.indexOf('baidu') > -1) ? '百度浏览器' : '未知或无壳'
            } catch (e) {}
            switch (name) {
                case 'ua':
                case 'UA':
                    br = UA;
                    break;
                case 'name':
                    br = NV.name;
                    break;
                case 'version':
                    br = NV.version;
                    break;
                case 'shell':
                    br = NV.shell;
                    break;
                default:
                    br = NV.name
            }
            return br
        }
    })
})(jQuery);

function setCookie(key, value, t) {
    var oDate = new Date();
    oDate.setSeconds(oDate.getSeconds() + t);
    document.cookie = key + '=' + value + ';expires=' + oDate.toGMTString()
}

function getCookie(key) {
    var arr1 = document.cookie.split('; ');
    for (var i = 0; i < arr1.length; i++) {
        var arr2 = arr1[i].split('=');
        if (arr2[0] == key) {
            return decodeURI(arr2[1])
        }
    }
}

function removeCookie(key) {
    setCookie(key, '', -1)
}! function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.autosize = t()
}(this, function () {
    function e(e) {
        function t() {
            var t = window.getComputedStyle(e, null);
            "vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), e.style.wordWrap = "break-word";
            var i = e.style.width;
            e.style.width = "0px", e.offsetWidth, e.style.width = i, n = "none" !== t.maxHeight ? parseFloat(t.maxHeight) : !1, r = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), o()
        }

        function o() {
            var t = e.style.height,
                o = document.documentElement.scrollTop,
                i = document.body.scrollTop;
            e.style.height = "auto";
            var s = e.scrollHeight + r;
            if (n !== !1 && s > n ? (s = n, "scroll" !== e.style.overflowY && (e.style.overflowY = "scroll")) : "hidden" !== e.style.overflowY && (e.style.overflowY = "hidden"), e.style.height = s + "px", document.documentElement.scrollTop = o, document.body.scrollTop = i, t !== e.style.height) {
                var d = document.createEvent("Event");
                d.initEvent("autosize.resized", !0, !1), e.dispatchEvent(d)
            }
        }
        if (e && e.nodeName && "TEXTAREA" === e.nodeName && !e.hasAttribute("data-autosize-on")) {
            var n, r;
            "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", o), window.addEventListener("resize", o), e.addEventListener("input", o), e.addEventListener("autosize.update", o), e.addEventListener("autosize.destroy", function (t) {
                window.removeEventListener("resize", o), e.removeEventListener("input", o), e.removeEventListener("keyup", o), e.removeEventListener("autosize.destroy"), Object.keys(t).forEach(function (o) {
                    e.style[o] = t[o]
                }), e.removeAttribute("data-autosize-on")
            }.bind(e, {
                height: e.style.height,
                overflow: e.style.overflow,
                overflowY: e.style.overflowY,
                wordWrap: e.style.wordWrap,
                resize: e.style.resize
            })), e.setAttribute("data-autosize-on", !0), e.style.overflow = "hidden", e.style.overflowY = "hidden", t()
        }
    }
    return "function" != typeof window.getComputedStyle ? function (e) {
        return e
    } : function (t) {
        return t && t.length ? Array.prototype.forEach.call(t, e) : t && t.nodeName && e(t), t
    }
});

function reloadNow(){
    window.location.reload()
}