
class Enemy {
	constructor(i,j,arr){
		this.sprite =createSprite((i+1)*gb,(j+1)*gb,gb*0.5,gb*0.5); 
		this.sprite.shapeColor = "red"
		this.target={x:this.sprite.x,y:this.sprite.y,r:this.sprite.rotation}
		this.arr=arr
		this.idx=0
		this.pth=[[1,14],[1,13],[1,12],
				 [1,11],[2,11],[3,11],
				 [3,10],[3,9],[3,8],
				 [3,7],[4,7],[5,7],
				 [6,7],[6,8],[6,9],[5,9],
				 [5,10],[5,11],[4,11],
				 [4,12],[4,13],[5,13],
				 [5,14],[5,15],

				]
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
		//var gs=gi(s.x,s.y),gt=gi(t.x,t.y)
		this.cone(s.x,s.y,s.rotation)
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
	cone(x,y,a){		
		//var gs={x:int(((1/gb)*x)-1),
		//		y:int(((1/gb)*y)-1)}
		//console.log("gs: ",gs)
		//var result=getNeighbor(this.arr,gs.x-1,gs.y-1)
		//console.log(result) 
		push()
		translate(x,y)
		rotate(a)
		//console.log(get(x+gb, y))
		fill(255,100)
		noStroke();
		arc(0, 0, gb*4, gb*3, -45,45, PIE);
		pop()
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
