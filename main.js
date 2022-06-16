// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//Your JavaScript code goes here!
 const modal = document.getElementById("modal");
    modal.className="hidden"
    

const articleHearts = document.querySelectorAll(".like-glyph").forEach
((heart)=>addEventListener('click',likerFunc) );

function likerFunc(e){ 
   let moz = e.target;
  mimicServerCall()
    .then(()=>{
      if(moz.innerText === EMPTY_HEART){
        moz.innerText= FULL_HEART
        moz.className="activated-heart"
      }else {
        moz.innerText=EMPTY_HEART;
        moz.className='';
      }})
    .catch(function (fail){
      
      modal.className='';
      modal.innerText='error';
      setTimeout(() =>  modal.className = "hidden", 3000);

    })}





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
