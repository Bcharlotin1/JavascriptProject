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
            if (json.error){
                alert(json.error.join(" "))
                playGameButton.style.display = ""
            }else{
                const newUser = new User(json)
                newUser.attachUserToDom()
               
            }
       
        })
        .catch(error => {console.log(error.message)})
    }


    
}