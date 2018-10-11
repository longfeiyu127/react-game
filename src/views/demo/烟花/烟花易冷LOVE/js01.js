window.onload=function(){
    var oobox1=document.getElementById('oobox1');
    var oobox2=document.getElementById('oobox2');
    var oobox3=document.getElementById('oobox3');
    var oobox4=document.getElementById('oobox4');
    var flag=true;
    var  timer1=setInterval(fun(oobox1,flag,rondomL),1000);
    var  timer2=setInterval(fun(oobox2,flag,rondomXY),1000);
    var  timer3=setInterval(fun(oobox3,flag,rondomV),1000);
    var  timer4=setInterval(fun(oobox4,flag,rondomE),1000);
};
function fun(oobox,flag,fun){
    //生成元素
    if(flag){
        flag=false;
        var obox=document.createElement("ul");
        oobox.appendChild(obox);
        //随机生成50-150个小碎片
        //获得随机颜色
        for(var i=0; i<parseInt(Math.random()*50)+50; i++){
            var newdiv=document.createElement('li');
            newdiv.style.background=rondomColor();
            obox.appendChild(newdiv)
        }
        //当父元素到达中部爆炸
        animate(obox,{"bottom":"450px"},function(){
            //父盒子消失
            //子元素获得随机运动方向
            for(var i=0; i<obox.children.length; i++){
                //获得left,top (在一定范围)  往外发散
                //到达随机位置,记录当前位置
                var oXY=fun(100);
                animate(obox.children[i],oXY,function(){
                    // 开始下落一定位置 变淡
                    for(var i=0; i<obox.children.length; i++){
                        var oXx={
                            "top":parseInt(getStyle(obox.children[i],"top"))+100,
                            "opacity":0
                        };
                        animate(obox.children[i],oXx,function(){
                            //父盒子自杀
                            obox.remove();
                            flag=true;
                        })
                    }
                })
            }
        });
    }
}