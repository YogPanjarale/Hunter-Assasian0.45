var colors=["#3726A6",
"#F2BE22",
"#04BF8A",
"#F24607",
"#0583F2",
"#F29F05",
"#B29F10",
"#030140",
"#59302C"]
class Player {
	constructor(i,j,arr){
		this.image = 
		this.sprite =createSprite((i+1)*gb,(j+1)*gb,gb*0.5,gb*0.5); 
		this.sprite.shapeColor = colors[int(random(0,colors.length-1))]
		this.target={x:this.sprite.x,y:this.sprite.y}
		this.arr=arr
		this.idx=0
		this.pth =[[1,14],[1,13],[1,12],
		[1,11],[2,11],[3,11],
		[3,10],[3,9],[3,8],
		[3,7],[4,7],[5,7],
		[6,7],[6,8],[6,9],[5,9],
		[5,10],[5,11],[4,11],
		[4,12],[4,13],[5,13],
		[5,14],[5,15],[1,15],

	   ]
	   //this.pth=[]
	   
	}
	display(){
		drawSprites();
		 var i=gi(mouseX, mouseY),idx=this.idx
		 i=null
		 var pth=this.pth
		//console.log(pth)
		//replace pth with pathfinder result
		 if(pth){
			 if(idx<pth.length){
				 this.moveTo(pth[idx][0],pth[idx][1])
			}
			else{this.idx=0}
			}
		
			var t=this.target;var s =this.sprite;var speed=gb/8
		//console.log(gi(s.x,s.y),gi(t.x,t.y))
		var gs=gi(s.x,s.y),gt=gi(t.x,t.y)
		s.setVelocity(0,0)
			if(t.x>s.x){s.velocity.x=speed;}
			else if(t.x<s.x){s.velocity.x=-speed;}
			else if(t.y>s.y){s.velocity.y=speed;}
			else if(t.y<s.y){s.velocity.y=-speed;}
			if(t.x==s.x&&t.y==s.y&&idx<pth.length){this.idx++;}
			var h=s.velocity.heading();
			if(s.rotation-h>180)h=360+h
            if(s.rotation>h){
		   s.rotation-=10
		 }   else if(s.rotation<h){
			s.rotation+=10
		 }
		 if(s.rotation==360)s.rotation=0
		 console.log("rotation: "+s.rotation,"heading: "+s.velocity.heading(),"idx:"+this.idx)
			this.sprite=s;
	
	}
	moveTo(i,j){
	  this.target.x=(i+1)*gb
	  this.target.y=(j+1)*gb
	}
	moveForward(){
       
	}
	moveBack(){}
	moveRight(){}
	moveLeft(){}
}