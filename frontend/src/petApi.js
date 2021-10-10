class PetApi{
    
    constructor(port){
        this.port = port
    }

    createPet(){

        let selectedDog;
        let selectedDogGender;
        const dogName = document.getElementById("name").value
        const dogImages = document.querySelectorAll("input#image")
        const dogGenders = document.querySelectorAll("input#gender")

        for(const dogImage of dogImages){
            if (dogImage.checked){
                selectedDog = dogImage
            }
        }


        for(const dogGender of dogGenders){
            if (dogGender.checked){
                selectedDogGender = dogGender.value
            }
        }
        
        const petInfo = {
            
            pet: {
                name: dogName,
                image: selectedDog.value,
                gender: selectedDogGender,
                dog_type: selectedDog.dataset.type,
                username: document.querySelector("h3").innerText
            }
        }
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(petInfo)
        }

   
        fetch(this.port + `/pets`, configObject)
        .then(response => response.json())
        .then(data => { 
            const newPet = new Pet(data)
           
            const user = User.allUsers.find( (user)=>{ 
                if (user.username === data.user.username){
                    return user 
                }
            })
            
            user.pets.push(newPet)
            
            Pet.attachPetToDom(user)
         
        }).catch(error => {console.log(error.message)})
    }


    deletePet =(e)=>{

        const id = parseInt( e.target.dataset.id)
        const userId = Pet.all.find((pet)=>pet.id === id).user_id
        const user = User.allUsers.find((user)=> user.id === userId)
  
        for (const pet of user.pets){
            if (pet.id === id){
                
                const i = user.pets.indexOf(pet)
                user.pets.splice(i, 1)
            }
        }
        e.target.parentElement.parentElement.remove()
        fetch(`${this.port}/pets/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(json => alert(json.message))
    }

}