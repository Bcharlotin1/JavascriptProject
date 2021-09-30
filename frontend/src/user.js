class User{
    static allUsers = []
    constructor({username, id, pets}){
        this.username = username
        this.id = id
        this.pets = pets
        User.allUsers.push(this)
        
    }
    static currentUser = this
    // filling of the infmations/ post method

    attachUserToDom(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //clears canvas
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
            <div id="pet_button_container">
                <button id="pet_button">Create Pet</button>
            </div> 
        </div>`


        Pet.attachPetToDom(this)

    

    }

  
}