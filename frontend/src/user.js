class User{
    static allUsers = []
    constructor({username, id, pets}){
        this.username = username
        this.id = id
        this.pets = pets
        User.allUsers.push(this)
        
    }
    static currentUser = this.id
    // filling of the infmations/ post method

    attachUserToDom(){
        //create the left hand item box
        consoleElement.innerHTML += `
        <div class="sidebar">
            <div class="profile">
                <img src="stylesheet/images/other/Gamer_Icon.png">

                <h3 id ="user-${this.id}">${this.username}<h3>

                <h3>Pets</h3>

                <ul id="pet_list">
                  
                </ul>

            </div>
            <div id="create_pet_button">
                <button id="pet_button">Create Pet</button>
            </div> 
        </div>`
        
        this.attachPetToDom()
    }

    attachPetToDom(){
        const userPetsListElement = document.getElementById("pet_list")
        const createPetButton = document.getElementById("pet_button")
        userPetsListElement.innerHTML = ""
        
        this.pets.forEach(pet => {
           
            userPetsListElement.innerHTML +=
            `<li id= "div_pets">
                <img src=${pet.image}><br>
                ${pet.name}<br>
                ${pet.gender}
            </li>`
        });
       
        createPetButton.addEventListener("click", this.showPetForm)

    }

    showPetForm(){
        document.getElementById('pet_form_block').style.display = "block"; 
        
    } 

   
    // handlePetSubmit(e){
    //     console.log(e)
    //     debugger
    //     // e.preventDefault();
    //     // document.getElementById('pet_form_block').style.display = "none";
    //     // petCall.createPet()
    // }  
    
    

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