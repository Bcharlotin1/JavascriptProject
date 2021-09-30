// const canvas = document.getElementById("game")
// const ctx = canvas.getContext("2d")
// //consle.dir(context) in inspect to see all attributes 
// // ctx this is our tool set,  canvas element has a get context 

// //to draw a rectangel  you can 
// //ctx.fillStyle = "red"
// //ctx.fillRect(10,20,50,100)
// //fillRect(x,y,width, height)

// //to clear canvas ctx.clearRect(0, 0,  canvas.width,  canvas.height)
// document.body.addEventListener("keydown", handleKeyDown)
// let paused = false
// let height = 0;
// const player = new Player();

// function loop() {
//     if (!paused)
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     player.update()
//     player.render()
//     requestAnimationFrame(loop);
// // renders the frame so that it keeps going
// }
// loop()

// // function drawRect() {
// //     ctx.clearRect(0, 0, canvas.width, canvas.height)
// //     ctx.fillStyle = "red"
// //     ctx.fillRect(10, canvas.height - 80 - height, 40, 80)
// //     height += 10
// // }

// function handleKeyDown(event) {
//     event.keycode == 32 && pausedGame
// }
// function pausedGame() {
//     paused = !paused
//     if(paused){
//         ctx.fillText("Paused", canvas.width/2, canvas.heigh/2)
//     }
// }
// //
// class Player{
//     constructor(){
//         this.coords = {
//             x:25,
//             y: canvas.height - 80,
//             width: 40,
//             height: 80,
//         }
//     }
//     update(){
//         this.coords.y += 10
//     }
//     render(){
//         ctx.clearRect(0, 0, canvas.width, canvas.height)
//         const {x, y, width, height} = this.coords
//         ctx.fillStyle = "red"
//         ctx.fillRect(x, y, width, height)
//     }
