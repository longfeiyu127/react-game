window.onload=function(){
   //获取元素
    var obox=document.getElementById('box');
    //随机生成50-150个小碎片
    //获得随机颜色
    for(var i=0; i<parseInt(Math.random()*100)+50; i++){
        var newdiv=obox.children[0].cloneNode(true);
        newdiv.style.background=rondomColor();
        obox.appendChild(newdiv)
    }
    //点击父元素动画上去
    obox.onclick=function(){
        //当父元素到达中部爆炸
        animate(obox,{"bottom":"450px"},function(){
            //父盒子消失

            //子元素获得随机运动方向
            for(var i=0; i<obox.children.length; i++){
                //获得left,top (在一定范围)  往外发散
                //到达随机位置,记录当前位置
                var oXY=rondomXY(150);
                animate(obox.children[i],oXY,function(){
                    // 开始下落一定位置 变淡
                    for(var i=0; i<obox.children.length; i++){
                        var oXx={
                            "top":parseInt(getStyle(obox.children[i],"top"))+100,
                            "opacity":0
                        };
                        animate(obox.children[i],oXx,function(){
                            //父盒子回到最初位置
                        })
                    }
                })
            }
        })
    }
};