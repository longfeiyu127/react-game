gameEngine={
    ele:null,
    flag:true,  //黑白棋子切换
    init:function (id) {
        this.ele=document.getElementById(id);
        //创建tr  td
        for(var i=0; i<15; i++){
            var newtr=document.createElement("tr");
            this.ele.appendChild(newtr);
            for(var j=0; j<15; j++){
                var newtd=document.createElement("td");
                newtd.index={x:i,y:j};  //添加坐标
                newtd.type=0;        //不存在棋子   0无 1白 2黑
                newtr.appendChild(newtd);
                //添加点击事件
                newtd.onclick=function () {
                    //判断是否存在棋子
                    if(!this.type){
                        //this.type=1/2;    //已经存在棋子    1白  2黑
                       var newPiece=document.createElement("div");
                        this.appendChild(newPiece);
                        if(gameEngine.flag=!gameEngine.flag){    //控制黑白棋
                            this.type=1;
                            newPiece.style.background="white"
                        }else {
                            this.type=2;
                            newPiece.style.background="black"
                        }
                        //判断胜负
                        gameEngine.Crosswise(this);
                        gameEngine.Vertical(this);
                        gameEngine.TopLeft(this);
                        gameEngine.TopRight(this);
                    }
                }
            }
        }
    },
    //判断胜负
    //1.横向
    Crosswise:function (ele) {
        //前面的相同棋子
        var index=ele.index;
        var type=ele.type;
        var prev=0;
        var next=0;
        console.log(index);
        for(var i=0; ; ){
            prev=i;
            i++;
            if(index.y-i<0||this.FindType(index.x,index.y-i)!=type){
                break
            }
        }
        for(var i=0;;){
            next=i;
            i++;
            if(index.y+i>15||this.FindType(index.x,index.y+i)!=type){
                break
            }
        }
        if(prev+next==4){
            this.Victory(type)
        }
    },
    //2.竖向
    Vertical:function (ele) {
        var index=ele.index;
        var type=ele.type;
        var prev=0;
        var next=0;
        console.log(index);
        for(var i=0; ; ){
            prev=i;
            i++;
            if(index.x-i<0||this.FindType(index.x-i,index.y)!=type){
                break
            }
        }
        for(var i=0;;){
            next=i;
            i++;
            if(index.x+i>15||this.FindType(index.x+i,index.y)!=type){
                break
            }
        }
        if(prev+next==4){
            this.Victory(type)
        }
    },
    //3.左上至右下
    TopLeft:function (ele) {
        var index=ele.index;
        var type=ele.type;
        var prev=0;
        var next=0;
        console.log(index);
        for(var i=0; ; ){
            prev=i;
            i++;
            if(index.x-i<0||this.FindType(index.x-i,index.y-i)!=type){
                break
            }
        }
        for(var i=0;;){
            next=i;
            i++;
            if(index.x+i>15||this.FindType(index.x+i,index.y+i)!=type){
                break
            }
        }
        if(prev+next==4){
            this.Victory(type)
        }
    },
    //4.右上至左下
    TopRight:function (ele) {
        var index=ele.index;
        var type=ele.type;
        var prev=0;
        var next=0;
        console.log(index);
        for(var i=0; ; ){
            prev=i;
            i++;
            if(index.x-i<0||this.FindType(index.x-i,index.y+i)!=type){
                break
            }
        }
        for(var i=0;;){
            next=i;
            i++;
            if(index.x+i>15||this.FindType(index.x+i,index.y-i)!=type){
                break
            }
        }
        if(prev+next==4){
            this.Victory(type)
        }
    },


    //找儿子的棋子类型
    FindType:function (x,y) {
        return this.ele.children[x].children[y].type
    },
    //胜利
    Victory:function (type) {
        if(type==1){
            alert("白棋胜利")
        }else {
            alert("黑棋胜利")
        }
        window.location.href="wuziqi.html"
    }
};