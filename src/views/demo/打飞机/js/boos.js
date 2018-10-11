//以后可能会增加boos
//唯一
Boos ={
    ele:null,
    init:function (_num) {
        this.num=_num;
        this.id=parseInt(Math.random()*1000)+"";    //子弹编号
        this.ele=document.createElement("div");
        gameEngine.enemys[this.id]=this;        //添加到子弹列表中去
        //判断是几号boss
        if(this.num==1){
            this.type=1;
            this.ele.className="boos1";
            this.hp=30;
            this.speed=2;
        }
        gameEngine.ele.appendChild(this.ele);
        //初始位置
        this.ele.style.left="144px";
        this.ele.style.top=this.ele.offsetHeight*(-1)+"px";
        gameEngine.ele.appendChild(this.ele);
        this. fire();
        return this
    },
    //boos移动
    move:function () {
        var self=this;
        this.timer=setInterval(function () {
            self.ele.style.top=self.ele.offsetTop+self.speed+"px";
            if(self.ele.offsetTop>10){
                clearInterval(self.timer);
            }
        },50)
    },
    //boos开火
    fire:function () {
        this.timerfire= setInterval(function () {
            new Bullet().init(false).move(parseInt(Math.random()*3));
        },200)
    },
    //boos受伤
    hurt:function () {
        this.hp--;
        if(this.hp==0){
            this.boom();
        }
    },
    //boos爆炸
    boom:function () {
        var self=this;
        var i=0;
        //清掉第一个定时器
        clearInterval(this.timer);
        //清掉开火
        clearInterval(this.timerfire);
        this.timer2=setInterval(function () {
            self.ele.style.background=" url(images/plane3_die"+(i%6+1)+".png) no-repeat";
            i++;
            //进行两次就停止
            if(i>=6){
                clearInterval(self.timer2);
                //得分
                gameEngine.scoreChange(self.type*15);
                //自杀
                self.ele.remove();
                //开启小敌机的定时器
                gameEngine.createEnemy(true);
            }
        },60)
    }
};
