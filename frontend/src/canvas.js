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
                // debugger
                Canvas.timeLoop()
            }, 1000); //9000 = 9000ms = 9s
       
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
    
        if(e.target ==feedDog){
            Canvas.i = Canvas.i + 30
            statusbar.style.width = `${Canvas.i}%`
        }
        if(e.target == washDog){
            Canvas.i = Canvas.i + 20
            statusbar.style.width = `${Canvas.i}%`
        }
        if(e.target == walkDog){
            Canvas.i = Canvas.i + 10
            statusbar.style.width = `${Canvas.i}%`
        }
     
    }


    static press = (event)=>{
        debugger
        if(event.keyCode == 37) {//LEFT
          x = x - 1;
        } else if(event.keyCode == 38) {//UP
          y = y - 1;
        } else if(event.keyCode ==39) {//RIGHT
          x = x + 1;
        } else if(event.keyCode == 40) {//DOWN
          y = y + 1;
        }
    }
  
}

    