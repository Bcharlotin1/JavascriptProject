class User{
    static allUsers = []
    constructor({username, id, pets}){
        this.username = username
        this.id = id
        this.pets = pets
        User.allUsers.push(this)
        
    }

    // fillinf the infmations/ post method

    attachUserToDom(){
        //create the left hand item box
        consoleElement.innerHTML += `
        <div class="sidebar">
            <div class="profile">
                <img src="stylesheet/images/other/Gamer_Icon.png">

                <h3>${this.username}<h3>

                <h3>Pets</h3>

                <ul id="pet_list">
                  
                </ul>

            </div>
            <div id="create_pet_button">
                <button id="pet_button">Create Pet</button>
            </div> 
        </div>`
        
        const userPetsListElement = document.getElementById("pet_list")
        const createPetButton = document.getElementById("pet_button")
        
        this.pets.forEach(pet => {
            userPetsListElement.innerHTML +=
            `<li id= "div_pets">
                <img src=${pet.image}><br>
                ${pet.name}}<br>
                ${pet.gender}
            </li>`
        });
       
        createPetButton.addEventListener("click", this.createPetForm)
    }

    createPetForm(){
        document.getElementById('pet_form').style.display = "block";
    }   
    
    

    // createConsole(){
    //     ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    //     ctx.fillRect(0, 0, 90, 800);
    //     ctx.fillRec
    // }

    // attatchUsernameToDom(){
    //     ctx.fillStyle = "black";
    //     ctx.font = "10px Arial";
    //     ctx.textAlign = 'start';
    //     ctx.fillText(`${this.username}`, 20, 10);
    // }

    // addCreatebutton(){
      
     
    //   }


  
}