
//obj ���˶���Ԫ��
//attr �˶���ʱ��ı����������
//dir ���˶��ķ��� ͨ����һ�������������˶�  �����������˶� ÿ���˶�������
//target �˶���Ŀ��λ��
//���Ų�����Ϊ��������
//
//�ص����� endFn callback
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
//---------------------��Ԫ��---------------------------
function getstyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}
//--------------------------������---------------------------
function shake(obj,attr,endfn){//��������
    //���⣺��shake()��û�н�����ʱ�����ǻ�ȡ���ľ���Ԫ�ص�ʱ�˶����ڵ�λ�ã���ʱ��������������ú������ͻ�����һ���˶�λ�õĻ����ϼ������������е�ֵ�����Իᵼ��λ�õ�ƫ��
    //˼·���ж�Ԫ��������û��onoff���ԣ�����ǵ�һ��ִ�У���ôԪ������û�и�����
    if(obj.onOff)return;
    obj.onOff = true;
    var timer = null;
    var num = 0;
    var arr = [];
    //��ȡԪ�ص�leftֵ
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
//�ж��ǲ��Ǵ�����
function dectectNum(str){
                var n=0;
                for(var i=0;i<str.length;i++){
                    n = str.charCodeAt(i)
                    if(n<48||n>57) return false;
                }
                return true;
            }
//���ʱ�亯��
                function  randomInt(x,y){
                    return Math.round(Math.random()*(y-x>0?y-x:x-y)+(y-x>0?x:y));
                }
//�¼��󶨵ĵڶ��ַ���
        function bind(obj,evname,fn){
            if(obj.addEventListener){
                obj.addEventListener(evname,fn,false);
            }else{
                obj.attachEvent('on'+evname,function(){
                    fn.call(obj)
                })
            }
        }
        
        //��ק
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
    //����cookie
            function setCookie(key,value,t){
                var oDate = new Date();
                oDate.setDate(oDate.getDate()+t)
                document.cookie = key+'='+value+';expires='+oDate.toGMTString();
            }
            //��ȡcookie
            function getCookie(key){
                var arr1 = document.cookie.split('; ');
                for(var i = 0;i<arr1.length;i++){
                    var arr2 = arr1[i].split('=')
                    if(arr2[0] == key){
                        return decodeURI(arr2[1])
                    }
                }
            }
            
            //��ȡԪ����ҳ���еľ���λ�á��������ҳ��
            function getTop(obj) { 
                var iTop=0;
                while(obj){
                    iTop=obj.offsetTop;//��ȡ���������offsetparent���Եľ���
                    obj=obj.offsetParent;
                }
                return iTop;
             }


             
             //����cookie
            function setCookie(key,value,t){
                var oDate = new Date();
                oDate.setDate(oDate.getDate()+t)
                document.cookie = key+'='+value+';expires='+oDate.toGMTString();
            }
            //��ȡcookie
            function getCookie(key){
                var arr1 = document.cookie.split('; ');
                for(var i = 0;i<arr1.length;i++){
                    var arr2 = arr1[i].split('=')
                    if(arr2[0] == key){
                        return decodeURI(arr2[1])
                    }
                }
            }
            //ɾ��cookie
            function removeCookie(key){
                setCookie(key,'',-1);
            }