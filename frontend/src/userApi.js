class UserApi{

    constructor(port){
        this.port = port

    }

    getUser(){
        fetch(this.port +`/users`)
        .then(response => response.json())
        .then(data => {
                for(const user of data){
                    let newUser = new User(user)
                    // make a method that post the user name  and it's pet on the canvas 
                    newUser.attachToCanvas()
                    // debugger
                }
        })
        .catch()
    }


    // getUser(name){
    //     fetch(this.port +`/users`)
    //     .then(response => response.json())
    //     .then(data => {
    //             for(const user of data){
    //                     if(user.username === name){

    //                     }
    //                 // make a method that post the user name  and it's pet on the canvas 
    //                 // newUser.attachToCanvas()
    //                 debugger
    //             }
    //     })
    //     .catch()
    // }
    // constructor(username){
    //     this.username = username
    // }

    // createUser(username){
        
    // }


    
}