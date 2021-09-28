class PetApi{
    constructor(port){
        this.port = port
    }

    getPets(){
        fetch(this.port + `/pets`)
        .then(response => response.json())
        .then(data => {
        
            for(const pet of data){
                let newPet = new Pet(pet)
                //   newPet.render()
            }
        })
        .catch()
    }
}