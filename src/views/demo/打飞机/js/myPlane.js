//用户飞机的生成方法
//唯一
myPlane = {
    //属性  元素节点
    ele:null,
    //初始化
    init:function () {
        this.ele=document.createElement("div");
        gameEngine.ele.appendChild(this.ele);
        this.ele.className="myplane";
        this.ele.style.left="191px";
        this.ele.style.top=document.body.clientHeight-122+"px";
        gameEngine.keyControll();
        this.fire();
        gameEngine.carsPlane();     //开启碰撞检查
        return this;
    },
    //方法
    //产生子弹
    fire:function () {
        this.timer= setInterval(function () {
           new Bullet().init(true).move();
        },this.bulletSpeed)
    },

    //爆炸
    boom:function () {
        clearInterval(gameEngine.timerEnemy);
        var self=this;
        var i=0;
        this.timer2=setInterval(function () {
            //清掉第一个定时器
            clearInterval(self.timer);  //关闭开火的定时器
            self.ele.style.background=" url(images/me_die"+(i%4+1)+".png) no-repeat";
            i++;
            //进行两次就停止
            if(i>=5){
                clearInterval(self.timer2);
                //自杀
                self.ele.remove();
                alert("游戏结束!你的得分:"+gameEngine.SS);
                window.location.href="dafeiji.html"
            }
        },50)
    }
};
