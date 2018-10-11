//公共方法

//碰撞检测
//飞机 obj
function crashTest(obj1,obj2){
	//obj1.ele   飞机div 飞机节点
	//水平的位移
	var  leftSide = obj1.offsetLeft - obj2.offsetWidth/2;
	var  rightSide = obj1.offsetLeft + obj1.offsetWidth + obj2.offsetWidth/2;
	
	var midX = obj2.offsetWidth/2 +obj2.offsetLeft;
	//垂直方向
	var  topSide = obj1.offsetTop - obj2.offsetHeight/2;
	var  bottomSide = obj1.offsetTop + obj1.offsetHeight + obj2.offsetHeight/2;
	
	var midY = obj2.offsetHeight/2 +obj2.offsetTop;
	
	if(leftSide<midX && rightSide> midX && topSide<midY && bottomSide>midY){
		return true;
	}else{
		return false;
	}
}

function crashTest2(obj1,obj2){


	//范围:(三点)

	var left1=[obj1.offsetLeft,obj1.offsetTop+obj1.offsetHeight];

	var top1=[obj1.offsetLeft+obj1.offsetWidth*0.5,obj1.offsetTop];

    var right1=[obj1.offsetLeft+obj1.offsetWidth,obj1.offsetTop+obj1.offsetHeight];

	//范围:(三条边界)

	var y1=obj2.offsetTop;
    var x2=obj2.offsetLeft+obj2.offsetWidth;
    var y2=obj2.offsetTop+obj2.offsetHeight;
    var x3=obj2.offsetLeft;
    var y3=obj2.offsetTop+obj2.offsetHeight;

    flag1=(y1<=left1[1]);		//没问题
    flag2=(y2>=((x2-left1[0])*(top1[1]-left1[1])/(top1[0]-left1[0]))+left1[1]);
	flag3=(y3>=((x3-right1[0])*(top1[1]-right1[1])/(top1[0]-right1[0]))+right1[1]);

    if(flag1 && flag2 && flag3){
        console.log("111");
        return true;
    }else{
        return false;
    }
}