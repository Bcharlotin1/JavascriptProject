class Canvas{
    static i;
    constructor(petObj){
        this.petObject = petObj
        this.renderPetconsole()
    
    }
    renderPetconsole(){
        petConsole.style.display = "block"
        statusbarContainer.style.display = "block"
        Canvas.i = this.petObject.happiness
        Canvas.timeLoop()
    }

    static timeLoop= ()=>{
        if(Canvas.i >= 0){
            setTimeout(function () {
                statusbar.style.width = `${Canvas.i}%`
                Canvas.i = Canvas.i - 10
           
                Canvas.timeLoop()
            }, 1000); //1000 = 1000ms = 1s
       
            feedDog.addEventListener("click", Canvas.handleClick)
            washDog.addEventListener("click", Canvas.handleClick)
            walkDog.addEventListener("click", Canvas.handleClick)
        }
        else{
            canvas.style.background = "black"
            ctx.font = "30px Arial";
            ctx.fillStyle = "white"
            ctx.fillText("PET DIED", 80, 100);
            ctx.textAlign = "center";
        }

    }

    static handleClick = (e)=>{
    
        if(e.target ===feedDog){
            Canvas.i = Canvas.i + 30
            statusbar.style.width = `${Canvas.i}%`
        }
        if(e.target === washDog){
            Canvas.i = Canvas.i + 20
            statusbar.style.width = `${Canvas.i}%`
        }
        if(e.target === walkDog){
            Canvas.i = Canvas.i + 20
            statusbar.style.width = `${Canvas.i}%`
        }
     
    }



}

    