var dog,dogimg,happydog,dogstock,hunger,hung,stock
function preload()
{
  dogimg=loadImage("image/Dog(1).png")
	//load images here
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database;
  dog=image(dogimg,200,20,40,40)
hunger=database.ref('Food')
hunger.on("value",readHunger,showErrors)
foodsto=database.ref('Foodstocks')
foodsto.on("value",readFoodleft,showError)
}


function draw() {  

  drawSprites();
  //add styles here

}

function readhunger(data){
hung=data.val();
if(keycode=32){
  hung=hung+1
  text(hung,100,100);
    }
}
function readFoodleft(dat){
  stock=dat.val();
  if(keycode=32){
    stock=stock-1
      }
      text(stock,100,100)
}
//function coal(){
  //if(keycode=32){
//stock=stock-1
  //}
//}
