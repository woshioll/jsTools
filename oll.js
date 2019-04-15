
//obj 做运动的元素
//attr 运动的时候改变的属性名称
//dir 做运动的方向 通过加一个负数来向左运动  加正数向右运动 每次运动几像素
//target 运动的目标位置
//符号不能作为参数传递
//
//回调函数 endFn callback
function doMove(obj,attr,dir,target,endfn){
    dir = parseInt(getstyle(obj,attr))<target?dir:-dir;
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var speed = parseInt(getstyle(obj,attr)) + dir;
        if(speed>target && dir>0){
            speed=target;
        }
        if(speed<target && dir<0){
            speed=target;
        }
    obj.style[attr] = speed+'px';
        if(speed == target){
            clearInterval(obj.timer);
            endfn && endfn();
        }
    },30)
}
//---------------------找元素---------------------------
function getstyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}
//--------------------------抖函数---------------------------
function shake(obj,attr,endfn){//存在隐患
    //问题：当shake()还没有结束的时候，我们获取到的就是元素当时运动所在的位置，此时，如果继续触发该函数，就会在上一次运动位置的基础上继续叠加数组中的值，所以会导致位置的偏移
    //思路：判断元素身上有没有onoff属性，如果是第一次执行，那么元素身上没有该属性
    if(obj.onOff)return;
    obj.onOff = true;
    var timer = null;
    var num = 0;
    var arr = [];
    //获取元素的left值
    var pos = parseInt(getstyle(obj,attr));
    
    for(var i=20;i>0;i-=2){
        arr.push(i,-i)
    }
    arr.push(0);
    clearInterval(timer);
    timer = setInterval(function(){
        obj.style[attr] = pos+arr[num]+'px';
        num++;
        if(num == arr.length){
            clearInterval(timer);
            endfn && endfn();
            obj.onOff = false;
        }
    },40)
}
//判断是不是纯数字
function dectectNum(str){
                var n=0;
                for(var i=0;i<str.length;i++){
                    n = str.charCodeAt(i)
                    if(n<48||n>57) return false;
                }
                return true;
            }
//随机时间函数
                function  randomInt(x,y){
                    return Math.round(Math.random()*(y-x>0?y-x:x-y)+(y-x>0?x:y));
                }
//事件绑定的第二种方法
        function bind(obj,evname,fn){
            if(obj.addEventListener){
                obj.addEventListener(evname,fn,false);
            }else{
                obj.attachEvent('on'+evname,function(){
                    fn.call(obj)
                })
            }
        }
        
        //拖拽
    function drag(obj){
                obj.onmousedown = function(ev){
                    var ev = ev||event;
                    var disX = ev.clientX-obj.offsetLeft;
                    var disY = ev.clientY-obj.offsetTop;
                    if(obj.setCapture){
                        obj.setCapture();
                    }
                    document.onmousemove = function(ev){
                        var ev = ev||event;
                        var a = ev.clientX-disX+'px';
                        var b = ev.clientY-disY+'px';
                        obj.style.left = a;
                        obj.style.top = b;
                    }
                    document.onmouseup = function(ev){
                        document.onmousemove = document.onmouseup = null;
                        if(obj.releaseCapture){
                            obj.releaseCapture();
                        }
                    }
                    return false;
                }
            }
    //设置cookie
            function setCookie(key,value,t){
                var oDate = new Date();
                oDate.setDate(oDate.getDate()+t)
                document.cookie = key+'='+value+';expires='+oDate.toGMTString();
            }
            //读取cookie
            function getCookie(key){
                var arr1 = document.cookie.split('; ');
                for(var i = 0;i<arr1.length;i++){
                    var arr2 = arr1[i].split('=')
                    if(arr2[0] == key){
                        return decodeURI(arr2[1])
                    }
                }
            }
            
            //获取元素在页面中的绝对位置。针对整个页面
            function getTop(obj) { 
                var iTop=0;
                while(obj){
                    iTop=obj.offsetTop;//获取的是相对于offsetparent属性的距离
                    obj=obj.offsetParent;
                }
                return iTop;
             }


             
             //设置cookie
            function setCookie(key,value,t){
                var oDate = new Date();
                oDate.setDate(oDate.getDate()+t)
                document.cookie = key+'='+value+';expires='+oDate.toGMTString();
            }
            //读取cookie
            function getCookie(key){
                var arr1 = document.cookie.split('; ');
                for(var i = 0;i<arr1.length;i++){
                    var arr2 = arr1[i].split('=')
                    if(arr2[0] == key){
                        return decodeURI(arr2[1])
                    }
                }
            }
            //删除cookie
            function removeCookie(key){
                setCookie(key,'',-1);
            }