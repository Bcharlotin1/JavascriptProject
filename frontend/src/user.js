class User{
    static allUsers = []
    constructor({username, id, pets}){
        this.username = username
        this.id = id
        this.pets = pets
        User.allUsers.push(this)
    
    }

    // fillinf the infmations/ post method

    attachUserToCanvas(){
        //create the left hand item box
        this.createConsole()
        
        this.attatchUsernameToCanvas()
       
        this.addCreatebutton()
        
    }

    createConsole(){
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fillRect(0, 0, 90, 800);
        ctx.fillRec
    }

    attatchUsernameToCanvas(){
        ctx.fillStyle = "black";
        ctx.font = "10px Arial";
        ctx.textAlign = 'start';
        ctx.fillText(`${this.username}`, 20, 10);
    }

    addCreatebutton(){
        ctx.beginPath();
        ctx.rect(250, 350, 70, 50); 
        ctx.fillStyle = '#FFFFFF'; 
        ctx.fillStyle = 'rgba(225,225,225)';
        ctx.fillRect(25,72,32,32);
        ctx.fill(); 
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000000'; 
        ctx.stroke();
        ctx.closePath();
        ctx.font = '40pt Arial';
        ctx.fillStyle = '#000000';
        ctx.fillText('New Pet', 345, 415);
        ctx.closePath();
      }


  
}