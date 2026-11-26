const button = document.querySelectorAll(".button")

const body = document.querySelector("body")
console.log(body)


button.forEach(function(button){
    button.addEventListener("click", function(e){
        const color = e.target.id
        switch (color) {
            case "green":
                body.style.backgroundColor = e.target.id
                
                break;
            case "blue":
                body.style.backgroundColor = e.target.id
                
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id
                break;
             case "black":
                body.style.backgroundColor = e.target.id
                body.style.color = "white"
               
                break;
             case "orange":
                body.style.backgroundColor = e.target.id
                break;
            
            default:
                break;
        }
    })

})

