class User{
    constructor({username, id, pets}){
        this.username = username
        this.id = id
        this.pets = pets
        // const canvas = document.getElementById("game")
        // const ctx = canvas.getContext("2d") 
    }

    // fillinf the infmations/ post method

    attachToCanvas(){
        //create the left hand item box
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fillRect(0, 0, 90, 800);
        ctx.fillRec
        ctx.font = "30px Arial";
        ctx.fillText(`${this.username}`, 90, 50);
    }

    drawUserDogs(){
        const image = new Image();
        image.src = "stylesheet/images/dogs/Dog_brown.png";
        image.onload = () => {
        ctx.drawImage(image, 125,  50, 20, 20)
        }
    }

    // drawUserDog(){
    //     const image = new Image();
    //     image.src = "stylesheet/images/dogs/Dog_brown.png";
    //     image.onload = () => {
    //     ctx.drawImage(image, 125,  50, 20, 20)
    // }
}