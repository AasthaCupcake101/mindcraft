var canvas=new fabric.Canvas ('myCanvas')
blockimagewidth=30
blocimageheight=30
playerx=10
playery=10
var player_object=""
var blockimageonbkject=""
function playerupdate (){
  fabric.Image.fromURL ("player.png",function(Img){
    player_object=Img
    player_object.scaleToWidth(150) 
player_object.scaleToHeight (150)
player_object.set({
    top:playery,left:playerx
})
canvas.add(player_object)
})
}
function newimage (get_image){
    fabric.Image.fromURL (get_image,function(Img){
      blockimageonbkject=Img
    blockimageonbkject.scaleToWidth(blockimagewidth) 
 blockimageonbkject.scaleToHeight (blocimageheight
    )
  blockimageonbkject.set({
      top:playery,left:playerx
  })
  canvas.add(blockimageonbkject)
  })
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e) {
  keypress=e.keyCode
  if (e.shiftKey && keypress == "80") {
    blockimagewidth=blockimagewidth+10
    blocimageheight=blocimageheight+10
  }
  if (e.shiftKey && keypress == "77") {
    blockimagewidth=blockimagewidth-10
    blocimageheight=blocimageheight-10
  }
  if (keypress=="38") {
    up()
  }

  if (keypress=="40") {
    down()
  }
  if (keypress=="37") {
  left()
  }
  if (keypress=="87") {
   newimage ("wall.jpg") 
  }
   if (keypress=="67") {
   newimage ("cloud.jpg") 
  } 
  if (keypress=="68") {
    newimage ("dark_green.png") 
   }
   if (keypress=="71") {
    newimage ("ground.png") 
   }
   if (keypress=="76") {
    newimage ("light_green.png") 
   }
   if (keypress=="82") {
    newimage ("roof.jpg") 
   }
   if (keypress=="84") {
    newimage ("trunk.png") 
   }
   if (keypress=="85") {
    newimage ("unique.png") 
   }
   if (keypress=="89") {
    newimage ("yellow_wall.png") 
   }
}
function up() {
  if (playery>0) {
   playery=playery-blocimageheight
   canvas.remove(player_object) 
   playerupdate ()
  }
}
function down() {
  if (playery<600) {
   playery=playery+blocimageheight
   canvas.remove(player_object) 
   playerupdate ()
  }
}
function left() {
  if (playerx>0) {
   playerx=playerx-blockimagewidth
   canvas.remove(player_object) 
   playerupdate ()
  }
}
function right() {
  if (playerx<800) {
   playerx=playerx+blockimagewidth
   canvas.remove(player_object) 
   playerupdate ()
  }
}