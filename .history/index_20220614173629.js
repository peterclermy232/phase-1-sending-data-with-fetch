// Add your code here
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        name,
        dogBreed: "Poodle",
    }),
};

fetch("http://localhost:3000/dogs", configurationObject)
    
     .then(function (response){
         return response.json()
     })
     .then(function(object){
         document.body.innerHTML = object[ "id" ]
     })
     .catch( function(err){
         document.body.innerHTML = err.message
     })