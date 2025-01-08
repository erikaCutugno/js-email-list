
const emailListElm = document.getElementById("email-list")

let emailList;

for(let i=0; i<10; i++){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(function(response){
    emailListElm.innerHTML += `<li>${response.data.response}</li>`
    })
    
}