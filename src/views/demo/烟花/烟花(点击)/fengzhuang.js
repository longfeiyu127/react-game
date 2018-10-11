/**
 * @method 生成5位验证码--数字.字母
 * @returns {string}
 */
function born() {
    var codes=[];
    for(var i=48;i<58;i++) {codes.push(i)}
    for(var i=65;i<91;i++) {codes.push(i)}
    for(var i=97;i<123;i++) {codes.push(i)}
    var str="";
    for(var i=0;i<5;i++){
        var index=Math.floor(Math.random()*62);
        var result=codes[index];
        str+=String.fromCharCode(result);

    }
    return str;
}

/**
 * @method 去掉字符串前后的空白
 * @param str
 * @returns {string|XML}
 * @constructor
 */
function Mytrim(str) {
    return str.replace(/^\s+/,"").replace(/\s+$/,"");
}

/**
 * @method getScroll
 * @returns {*}
 */
function myScroll() {
    //和浏览器有关
    if(window.pageXOffset!=null){
        return {
            left:window.pageXOffset,
            top:window.pageYOffset
        }
        //和DTD有关
    }else if(document.compatMode=="CSS1Compat"){
        return {
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }
    return {
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    }

}

/**
 * @method addEvent 函数
 * @param obj
 * @param type
 * @param fn
 * @param flag
 */
function addEvent(obj,type,fn,flag) {
    if(obj.addEventListener){
        obj.addEventListener(type,fn,flag);
    }else{
        window.attachEvent("on"+type,fn);
    }
}

/**
 * @getStyle()函数
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj,attr) {
    if(window.getComputedStyle){
        return  window.getComputedStyle(obj,null)[attr];
    }
    return obj.currentStyle[attr];
}

/**
 * @单个属性动画封装
 * @param obj
 * @param attr
 * @param target
 */
function singleAnimate(obj,attr,target) {
    clearInterval(obj.timer);
    obj.timer=setInterval(function()
    {var step=(target-parseInt(getStyle(obj,attr)))/10;
        step=step>0?Math.ceil(step):Math.floor(step);
        obj.style[attr]=parseInt(getStyle(obj,attr))+step+"px";
        if(parseInt(getStyle(obj,attr))==target){
            clearInterval(obj.timer);
        }
    },100)
}


/**
 * @method 多个属性动画 改装opacity 和z-index
 *
 * @param obj
 * @param json
 * @param callback
 */
// function animate(obj,json,callback) {
//     clearInterval(obj.timer);
//     obj.timer=setInterval(function()
//     {
//         var flag=true;//假设同时到达
//         for(var key in json){
// //                var target=parseInt(json[key]);
// //                var current=parseInt(getStyle(obj,key));
//             var target=0;
//             var current=0;
//             if(key=="opacity"){
//                 //先乘以100
//                 target=json[key]*100;
//                 current=Math.round(getStyle(obj,key)*100);
//             }else{
//                 target=parseInt(json[key]);
//                 current=parseInt(getStyle(obj,key));
//             }
//             var step=(target-current)/10;
//             step=step>0?Math.ceil(step):Math.floor(step);
//             if(key=="opacity"){
//                 obj.style.opacity=(current+step)/100;
//                 obj.style.filter="Alpha(Opacity="+(current+step)/100+")";
//             }else{
//                 obj.style[key]=current+step+"px";
//             }
//             // obj.style[key]=current+step+"px";
//             if(current!=target){
//                 flag=false;
//             }
//
//         }
//         if(flag==true){
//             clearInterval(obj.timer);
//             if(typeof(callback)=="function"){
//                 callback();
//             }
//         }
//     },100)
// }
//
function animate(obj,json,callback) {
    clearInterval(obj.timer);
    obj.timer=setInterval(function()
    {
        var flag=true;//假设同时到达
        for(var key in json){
//                var target=parseInt(json[key]);
//                var current=parseInt(getStyle(obj,key));
            var target=0;
            var current=0;
            if(key=="opacity"){
                //先乘以100
                target=json[key]*100;
                current=Math.round(getStyle(obj,key)*100);
            }else if(key!="zIndex"){
                target=parseInt(json[key]);
                current=parseInt(getStyle(obj,key));
            }
            var step=(target-current)/10;
            step=step>0?Math.ceil(step):Math.floor(step);
            if(key=="opacity"){
                obj.style.opacity=(current+step)/100;
                obj.style.filter="Alpha(Opacity="+(current+step)/100+")";
            }else if(key!="zIndex"){
                obj.style[key]=current+step+"px";
            }
            if(key=="zIndex"){
                obj.style.zIndex=Number(json[key]);
            }
            // obj.style[key]=current+step+"px";
            if(current!=target){
                flag=false;
            }

        }
        if(flag==true){
            clearInterval(obj.timer);
            if(typeof(callback)=="function"){
                callback(obj);
            }
        }
    },40)
}

/**
 * @method 生成n位随机数
 * @param n
 * @returns {string}
 */
// function randomNum(n){
//     var str = "";
//     for(var i = 0; i < n; i++){
//         str += parseInt(Math.random() * 10);
//     }
//     return str;
// }
//
// /**
//  * @method 生成随机颜色
//  * @returns {string}
//  */
// function randomColor(){
//     var color = "";   // rgb(23,233,253)
//     return color = "rgb(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + ")";
// }
//
// /**
//  * @method 倒计时
//  */
// setInterval(function(){
//     var date1 = new Date();
//     var date2 = new Date("2018-01-01: 0:00:0");
//     // 先把日期转成毫秒数,再相减
//     var times = date2.getTime() - date1.getTime(); //毫秒数
//     //console.log(times / 1000 / 60 / 60 / 24);
//     var ms = times % 1000;
//     var ss = parseInt(times / 1000) % 60;
//     var mm = parseInt(times / 1000 / 60) % 60;
//     var hh = parseInt(times / 1000 / 60 / 60) % 24;
//     var dd = parseInt(times / 1000 / 60 / 60 / 24)
//     var str = "倒计时:距离还有" + dd + "天" + hh + "小时" + mm + "分" + ss + "秒" + ms + "毫秒";
//     //        oBox.innerHTML = str.fontcolor("red");
//     oBox.innerHTML = "<font color='green'>" + str + "</font>"
// });
