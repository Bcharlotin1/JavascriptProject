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
const formContainer = document.getElementById("form_container")

const playGameButton = document.getElementById("play_button")



playGameButton.addEventListener("click", handleUserSignin)

function handleUserSignin() {
  
  formContainer.innerHTML = `
    <div class="form_container">
    <form id="form">
      <p>Welcome</p>
      <label for="username">Username:</label><br>
      <input type="text" name="username" id="username"><br>
      <input type="submit" value="Submit">
    </form>`

    const form = document.getElementById("form")
    
    form.addEventListener("submit", handleSubmit)
}

function handleSubmit(e){
  e.preventDefault();

  const input = document.getElementById("username")
  const userInput = input.value 
  debugger
  makeCallToApi(userInput)

}
function makeCallToApi(username){
  // console.log(`${baseUrl}${search}`)
  // console.log(baseUrl + search)
  fetch(`${port}`)
  .then(resp => resp.json())
  .then(data => {
      console.log(data)
      // debugger
      // addMealsToCanvas(data["meals"])
  })
  console.log("b")
}

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
