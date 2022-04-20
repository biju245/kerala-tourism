function getloginvalidated(){
   var umail = document.getElementById('username');
   var upass = document.getElementById('userpass');
   
   if(umail.value.trim()=="")
   {
       umail.style.border = "2px solid red";
       alert("Username cannot be empty");
       return false;
   }
   else if(upass.value.trim()=="")
   {
       upass.style.border = "2px solid red";
       alert("Password cannot be empty");
       return false;
   }
   else{
       return true;
   }  
}

function signupvalidate(){
    let ufname = document.getElementById('inputName');
    let ulname = document.getElementById('inputLname');
    let umail = document.getElementById('inputEmail');
    let uphone = document.getElementById('inputPhone');
    let upass = document.getElementById('inputPass');
    let repass = document.getElementById('inputrePass');
    let uaddress = document.getElementById('inputAddress');
    let address2 = document.getElementById('inputAddress2');
    let ucity = document.getElementById('inputCity');
    let ustate = document.getElementById('inputState');
    let upin = document.getElementById('inputZip');

    if(ufname.value.trim()=="")
    {
        ufname.style.border = "2px solid red";
        alert("Firstname cannot be empty");
        ufname.focus();
        return false;
    }
    else if(ulname.value.trim()=="")
    {
        ulname.style.border = "2px solid red";
        alert("Lastname cannot be empty");
        return false;
    }
    else if(umail.value.trim()=="")
    {
        umail.style.border = "2px solid red";
        alert("Email cannot be empty");
        return false;
    }
    else if(uphone.value.trim()=="")
    {
        uphone.style.border = "2px solid red";
        alert("Phone cannot be empty");
        return false;
    }   
    else if(upass.value.trim()=="")
    {
        upass.style.border = "2px solid red";
        alert("Password cannot be empty");
        return false;
    }    
    else if(repass.value.trim()=="")
    {
        repass.style.border = "2px solid red";
        alert("Password Retype cannot be empty");
        return false;
    }
    else if(repass.value.trim()!=upass.value.trim())
    {
        repass.style.border = "2px solid red";
        alert("Password not matching");
        return false;
    }
    else if(uaddress.value.trim()=="" && address2.value.trim()=="")
    {
        uaddress.style.border = "2px solid red";
        alert("Address cannot be empty");
        return false;
    }
    else if(ucity.value.trim()=="")
    {
        ucity.style.border = "2px solid red";
        alert("City cannot be empty");
        return false;
    }
    else if(ustate.value.trim()=="")
    {
        ustate.style.border = "2px solid red";
        alert("State cannot be empty");
        return false;
    }
    else if(upin.value.trim()=="")
    {
        upin.style.border = "2px solid red";
        alert("Pin cannot be empty");
        return false;
    }
    else
    {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(uphone.value.match(phoneno))
        {            
            var pword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
            if(upass.value.match(pword))
            {
                return true;
            }
            else
            {
                alert("Password should have minimum 8 characters with\n - One Uppercase character -\n - One lower case character -\n - One Number");
                return false;
            } 
        }
        else
        {
            alert("Phone No is not valid");
            return false;
        }      
    }
}


function clearstyle(fldid)
{
	var fldval	 	=	document.getElementById(fldid);
	if(fldval.value!='')
	{
        fldval.style.border = "1px solid #cccccc";
	}	
}