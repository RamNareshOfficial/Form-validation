console.log(`"Dragon travel desk"`);

let username = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let emptyUsername = document.getElementById("emptyUsername");
let validationUsername = document.getElementById("validationUsername");
let emptyEmail = document.getElementById("emptyEmail");
let validationEmail = document.getElementById("validationEmail");
let emptyPhone = document.getElementById("emptyPhone");
let validationPhone = document.getElementById("validationPhone");
let validUsername = false;
let validEmail = false;
let validPhone = false;
let success = document.getElementById("success");
let failure = document.getElementById("failure");

//--------for username field--------
username.addEventListener("blur", ()=>{
    let regex = /^[a-zA-Z][0-9a-zA-Z]{4,10}$/;  //^ is used for start(0-9) $ is used for end (4 to 10 char) only
    let str = username.value ;
    if(regex.test(str)){
        console.log("matched");
        username.classList.remove("is-invalid");
        emptyUsername.classList.add("visually-hidden");
        validationUsername.classList.add("visually-hidden");
        validUsername = true;
    }
    else if(str == ""){
        console.log("not matched as empty field");
        username.classList.add("is-invalid");
        emptyUsername.classList.remove("visually-hidden");
        validationUsername.classList.add("visually-hidden");
        validUsername = false;
    }
    else{
        console.log("else condition");
        emptyUsername.classList.add("visually-hidden");
        username.classList.add("is-invalid");
        validationUsername.classList.remove("visually-hidden");
        validUsername = false;
    }
})

//-----for email field-----
email.addEventListener("blur", ()=>{
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_0-9a-z\-\.A-Z]+)\.([a-zA-Z]){2,7}$/;  //^ only use at start and $ only at end. Don't use thse in middle
    let str = email.value ;
    if(regex.test(str)){
        console.log("matched");
        email.classList.remove("is-invalid");
        emptyEmail.classList.add("visually-hidden");
        validationEmail.classList.add("visually-hidden");
        validEmail = true;
    }
    else if(str == ""){
        console.log("not matched as empty field");
        email.classList.add("is-invalid");
        emptyEmail.classList.remove("visually-hidden");
        validationEmail.classList.add("visually-hidden");
        validEmail = false;
    }
    else{
        console.log("else condition");
        email.classList.add("is-invalid");
        emptyEmail.classList.add("visually-hidden");
        validationEmail.classList.remove("visually-hidden");
        validEmail = false;
    }
})

//-----for phone number field-----
phone.addEventListener("blur", ()=>{
    let regex = /^[0-9]{10}$/;  //^ is used for start(0-9) $ is used for end (10 char) only
    let str = phone.value ;
    if(regex.test(str)){
        console.log("matched");
        phone.classList.remove("is-invalid");
        emptyPhone.classList.add("visually-hidden");
        validationPhone.classList.add("visually-hidden");
        validPhone = true;
    }
    else if(str == ""){
        console.log("not matched as empty field");
        phone.classList.add("is-invalid");
        emptyPhone.classList.remove("visually-hidden");
        validationPhone.classList.add("visually-hidden");
        validPhone = false;
    }
    else{
        console.log("else condition");
        phone.classList.add("is-invalid");
        emptyPhone.classList.add("visually-hidden");
        validationPhone.classList.remove("visually-hidden");
        validPhone = false;
    }
})

let submit = document.getElementById("submit");
submit.addEventListener("click", ()=>{
    if(validUsername && validEmail && validPhone){
        setTimeout(()=>{
            success.classList.remove("show")
            document.location.reload();
        },2000);
        success.classList.add("show");
        failure.classList.add("visually-hidden");
        success.classList.remove("visually-hidden");
        console.log("form is submitted");
    }
    else{
        console.log("error occured at submit");
        setTimeout(()=>{
            failure.classList.remove("show")
        },2000);
        failure.classList.remove("visually-hidden");
        failure.classList.add("show");
        success.classList.add("visually-hidden");
    }

})