// FUNCTIONS
const email = function(){
    let emailList= "";
    for(let i=0; i<10; i++){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(function(response){
    emailList += `<li>${response.data.response}</li>`
    emailListElm.innerHTML = emailList
    })
    .catch(function (error) {
        emailListElm.innerHTML = error.message
      })
    .finally(function () {
        loadingElm.classList.add("d-none")
      });
}
}
// DOM ELEMENTS

const emailListElm = document.getElementById("email-list")
const btnElm = document.getElementById("btn")
const loadingElm = document.getElementById("loading")

// EVENTS
email();

btnElm.addEventListener("click", email)