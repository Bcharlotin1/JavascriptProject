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
const port = `http://localhost:3000`;
const board = document.getElementById("board")
const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d");
const userCall = new UserApi(port);

// call ot check if it is working 
userCall.getUser()


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



//--------- add event listner to canvas
// canvas.addEventListener("click", ()=>{
//   console.log
// })


//----form evnets  to get user input
// const formContainer = document.getElementById("form_container")

// const playGameButton = document.getElementById("play_button")



// playGameButton.addEventListener("click", handleUserSignin)

// function handleUserSignin() {
  
//   formContainer.innerHTML = `
//     <div class="form_container">
//     <form id="form">
//       <p>Welcome</p>
//       <label for="username">Username:</label><br>
//       <input type="text" name="username" id="username"><br>
//       <input type="submit" value="Submit">
//     </form>`

//     const form = document.getElementById("form")
    
//     form.addEventListener("submit", handleSubmit)
// }

// const form = document.getElementById("form")
// const input = document.getElementById("username")

// function handleSubmit(e){
//   e.preventDefault();
//   const userInput = e.target.username.value 
//   debugger
//   // makeCallToApi(userInput)

// }
// function makeCallToApi(username){
//   // console.log(`${baseUrl}${search}`)
//   // console.log(baseUrl + search)
//   fetch(`${port}`)
//   .then(resp => resp.json())
//   .then(data => {
//       console.log(data)
//       // debugger
//       // addMealsToCanvas(data["meals"])
//   })
//   console.log("b")
// }

// function addMealsToCanvas(data){
//   // debugger
//   // console.log(data)
//   // const mealArray = data["meals"];
//   const liElements = data.map((meal) => {
//       let li = document.createElement('li');
//       li.innerHTML = meal["strMeal"]
//       return li
//       // console.log(li)
//   })
//   list.innerHTML = ""
//   console.log(liElements)
//  liElements.forEach(element => {
//      list.append(element)
//  })

// }
