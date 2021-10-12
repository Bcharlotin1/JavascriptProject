class Pet{
    static all = [];

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
  
    addingLi=(userPetsListElement)=>{
        this.element.innerHTML =
    
            `<input type='radio' class= "div_pets" name='div_pets' value='${this.image}' >
                <img src=${this.image}><br>
                ${this.name}<br>
                ${this.gender}
            </input>

            <div class="delete_dog">
                <button class="delete_button" data-id=${this.id}> Delete</button>
            </div> `   

            userPetsListElement.append(this.element)
       
    }

    static attachPetToDom =(userObj)=>{
   
        const userPetsListElement = document.getElementById("pet_list")
        const createPetButton = document.getElementById("pet_button")
        userPetsListElement.innerHTML = ""

        userObj.pets.forEach(pet => {
            const newpet = new Pet(pet)
            
            newpet.addingLi(userPetsListElement)
       
        });
       
        createPetButton.addEventListener("click", this.showPetForm)
   
        
    }

    static showPetForm = ()=>{

        document.getElementById('pet_form_block').style.display = "block"; 
        
    } 

    handleClick = (e)=>{
        let arrayOfPetImgElemnets = []
        let currentPetImage;
        const petButtons = document.querySelectorAll(".div_pets")
        
        petButtons.forEach((div)=>{
            arrayOfPetImgElemnets.push(div.nextElementSibling)
        })

       if (e.target.innerText === "Delete"){
            petCall.deletePet(e)
       }
     //-- handles clicks on pet image  
       else if(arrayOfPetImgElemnets.some((element)=>{
            let jsEvent = e 
          
                if(element === jsEvent.target){
                    currentPetImage = element 
                  
                    return true 
                   
                 }       
           })){
            Pet.render(currentPetImage)
        } 
    }

    static render = (currentPetImage) =>{
        let  petHTML = currentPetImage.previousElementSibling.value
        let currentPetObj;
        canvas.style.background = "none"
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //clears canvas 

        //places dog image on canvas 
          const image = new Image();
          image.src = `${petHTML}`;
          image.onload = () => {
          ctx.drawImage(image, 125,  50, 20, 20)
          }
    
        //pet canvas control actions  

        Pet.all.forEach((petObj)=> {
            if(petHTML === petObj.image){
                currentPetObj = petObj
            }
        })
       
        new Canvas(currentPetObj)
       
  
    }

    
  
    
  





  
}