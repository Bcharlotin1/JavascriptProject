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
    
            `<input type='radio' class= "div_pets" name='div_pets' value='${this.image}' checked>
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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
         //clears canvas 
        const userPetsListElement = document.getElementById("pet_list")
        const createPetButton = document.getElementById("pet_button")
        userPetsListElement.innerHTML = ""

        userObj.pets.forEach(pet => {
            const newpet = new Pet(pet)
            
            newpet.addingLi(userPetsListElement)
       
        });
        
        // const petConsolebutons = document.querySelectorAll(".div_pets")
        //grabbign pets from radio button to displaay thme later on canvas using render() 
        createPetButton.addEventListener("click", this.showPetForm)
   
        
    }

    static showPetForm = ()=>{
    
        document.getElementById('pet_form_block').style.display = "block"; 
        
    } 

    handleClick = (e)=>{
        let arrayOfPetImgElemnets = []
        let currentPetImage;
        const petConsolebutons = document.querySelectorAll(".div_pets")
        petConsolebutons.forEach((div)=>{
            arrayOfPetImgElemnets.push(div.nextElementSibling)
        })

       if (e.target.innerText === "Delete"){
            petCall.deletePet(e)
       }
       
       else if(arrayOfPetImgElemnets.some((element)=>{
            let jsEvent = e 
            //passing the event
                if(element == jsEvent.target){
                    currentPetImage = element 
                    //need to use curren pet image for render
                    return true 
                    //need to expcitly return tre sisn its an if satment insied of .som whci is suposes be retung a true or fals value
                 }       
           })){
            Pet.render(currentPetImage)
        }
        
    }

    static render = (currentPetImage) =>{
        let  petHTML = currentPetImage.previousElementSibling.value
        let currentPetObj;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //clears canvas 
        //places dog image on canvas 
          const image = new Image();
          image.src = `${petHTML}`;
          image.onload = () => {
          ctx.drawImage(image, 125,  50, 20, 20)
          }

        //pet canvaus contolrlo actions ll 
      

        Pet.all.forEach((petObj)=> {
            if(petHTML == petObj.image){
                currentPetObj = petObj
            }
        })
        
        Canvas.renderPetconsole(currentPetObj)
  
    }

    
  
    
  





  
}