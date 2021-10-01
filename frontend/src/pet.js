class Pet{
    static all = [];
    // static userPetsListElement = document.getElementById("pet_list")

    constructor({name, gender ,dog_type, happiness, image, user_id, id }){
        this.name = name
        this.gender = gender
        this.dog_type = dog_type
        this.happiness = happiness
        this.image = image
        this.user_id = user_id
        this.id = id
        this.element = document.createElement("li")
        this.element.addEventListener("click", this.handleClick)
        Pet.all.push(this)
    }
    handleClick = (e)=>{
        
        petCall.deletePet(e)
    }


    render(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //clears canvas 
        //places dog image on canvas 
          const image = new Image();
          image.src = `${this.image}`;
          image.onload = () => {
          ctx.drawImage(image, 125,  50, 20, 20)
          }
    }

    addingLi =(userPetsListElement)=>{
    
        this.element.innerHTML =
    
            `<input type='radio' class= "div_pets" name='div_pets' value='${this.image}' checked>
                <img src=${this.image}><br>
                ${this.name}<br>
                ${this.gender}
            </input>

            <div class="delete_dog">
                <button class="delete_button" data-id=${this.id}> Delete</button>
            </div> 
        `   

            userPetsListElement.append(this.element)

    }
    static attachPetToDom =(userObj)=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
         //clears canvas 
        const userPetsListElement = document.getElementById("pet_list")
        const createPetButton = document.getElementById("pet_button")
        userPetsListElement.innerHTML = ""

        userObj.pets.forEach(pet => {
            const newpet = new Pet(pet)
            
            newpet.addingLi(userPetsListElement)
        //     debugger
        //     this.element.innerHTML =
    
        //     `<input type='radio' class= "div_pets" name='div_pets' value='${newpet.image}' checked>
        //         <img src=${newpet.image}><br>
        //         ${newpet.name}<br>
        //         ${newpet.gender}
        //     </input>

        //     <div class="delete_dog">
        //         <button class="delete_button" data-id=${newpet.id}> Delete</button>
        //     </div> 
        // `   
        
        //     userPetsListElement.append(this.element)
            // const deleteButton = userPetsListElement.querySelector(".delete_button")
            // deleteButton.addEventListener("click", petCall.deletePet)
        });
       
        
        
        const petConsolebutons = document.querySelectorAll(".div_pets")
        // const deleteButton = userPetsListElement.querySelector(".delete_button")
        // // grabbing all class names 
        // // debugger
        // deleteButton.addEventListener("click", petCall.deletePet)
        createPetButton.addEventListener("click", this.showPetForm)

    }

    static showPetForm = ()=>{
    
        document.getElementById('pet_form_block').style.display = "block"; 
        
    } 

    
    // displayPet(){
       
    // }
    
  




    

    

    
    
  
}