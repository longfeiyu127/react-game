
//随机颜色函数(返回随机函数)
function rondomColor(){
    var color = "";
    return color = "rgb(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + ")";
}

//获取滚动Scroll的值
function getScroll(){
    if(window.pageYOffset!=null){
        //兼容IE
        return {top:window.pageYOffset,left:window.pageXOffset};
    }else if(document.compatMode!="CSS1Compat"){
        //没有声明DTD
        return{top:window.body.scrollTop,left:window.body.scrollLeft}
    }
    return{
        // 支持 google IE
        top : document.documentElement.scrollTop,
        left : document.documentElement.scrollLeft
    }
}

//获取样式
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr]
    }
    return ele.currentStyle[attr]
}

//动画
function animate(obj,json,callback){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var flag=true;
        for (var key in json) {
            var value=0;
            var current=0;
            if(key=="opacity"){
                value=(json[key])*100;
                current=Math.round(getStyle(obj, key)*100);
            }else {
                value=parseInt(json[key]);
                current=parseInt(getStyle(obj, key));
            }
            var step=(value-current)/10;
            step=step>0?Math.ceil(step):Math.floor(step);
            if(key=="opacity"){
                obj.style[key]=(current+step)/100;
            }else {
                obj.style[key]=current+step+"px";
            }
            if(current!=value){
                flag=false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }
    },10)
}

//获得随机top left  半径内
function rondomXY(r){
    var x=parseInt(Math.random()*2)==1?Math.random():-Math.random();
    var y=parseInt(Math.random()*2)==1?Math.sqrt(1-x*x)+Math.pow(x*x,0.3333):-Math.sqrt(1-x*x)+Math.pow(x*x,0.3333);
    x=parseInt(x*r);
    y=-parseInt(y*r);
    return {
        "left":x,
        "top":y
    }
}


//获得随机 L
function rondomL(r){
    var x=Math.random()+0.2;
    var y=Math.pow(x,-1);
    x=parseInt(x*r)-r;
    y=-parseInt(y*r*0.5)+r;
    return {
        "left":x,
        "top":y
    }
}
function rondomO(r){
    var x=Math.random()*2-1;
    var y=Math.random()>0.5?Math.pow((1-x*x),0.5):-Math.pow((1-x*x),0.5);
    x=parseInt(x*r*0.5);
    y=-parseInt(y*r*0.5);
    return {
        "left":x,
        "top":y
    }
}

function rondomV(r){
    var x=Math.random()*2-1;
    var y=Math.abs(2*x);
    x=parseInt(x*1.3*r);
    y=-parseInt(y*1.3*r)+r;
    return {
        "left":x,
        "top":y
    }
}

function rondomE(r){
    var y=Math.random()*6-1.3;
    var x=-3*Math.abs(Math.cos(y));
    x=parseInt(x*r*0.6)+0.7*r;
    y=parseInt(y*r*0.5)-0.7*r;
    return {
        "left":x,
        "top":y
    }
}
