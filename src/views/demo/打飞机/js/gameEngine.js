//游戏控制器
//唯一的 
//单例模式
//使用字面量构造对象的时候  构造的对象是唯一的  不可能有相同的对象
gameEngine = {
    ele:null,
    //获取界面元素
    init:function () {
        this.ele=document.getElementById('main_body');
        return this
    },
    //开始界面      进度条
    start:function () {
        this.ele.innerHTML="<div class='logo'></div>";
        this.ele.innerHTML+="<div class='loading'></div>";
        var loading=document.getElementsByClassName("loading")[0];
        //定时器  让小飞机变化背景图片
        var i=0;
        var self=this;
        var timer=setInterval(function () {
            loading.style.background="url(images/loading"+(i%3+1)+".png) no-repeat";
            i++;
            //进行两次就停止
            if(i>=7){
                clearInterval(timer);
                //自杀
                self.ele.innerHTML="";
                self.initScore();       //初始化的得分
                myPlane.init();         //初始主机
                self.createEnemy(true);     //加载敌机
                self.createBoos();          //检测开启boos事件
            }
        },200)
    },
    //操作主机的方法
    keyControll:function () {
        document.body.onkeydown=function(evt){
            var e = evt || event;
            //边界判定
            if(e.keyCode==38){
                myPlane.ele.style.top=myPlane.ele.offsetTop<=0?0:myPlane.ele.offsetTop-10+"px";
            }
            if(e.keyCode==39){
                myPlane.ele.style.left=myPlane.ele.offsetLeft>=381?"381px":myPlane.ele.offsetLeft+10+"px";
            }
            if(e.keyCode==40){
                myPlane.ele.style.top=myPlane.ele.offsetTop>=650?"650px":myPlane.ele.offsetTop+10+"px";
            }
            if(e.keyCode==37){
                myPlane.ele.style.left=myPlane.ele.offsetLeft<=1?"1px":myPlane.ele.offsetLeft-10+"px";
            }
        }
    },

    //加载敌机//关闭加载敌机
    createEnemy:function (flag) {
       if(flag){
           this.timerEnemy=setInterval(function () {
               new Enamy().init(parseInt(Math.random()*10)).move();
           },2000)
       }else {
           clearInterval(this.timerEnemy);
       }
    },
    //子弹列表
    bullets:[],
    //敌机列表(含boos)
    enemys:[],
    //boos子弹列表
    boosBullets:[],
    //检查碰撞
    carsPlane:function () {
        //检查敌机与子弹
        var self=this;
         this.timerEnemy=setInterval(function () {
            for(var i in self.enemys){
                //敌机与子弹
                for(var j in self.bullets){
                    if(crashTest(self.enemys[i].ele,self.bullets[j].ele)){
                        self.bullets[j].boom();
                        self.enemys[i].hurt();
                    }
                }
                //敌机与主机
                if(crashTest2(myPlane.ele,self.enemys[i].ele)){
                    myPlane.boom();
                    //gameover
                }
            }
            //boos子弹和主机
             for (var k in self.boosBullets) {
                if(crashTest2(myPlane.ele,self.boosBullets[k].ele)){
                    self.boosBullets[k].boom();
                    myPlane.boom();
                    //gameover
                }
             }
        },50);
    },

    //计分功能
    score:null,
    SS:0,
    initScore:function () {
        this.score=document.createElement("div");
        this.score.className="score";
        //添加到页面中
        this.ele.appendChild(this.score);
        this.score.innerHTML="得分:0";
    },
    scoreChange:function (_num) {
        this.SS+=_num;
        this.score.innerHTML="得分:"+this.SS;
    },
    //判断得分  进入boss的关卡
    createBoos:function () {
        var self=this;
        this.timerBoos=setInterval(function () {
            if(self.SS>=20){
                clearInterval(self.timerEnemy);
                Boos.init(1).move();
                clearInterval(self.timerBoos)
            }
        },100)
    }
};


