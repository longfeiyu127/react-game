//生成子弹的方法
//由于子弹不是唯一的
//使用构造方法创建子弹

function Bullet(){
    this.ele=null;
    //初始化
    this.init=function (flag) {
        this.ele=document.createElement("div");
        this.ele.className="bullet";
        this.id=parseInt(Math.random()*1000)+"";    //子弹编号
        this.type=flag;         //true为主机子弹  false为敌机子弹
        if(flag){
            gameEngine.bullets[this.id]=this;
            //初始位置---由飞机当前位置确定
            this.ele.style.left=myPlane.ele.offsetLeft+46+"px";
            this.ele.style.top=myPlane.ele.offsetTop-18+"px";
        }else {
            this.ele.className="bossbullet ";
            gameEngine.boosBullets[this.id]=this;
            //初始位置---由飞机当前位置确定
            if(parseInt(Math.random()*2)){
                this.ele.style.left="155px";        //左边出子弹
            }else {
                this.ele.style.left="320px";        //右边出子弹
            }
            this.ele.style.top=Boos.ele.offsetTop+Boos.ele.offsetHeight-50+"px";
        }
        //添加到游戏引擎中
        gameEngine.ele.appendChild(this.ele);
        return this;
    };
    //发射方法
    this.move=function (_num) {
        var self=this;
        this.timer=setInterval(function () {
            if(self.type){
                self.ele.style.top=self.ele.offsetTop-8+"px";
            }else {
                switch (_num) {
                    case 0:self.ele.style.top=self.ele.offsetTop+8+"px";
                    break;
                    case 1:self.ele.style.top=self.ele.offsetTop+8+"px";
                            self.ele.style.left=self.ele.offsetLeft+2+"px";
                     break;
                    case 2:self.ele.style.top=self.ele.offsetTop+8+"px";
                        self.ele.style.left=self.ele.offsetLeft-2+"px";
                    break;
                }
            }
            //爆炸
            if(self.ele.offsetTop<-40||self.ele.offsetTop>750||self.ele.offsetLeft<0||self.ele.offsetLeft>724){
                clearInterval(self.timer);
                self.boom();
            }
        },50)
    };
    //爆炸的方法
    this.boom=function () {
        var self=this;
        var i=0;
        self.ele.style.width="40px";
        self.ele.style.height="43px";
        delete(gameEngine.bullets[self.id]);        //马上从列表中拿出来,避免在爆炸过程中继续检测碰撞
        this.timer2=setInterval(function () {
            //清掉第一个定时器
            clearInterval(self.timer);
            self.ele.style.background=" url(images/die"+(i%2+1)+".png) no-repeat";
            i++;
            //进行两次就停止
            if(i>=3){
                clearInterval(self.timer2);
                //自杀
                self.ele.remove();
            }
        },50)
    }

}
