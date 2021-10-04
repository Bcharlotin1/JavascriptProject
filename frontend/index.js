
const port = `http://localhost:3000`;
const board = document.getElementById("board")
const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d");
const consoleElement = document.getElementById("wrapper")
const playGameButton = document.getElementById("popup")
const userForm = document.getElementById('user_form')
const petForm = document.getElementById('pet_form')
const petConsole = document.getElementById('pet_console')
const feedDog = document.getElementById('food')
const washDog = document.getElementById('wash')
const walkDog = document.getElementById('walk')
const statusbarContainer = document.getElementById('statusbar_container')
const statusbar = document.getElementById("myprogressBar")
const userCall = new UserApi(port)
const petCall = new PetApi(port)


//hide pet console 
petConsole.style.display = "none"
statusbarContainer.style.display = "none"


//----form evnets to get user input

playGameButton.addEventListener("click", div_show)

  //Function To Display Popup
  function div_show() {
  document.getElementById('abc').style.display = "block";
  // black = Element is rendered as a block-level element
  userForm.addEventListener("submit", handleSubmit)
  }
  //Function to Hide Popup


  function handleSubmit(e){
    document.getElementById('abc').style.display = "none";
    playGameButton.style.display = "none"
    //hids form after submission 
    e.preventDefault();
    userCall.createOrGetUser(e)
    // calling the userAPI
  }
 //--------------------------------------
  // pet form event listener
  petForm.addEventListener("submit", handlePetSubmit)
  
  function handlePetSubmit(e){
    e.preventDefault();
    document.getElementById('pet_form_block').style.display = "none";
    petCall.createPet()
}  

  
 

 