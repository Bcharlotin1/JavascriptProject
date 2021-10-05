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
        if(Canvas.i > 0){
            setTimeout(function () {
                statusbar.style.width = `${Canvas.i}%`
                Canvas.i = Canvas.i - 10
                // debugger
                Canvas.timeLoop()
            }, 1000); //9000 = 9000ms = 9s
        }
        else{
            canvas.style.background = "black"
            ctx.font = "30px Arial";
            ctx.fillStyle = "white"
            ctx.fillText("PET DIED", 80, 100);
            ctx.textAlign = "center";
            // break;
        }

    }
  
}

    