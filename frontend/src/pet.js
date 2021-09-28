class Pet{
    static all = [];
    constructor({name, gender ,type, happines, image, user_id}){
        this.name = name
        this.gender = gender
        this.type = type
        this.happines = happines
        this.image = image
        this.user_id = user_id
        Pet.all.push(this)
        
    }

    render(){
        const allUserPets = Pet.all.filter((obj) => obj.user_id === this.user_id)
        
        // Pet.all.forEach(pet=>{
        //     newElement.innerHTML += 
        //     `<li id= "div_pets">
        //     <img src=${pet.image}><br>
        //         ${pet.name}}<br>
        //         ${pet.gender}
        //     </li>`
           
        // })
    //    allUserPets.first.image
    }

  
}