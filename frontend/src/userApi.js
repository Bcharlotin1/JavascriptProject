class UserApi{

    constructor(port){
        this.port = port

    }


    createOrGetUser(e){
        const username = e.target.username.value 
    
        const userInfo = {
            username
        }
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(userInfo)
        }
     
        fetch(this.port +`/users`, configObject)
        .then(response => response.json())
        .then(json => {
    
            const newUser = new User(json)
            newUser.attachUserToCanvas()
            //creating our javascript object after creating an object in the backend
        })
        .catch(error => {console.log(error.message)})
    }


    
}