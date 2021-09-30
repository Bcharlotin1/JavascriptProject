class Pet{
    static all = [];


    constructor({name, gender ,dog_type, happiness, image, user_id}){
        this.name = name
        this.gender = gender
        this.dog_type = dog_type
        this.happiness = happiness
        this.image = image
        this.user_id = user_id
        Pet.all.push(this)
        this.element = document.createElement("li")
        
    }


    render(){
        // debugger
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //clears canvas 
        //places dog image on canvas 
          const image = new Image();
          image.src = `${this.image}`;
          image.onload = () => {
          ctx.drawImage(image, 125,  50, 20, 20)
          }
    }

    static attachPetToDom =(userObj)=>{
        // debugg
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const userPetsListElement = document.getElementById("pet_list")
        const createPetButton = document.getElementById("pet_button")
        userPetsListElement.innerHTML = ""

        userObj.pets.forEach(pet => {
            // const newpet = new Pet(pet)
            //do i need to creat a java script object 
            // debugger
            userPetsListElement.innerHTML +=
    
            `<li><input type='radio' class= "div_pets" name='div_pets' value='${pet.image}' checked>
                <img src=${pet.image}><br>
                ${pet.name}<br>
                ${pet.gender}
            </input>

            <div class="delete_dog">
                <button class="delete_button" data-id=${pet.id}> Delete</button>
            </div> 
            </li>`
        });
    
       
        const petConsolebutons = document.querySelectorAll(".div_pets")

        createPetButton.addEventListener("click", this.showPetForm)

    }

    static showPetForm = ()=>{
    
        document.getElementById('pet_form_block').style.display = "block"; 
        
    } 



    

    

    
    
  
}