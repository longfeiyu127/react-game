//敌机的生成方法
//三种飞机
//big  mid small
function Enamy(){
	this.ele=null;
	//初始化
	this.init=function (_num) {
        this.num=_num;
        this.id=parseInt(Math.random()*1000)+"";    //子弹编号
        this.ele=document.createElement("div");
        gameEngine.enemys[this.id]=this;        //添加到子弹列表中去
        //初始位置
        if(this.num==9){
            this.type=3;
            this.ele.className="enemy-large";
            this.hp=10;
            this.speed=2;
        }else if(this.num<=5){
            this.type=1;
            this.ele.className="enemy-small";
            this.hp=1;
            this.speed=8;
        }else {
            this.type=2;
            this.ele.className="enemy-middle";
            this.hp=5;
            this.speed=4;
		}
        gameEngine.ele.appendChild(this.ele);
        //初始位置
        this.ele.style.left=parseInt(Math.random()*(480-this.ele.offsetWidth))+"px";
        this.ele.style.top=this.ele.offsetHeight*(-1)+"px";
        gameEngine.ele.appendChild(this.ele);
		return this
    };
	this.move=function () {
        var self=this;
        this.timer=setInterval(function () {
            self.ele.style.top=parseInt(self.ele.style.top)+self.speed+"px";
            if(self.ele.offsetTop>gameEngine.ele.offsetHeight){
                clearInterval(self.timer);
                self.boom();
            }
        },60)
    };
	//飞机受伤
    this.hurt=function () {
        this.hp--;
        if(this.hp==0){
            this.boom();
        }
    };
    //飞机爆炸
	this.boom=function () {
        var self=this;
        var i=0;
        this.timer2=setInterval(function () {
            //清掉第一个定时器
            clearInterval(self.timer);
            self.ele.style.background=" url(images/plane"+self.type+"_die"+(i%4+1)+".png) no-repeat";
            i++;
            //进行两次就停止
            if(i>=4){
                clearInterval(self.timer2);
                //得分
                gameEngine.scoreChange(self.type);
                //在子敌机列表中删除
                delete(gameEngine.enemys[self.id]);
                //自杀
                self.ele.remove();
            }
        },80)
    };
}

Enamy.prototype = {
	//飞机的类型
	Enamy_proto_type_big : 3,
	Enamy_proto_type_mid : 2,
	Enamy_proto_type_small : 1,
	//飞机的血量
	Enamy_proto_hp_big : 10,
	Enamy_proto_hp_mid : 5,
	Enamy_proto_hp_small : 1,
	//飞机的速度
	Enamy_proto_speed_big : 2,
	Enamy_proto_speed_mid : 4,
	Enamy_proto_speed_small : 8
};
