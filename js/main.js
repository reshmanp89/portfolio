var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var msgError=document.getElementById('message-error');
   function   validateName()
   {   
        var name=document.getElementById('username').value;
        console.log(name);
        console.log(name.length);
        if(name=="")
        {
            nameError.innerHTML="Name is required";
            return false;
        }
         if(!name.match(/^[A-Za-z]*$/))
     
       { 
        nameError.innerHTML="username is not valid";
        return false;
        
       }
       nameError.innerHTML="valid";
       return true;
   }
   function validateEmail()
   {
      var email=document.getElementById('email').value;  
      if(email=="")
      {
        emailError.innerHTML="Email is required"
        return false;
    //   }
    // if(!email.match(/^[A-Za-z]\._\-[0-9]*))


    
   }
   if(!email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
   {
      emailError.innerHTML="email is not valid";
      return false;
   }
   else{
    emailError.innerHTML="valid"
   }
}
 function validateMsg()
 {
    var msg=document.getElementById("msgarea").value;
    var required=30;
    var left=required-msg.length;
    if(left>0)
    {
        msgError.innerHTML=left+"more characters required"
        return false
    }

 }

 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyIqPATV0NWiYLUlz4MWMokzl-xiVeYRx8fSMobfLsyrbuF0jpy4oosTR6iWK3XThMLpQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
