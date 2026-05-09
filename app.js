const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const playerImage = new Image();
playerImage.src = "peterpan.png";

const player = {
  x:100,
  y:300,
  width:180,
  height:140,
  speed:7
};

const keys = {};

let cameraX = 0;

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

  cameraX = player.x - 300;

  if(player.y < 50){
    player.y = 50;
  }

  if(player.y > canvas.height-160){
    player.y = canvas.height-160;
  }
}

function drawSky(){

  ctx.fillStyle = "#001d3d";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  for(let i=0;i<150;i++){

    ctx.fillStyle = "white";

    ctx.beginPath();

    ctx.arc(
      (i*120-cameraX*0.2)%8000,
      (i*53)%700,
      2,
      0,
      Math.PI*2
    );

    ctx.fill();
  }
}

function drawLondon(){

  for(let i=0;i<12;i++){

    ctx.fillStyle = "#343a40";

    ctx.fillRect(
      i*180-cameraX,
      350,
      120,
      350
    );
  }

  ctx.fillStyle = "#ffcad4";

  ctx.fillRect(
    900-cameraX,
    330,
    260,
    230
  );

  ctx.fillStyle = "white";
  ctx.font = "30px Arial";

  ctx.fillText(
    "London - Wendy House",
    820-cameraX,
    290
  );

  ctx.fillStyle = "yellow";

  for(let i=0;i<8;i++){

    ctx.fillRect(
      930-cameraX+(i%2)*90,
      370+Math.floor(i/2)*45,
      30,
      30
    );
  }
}

function drawOcean(){

  ctx.fillStyle = "#0077b6";

  ctx.fillRect(
    1700-cameraX,
    500,
    1200,
    250
  );

  ctx.fillStyle = "white";

  for(let i=0;i<20;i++){

    ctx.fillRect(
      1750+i*60-cameraX,
      530+(i%2)*10,
      40,
      4
    );
  }
}

function drawNeverland(){

  ctx.fillStyle = "#2d6a4f";

  ctx.fillRect(
    3000-cameraX,
    420,
    5000,
    400
  );

  ctx.fillStyle = "#14532d";

  for(let i=0;i<40;i++){

    ctx.fillRect(
      3100+i*150-cameraX,
      300,
      45,
      180
    );

    ctx.beginPath();

    ctx.arc(
      3120+i*150-cameraX,
      280,
      70,
      0,
      Math.PI*2
    );

    ctx.fill();
  }

  ctx.fillStyle = "white";
  ctx.font = "38px Arial";

  ctx.fillText(
    "Neverland",
    3300-cameraX,
    180
  );
}

function drawLostKids(){

  ctx.fillStyle = "orange";

  for(let i=0;i<7;i++){

    ctx.fillRect(
      3600+i*90-cameraX,
      470,
      55,
      90
    );
  }

  ctx.fillStyle = "white";
  ctx.font = "28px Arial";

  ctx.fillText(
    "Lost Kids",
    3720-cameraX,
    430
  );
}

function drawIndianVillage(){

  ctx.fillStyle = "#8b4513";

  for(let i=0;i<3;i++){

    ctx.beginPath();

    ctx.moveTo(4700+i*180-cameraX,350);
    ctx.lineTo(4640+i*180-cameraX,520);
    ctx.lineTo(4760+i*180-cameraX,520);

    ctx.fill();
  }

  ctx.fillStyle = "white";
  ctx.font = "28px Arial";

  ctx.fillText(
    "Indian Village",
    4680-cameraX,
    300
  );

  ctx.fillStyle = "hotpink";

  ctx.fillRect(
    5200-cameraX,
    430,
    70,
    120
  );

  ctx.fillStyle = "white";

  ctx.fillText(
    "Tiger Lily",
    5140-cameraX,
    400
  );
}

function drawPirateShip(){

  ctx.fillStyle = "#5c3d2e";

  ctx.fillRect(
    6500-cameraX,
    320,
    700,
    260
  );

  ctx.fillStyle = "black";

  ctx.fillRect(
    6800-cameraX,
    120,
    20,
    220
  );

  ctx.fillStyle = "white";

  ctx.beginPath();

  ctx.moveTo(6820-cameraX,130);
  ctx.lineTo(6950-cameraX,210);
  ctx.lineTo(6820-cameraX,290);

  ctx.fill();

  ctx.fillStyle = "white";
  ctx.font = "36px Arial";

  ctx.fillText(
    "Captain Hook Ship",
    6550-cameraX,
    260
  );

  ctx.fillStyle = "purple";

  for(let i=0;i<4;i++){

    ctx.fillRect(
      6620+i*120-cameraX,
      440,
      60,
      100
    );
  }

  ctx.fillStyle = "red";

  ctx.fillRect(
    7100-cameraX,
    400,
    90,
    140
  );

  ctx.fillStyle = "white";

  ctx.fillText(
    "Captain Hook",
    7000-cameraX,
    370
  );
}

function drawPlayer(){

  ctx.drawImage(
    playerImage,
    player.x-cameraX,
    player.y,
    player.width,
    player.height
  );

  ctx.fillStyle = "white";
  ctx.font = "28px Arial";

  ctx.fillText(
    "Peter Pan",
    20,
    40
  );
}

function gameLoop(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  update();

  drawSky();

  drawLondon();

  drawOcean();

  drawNeverland();

  drawLostKids();

  drawIndianVillage();

  drawPirateShip();

  drawPlayer();

  requestAnimationFrame(gameLoop);
}

playerImage.onload = ()=>{
  gameLoop();
};
