// const canvas = document.getElementById("game")
// const ctx = canvas.getctx("2d")
// //consle.dir(ctx) in inspect to see all attributes 
// // ctx this is our tool set,  canvas element has a get ctx 

// //to draw a rectangel  you can 
// //ctx.fillStyle = "red"
// //ctx.fillRect(10,20,50,100)
// //fillRect(x,y,width, height)

// //to clear canvas ctx.clearRect(0, 0,  canvas.width,  canvas.height)
// document.body.addEventListener("keydown", handleKeyDown)
const port = `http://localhost:3000`;
const board = document.getElementById("board")
const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d");
const consoleElement = document.getElementById("wrapper")
const userElement = document.getElementById("name")
// const userPetsListElement = document.getElementById("pet_list")
// const createPetButton = document.getElementById("pet_button")
const userCall = new UserApi(port)
const petCall = new PetApi(port)

 
  

// const newUser = new User(userInput)

// call ot check if it is working 
// userCall.getUser()


// places dog image on canvas 
//   const image = new Image();
//   image.src = "stylesheet/images/dogs/Dog_brown.png";
//   image.onload = () => {
//   ctx.drawImage(image, 125,  50, 20, 20)
//-------------------canvas once user signs in 

// rectangular console
//  function addConsole(){
//   ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
//   ctx.fillRect(0, 0, 90, 800);
//  }
//  addConsole()
//------username 
// ctx.font = "30px Arial";
// ctx.fillText("Hello World", 10, 50);



// //--------- add event listner to canvas
// canvas.addEventListener("click", ()=>{
//   console.log
// })


//----form evnets to get user input
const formContainer = document.getElementById("form_container")

const playGameButton = document.getElementById("popup")


playGameButton.addEventListener("click", div_show)

  //Function To Display Popup
  function div_show() {
  document.getElementById('abc').style.display = "block";
  // black = Element is rendered as a block-level element
  form.addEventListener("submit", handleSubmit)
  }
  //Function to Hide Popup
  function div_hide(){
  document.getElementById('abc').style.display = "none";
  // none =Element will not be displayed
  }

  const form = document.getElementById("form")
  const input = document.getElementById("username")

  function handleSubmit(e){
    div_hide()
    //hids form after submission 
    e.preventDefault();
    userCall.createOrGetUser(e)
    petCall.getPets()
    // calling the userAPI
  }
 
  

  // const path = new Path2D()
  // // path.rect(250, 350, 200, 100)
  // path.rect(20,120,60,10)
  // path.closePath()
  
  // //draw your shape data to the context
  // ctx.fillStyle = "pink"
  // ctx.fillStyle = "pink"
  // ctx.fill(path)
  // ctx.lineWidth = 2
  // ctx.strokeStyle = "#000000"
  // ctx.stroke(path)
  // ctx.fillStyle = "black";
  // ctx.font = "10px Arial";
  // ctx.fillText(`Create Pet`, 25, 128);
  
  // function getXY(canvas, event){ //adjust mouse click to canvas coordinates
  //   const rect = canvas.getBoundingClientRect()
  //   const y = event.clientY 
  //   const x = event.clientX 
  //   return {x:x, y:y}
  // }
  
  // document.addEventListener("click",  function (e) {
  //   // const XY = getXY(canvas, e)
  //   //use the shape data to determine if there is a collision
  //   if(ctx.isPointInPath(path, 25, 128)) {
  //     // Do Something with the click
  //     alert("clicked in rectangle")
  //   }
  // }, false)

 