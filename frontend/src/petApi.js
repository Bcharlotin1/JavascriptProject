class PetApi{
    constructor(port){
        this.port = port
    }


    createPet(){
    
        let selectedDog;
        let selectedDogGender;
        const dogName = document.getElementById("name").value
        const dogImages = document.querySelectorAll("input#image")

        for(const dogImage of dogImages){
            if (dogImage.checked){
                selectedDog = dogImage
            }
        }
        const dogGenders = document.querySelectorAll("input#gender")
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
            const user = User.allUsers.filter(this.bindData.bind(null, data))
            //binded data to  filter so that we can have acces to data
            user[0].pets.push(newPet)
            //creates new pet in js class
            Pet.attachPetToDom(user[0])
            //attaches users new pet to don
        }).catch(error => {console.log(error.message)})
    }

    bindData(user, data){
        return user.user.username === data.username
    }


    deletePet =(e)=>{
    
        const id = e.target.dataset.id
      
        e.target.parentElement.parentElement.remove()
        fetch(`${this.port}/pets/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(json => alert(json.message))
    }

}