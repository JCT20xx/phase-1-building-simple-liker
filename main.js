// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let likes = [...document.getElementsByClassName('like-glyph')]
let errorBanner = document.getElementById('modal')
let errorContent = document.getElementById('modal-message')

// Your JavaScript code goes here!
   
let serverCallandReact = (event) => {
  mimicServerCall()
  .then(() =>hearts(event))
  .catch((error) => errorAlert(error))
}

let hearts = (event) => {
  if (event.target.textContent === EMPTY_HEART) {
    event.target.classList.add('activated-heart')
    event.target.textContent = FULL_HEART
  }
  else {
    event.target.classList.remove('activated-heart')
    event.target.textContent = EMPTY_HEART
  }
}

let errorAlert= (error) => {
  errorBanner.classList.remove('hidden')
  errorContent.innerText = error
  setTimeout(() =>{
    errorBanner.classList.add('hidden')
  }, 3000) 
}

likes.map(heart => heart.addEventListener('click', serverCallandReact))


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
