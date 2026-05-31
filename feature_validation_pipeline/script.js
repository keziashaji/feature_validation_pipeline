function validateForm(){

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

let confirmPassword =
document.getElementById("confirmPassword").value;

let messages=[];

let emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name.trim()===""){
messages.push("Name is required");
}

if(!emailPattern.test(email)){
messages.push("Invalid Email");
}

if(password.length<8){
messages.push("Password must be 8 characters");
}

if(password!==confirmPassword){
messages.push("Passwords do not match");
}

let result =
document.getElementById("result");

if(messages.length===0){

result.innerHTML=
"✅ Validation Successful";

}
else{

result.innerHTML=
messages.join("<br>");

}

}