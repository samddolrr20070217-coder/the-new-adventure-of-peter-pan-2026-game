const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const playerImage = new Image();

playerImage.src = "peterpan.png";

const player = {
  x:100,
  y:200,
  width:180,
  height:140,
  speed:6
};

const keys = {};

document.addEventListener("keydown",(e)=>{
  keys[e.key] = true;
});

document.addEventListener("keyup",(e)=>{
  keys[e.key] = false;
});

function update(){

  if(keys["ArrowRight"]){
    player.x += player.speed;
  }

  if(keys["ArrowLeft"]){
    player.x -= player.speed;
  }

  if(keys["ArrowUp"]){
    player.y -= player.speed;
  }

  if(keys["ArrowDown"]){
    player.y += player.speed;
  }
}

function drawBackground(){

  ctx.fillStyle = "#001d3d";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  for(let i=0;i<100;i++){

    ctx.fillStyle = "white";

    ctx.beginPath();

    ctx.arc(
      (i*90)%canvas.width,
      (i*53)%canvas.height,
      2,
      0,
      Math.PI*2
    );

    ctx.fill();
  }
}

function drawPlayer(){

  ctx.drawImage(
    playerImage,
    player.x,
    player.y,
    player.width,
    player.height
  );
}

function gameLoop(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  update();

  drawBackground();

  drawPlayer();

  requestAnimationFrame(gameLoop);
}

playerImage.onload = () => {
  gameLoop();
};
