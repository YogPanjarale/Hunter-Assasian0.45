const data= [
  [1,1,1,1,1,1,0,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,0,1,1,0,0,1,0,1],
  [1,0,1,1,1,1,0,1,1,1,1], 
  [1,0,1,0,0,0,0,0,1,0,1], 
  [1,0,1,1,1,0,0,1,1,0,1], 
  [1,0,1,0,1,0,0,0,1,1,1], 
  [1,0,1,0,0,0,0,0,0,0,1], 
  [1,0,1,0,1,1,0,1,1,0,1], 
  [1,0,0,0,1,0,0,0,0,0,1], 
  [1,1,1,0,1,0,0,1,1,0,1], 
  [1,0,0,0,0,0,0,0,0,0,1], 
  [1,0,1,0,0,1,0,1,0,0,1], 
  [1,0,1,0,0,0,0,1,0,0,1], 
  [1,0,1,1,1,0,0,1,1,0,1], 
  [1,0,0,0,0,0,0,0,0,0,1], 
  [1,0,1,1,1,1,0,1,1,1,1],
  [1,0,1,1,1,1,1,1,1,1,1],
 ] 
 var activeBlock=10
  
  var gb=40,database
var level,parr,e1,example_img;
function preload(){
 //example_img=loadImage("Images\Top_Down_Survivor\trail.png")
}
function setup(){
  //createEditor()
  var arr=data;
  for(var i=0; i<arr.length;i++){
    for(var j=0; j<arr[i].length;j++){
       switch (arr[i][j]) {
           case 0:
               arr[i][j]=1
               break;
           case 1: 
                arr[i][j]=10
           default:
               break;
       }
    }
}
parr = new Array(30)
 database =firebase.database();
  createCanvas(1000,800)
  level = new Level(data)
  player =new Player(1,16,level.data)
  for (let i = 0; i < parr.length; i++) {
      parr[i]=new Player(1,int(random(11, 18)),level.data)
    
  }
  e1= new Enemy(1,18,level.data)
}
function draw(){
  //showButtons();
  //console.log(frameRate())
    background(230,250,250)
    level.display()
    player.display()
   // level.update()
  e1.display();
   for (let i = 0; i < parr.length; i++) {
    parr[i].display()
  
}
//console.log(i)
   // levelEditorRun();
}
