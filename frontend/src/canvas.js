class Canvas{
    constructor(petObj){
        this.petObject = petObj
        this.renderPetconsole(this.petObject)
   
    }
    renderPetconsole(petObj){
        petConsole.style.display = "block"
        statusbarContainer.style.display = "block"
        
        this.timeLoop()
    }

    timeLoop(){
        
        
        if(i > 0){
            setTimeout(function () {
                statusbar.style.width = `${i}%`
                i = i - 10
                timeLoop()
            }, 1000); //9000 = 9000ms = 9s
        }else{
            debugger
            ctx.font = "30px Arial";
            ctx.fillText("PET DIED", 10, 50);
            ctx.textAlign = "center";
            // break;
        }

    }
  
}

    