//grab form
const formHandle = document.forms[0];
//grab other required DOM elements
const status = document.querySelector('.form_status');
//error message
const errMsg = 'Please enter a valid email address';
//thanks message
const thxMsg = 'Thanks for signing up!';
//regex for valid email
const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//functionality/logic
function processForm(){
  //check for empty field or invalid email
  if(formHandle.email.value === '' || emailRE.test(formHandle.email.value) === false ){
    status.innerHTML = errMsg;
  }else{
    status.classList.add('success');
    status.innerHTML = thxMsg;
  }
  
  //so form doesn't fully submit
  return false;
}//end processForm

//listener for form submit
formHandle.onsubmit = processForm;