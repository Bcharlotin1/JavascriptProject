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



    

    

    
    
  
}