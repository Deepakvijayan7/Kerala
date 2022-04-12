      //username check
        function chckusername(){
          var username=document.getElementById("signup_userName").value;
          if(username.length==0){
            username_error.innerHTML="Username field cannot be empty";
            flag=1;
            signup_userName.style.borderColor="red";
          }
          else{
            username_error.innerHTML="";
            signup_userName.style.borderColor="#6dcbc7";
          }
        }
      //username check end


      //Email check
        function chckmail(){
          var signup_mail=document.getElementById("signup-email");
          // var mail_format=/^([A-Za-z0-9]+)@([A-Za-z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/
          let mail_format=  /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
          
          if(mail_format.test(signup_mail.value)){
            //  return true;
            signup_mail_error.innerHTML="";
            signup_mail.style.borderColor="#6dcbc7";
          }
          else{
              signup_mail.style.borderColor="red";
              signup_mail_error.innerHTML="Enter a valid email address";
              flag=1;
          }
        }

        
      //Email check end

          // Mobile number check
          var flag=0;
          function chcknumber(){
            var number=document.getElementById("mobile");
            var number_format= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            
            if(number_format.test(number.value)){
              mobile_error.innerHTML="";
              number.style.borderColor="#6dcbc7";
            }
            else{
              mobile_error.innerHTML="Enter a valid phone number";
              number.style.border="1px solid red";
                flag=1;
            }
          }
        

          //mobile number check end


        //password check
        function chckpassword(){
          document.getElementById("password_strength").style.visibility="visible";
          var pswd=document.getElementById("pswd");
          var lowcase=/[a-z]/g;
          var uppercase=/[A-Z]/g;
          var numbers=/[0-9]/g;
          var strength=document.getElementById("strength_meter");
          if(pswd.value.match(lowcase)){
            document.getElementById("letter").style.color="green";
            lowcase_length=pswd.value.match(lowcase).length;
           
          }
          else{
            document.getElementById("letter").style.color="red";
            flag=1;
          }
          if(pswd.value.match(uppercase)){
            document.getElementById("capital").style.color="green";
            uppercase_length=pswd.value.match(uppercase).length;
            
          }
          else{
            document.getElementById("capital").style.color="red";
            flag=1;
          }
          if(pswd.value.match(numbers)){
            document.getElementById("number").style.color="green";
            number_length=pswd.value.match(numbers).length;
            
          }
          else{
            document.getElementById("number").style.color="red";
            flag=1;
          }
        
          if(pswd.value.match(lowcase) && pswd.value.match(uppercase) && pswd.value.match(numbers) && pswd.value.length>=8 ){
            strength.style.background="linear-gradient(90deg, rgba(0,255,25,1) 0%, rgba(0,255,25,1) 100%)";
            strength.innerHTML="Strong";
            pswd.style.borderColor="#6dcbc7";
          }
          else{
            strength.style.background="linear-gradient(90deg, rgba(255,113,0,1) 66%, rgba(255,255,255,1) 66%)";
            strength.innerHTML="Medium";
            pswd.style.borderColor="orange";
          }
        
            if(pswd.value.length<8 ){
              document.getElementById("length").style.color="red";
              flag=1;
              if(pswd.value.length<=3){
                strength.style.background="linear-gradient(90deg, rgb(251, 84, 84) 0%, rgb(255, 0, 0) 33%, rgba(255,255,255,1) 33%)"; 
                strength.innerHTML="Poor";
                pswd.style.borderColor="red";
              }
            }
            else {
      
              document.getElementById("length").style.color="green"; 
            }
        }
        //password check end

          // password confirmation
          function pswd_confirm(){
                      
            var re_pswd=document.getElementById("re_password");
            var pswds=document.getElementById("pswd");
            var repswd_error=document.getElementById("repswd_error");
              if (pswds.value != re_pswd.value) {
                repswd_error.innerHTML="Passwords not match";
                re_pswd.style.border="1px solid red";
                flag =1;
              }
              else{
                repswd_error.innerHTML="";
                re_pswd.style.borderColor="#6dcbc7";
              }
            }
          //password confirmation end
        function check()
        {
            flag=0;
            chckusername();
            chcknumber();
            chckmail();
            chckpassword();
            pswd_confirm();
            if(flag==1)
                return false;
            else
                return true;
        }

        function login_password(){
          var login_pswd=document.getElementById("login_pswd");
          if(login_pswd.value==0){
            document.getElementById("login_pswd_error").innerHTML="Enter password";
            flag=1;
            login_pswd.style.borderColor="red";
          }
          else{
            document.getElementById("login_pswd_error").innerHTML="";
            login_pswd.style.borderColor="#6dcbc7";

          }
        }
        function login_check(){
          flag=0;
          chckmail();
          login_password();
          if(flag==1)
                return false;
            else
                return true;
        }