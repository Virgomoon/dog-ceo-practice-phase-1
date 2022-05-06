console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',()=>{
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
        return response.json()
    })
    .then(function(obj){
        
        obj.message.forEach(element=>{
        const img = document.createElement('img')
        imageContainer.appendChild(img) 
        img.src = element
        })
    })

    let imageContainer = document.querySelector(["#dog-image-container"])

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response){
        return response.json()
    })
    .then(function(obj){

        let objectMessage = obj.message
        let prefilteredDogs = []
        let filteredDogs = []

        for(item in objectMessage) {
            prefilteredDogs.push(item)
        }

        buildList(prefilteredDogs)

        breedDropdown.addEventListener('change', function(e){
                while(dogBreeds.firstChild){
                    dogBreeds.removeChild(dogBreeds.firstChild)
                }
                filteredDogs = prefilteredDogs.filter(el => el[0] === e.target.value)
            buildList(filteredDogs)
            }
        )
            function buildList(list){
                for(element of list){
                    const li = document.createElement('li')
                    dogBreeds.appendChild(li)
                    li.className = "each-dog"
                    li.innerHTML = element 
                    
                    let eachDog = document.querySelectorAll([".each-dog"])
                    
                    eachDog.forEach(dog => dog.addEventListener('click', function(e){
                        e.target.style.color = 'red'
                    }))
                    
                } 
            }    
        })
        let dogBreeds = document.querySelector(["#dog-breeds"])
        let breedDropdown = document.querySelector(["#breed-dropdown"])
    }) 
        
        
 
    
    
    

