// // 5 input verilir. 
// //   1 - Qutunun en və hündürlüyünün dəyəri.
// //   2- Qutunun arxa fon rəngi
// //   3 - Topun eni və hündürlüyünün dəyəri
// //   4 - Topun arxa fon rəngi 
// //   5 - Addım uzunluğu.
// //   Göndərdiyim şahəsərə uyğun dizayn yığılsın. 
// //   Düymələrin yerlərinə uyğun 8 istiqamətdə hərəkət edə bilsin. Orta düyməyə kliklədikdə topun mövqeyini resetləsin.
// //    (Top mərkəzdə başlamalıdır.). Əgər top qutunun hər hansı sərhəddinə çatdısa, o istiqamətdə hərəkət mümkün olmasın. 
// //    Sağ, sol, yuxarı, aşağı hərəkətlərini klaviatura ilə də eləmək olsun
// document.addEventListener('keydown', function(event) {
//     alert('keyboard is being smashed');
//     });

//     if(event.keyCode == 37) {
//         alert('Left arrow of keyboard was smashed');
//     }
//     else if(event.keyCode == 38) {
//         alert('Up arrow of keyboard was smashed');
//     }
//     else if(event.keyCode == 39) {
//         alert('Right arrow of keyboard was smashed');
//     }
//     else if(event.keyCode == 40) {
// //         alert('Down arrow of keyboard was smashed');
// //     }


// //     document.addEventListener('keydown', function(event) {
// //         if(event.keyCode == 37) {
// //             alert('Left arrow of keyboard was smashed');
// //             //move the ball to left
// //         }
// //         else if(event.keyCode == 38) {
// //             alert('Up arrow of keyboard was smashed');
// //             //move the ball to up
// //         }
// //         else if(event.keyCode == 39) {
// //             alert('Right arrow of keyboard was smashed');
// //             //move the ball to right
// //         }
// //         else if(event.keyCode == 40) {
// //             alert('Down arrow of keyboard was smashed');
// //             //move the ball to down
// //         }
        
// //         });

// var myGamePiece;

// function startGame() {
//     myGamePiece = new component(30, 30, "red", 10, 120);
//     myGameArea.start();
// }

// var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 480;
//         this.canvas.height = 270;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.interval = setInterval(updateGameArea, 20);
//     },
//     clear : function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
// }

// function component(width, height, color, x, y) {
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;
//     this.x = x;
//     this.y = y;    
//     this.update = function() {
//         ctx = myGameArea.context;
//         ctx.fillStyle = color;
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//     }
//     this.newPos = function() {
//         this.x += this.speedX;
//         this.y += this.speedY;        
//     }    
// }

// function updateGameArea() {
//     myGameArea.clear();
//     myGamePiece.newPos();    
//     myGamePiece.update();
// }

// function moveup() {
//     myGamePiece.speedY -= 1; 
// }

// function movedown() {
//     myGamePiece.speedY += 1; 
// }

// function moveleft() {
//     myGamePiece.speedX -= 1; 
// }

// function moveright() {
//     myGamePiece.speedX += 1; 
// }


// var myGamePiece;

// function startGame() {
//     myGamePiece = new component(30, 30, "red", 10, 120);
//     myGameArea.start();
// }
// var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 480;
//         this.canvas.height = 270;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.interval = setInterval(updateGameArea, 20);
//     },
//     clear : function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
// }
