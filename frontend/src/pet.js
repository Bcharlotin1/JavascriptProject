class Pet{
    static all = [];
    constructor(name, gender ,type, happines, image, user_id){
        this.name = name
        this.gender = gender
        this.type = type
        this.happines = happines
        this.image = image
        this.user_id = user_id
        Pet.all.push(this)
    }

    render(){
       const allUserPets =  []
       Pet.all.filter((Object) =>{ 
        // debugger
         if (Object.name.user_id === this.user_id){
          
             allUserPets.push(Object.name) 
         }
        })

        
        // allUserPets.forEach((pet))
        // ctx.fillStyle = "black";
        // ctx.font = "10px Arial";
        // ctx.textAlign = 'start';
        // ctx.fillText(`${this.username}`, 20, 10);
    }
}