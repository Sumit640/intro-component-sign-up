let fname = document.getElementById("first_name");
let lname = document.getElementById("last_name");
let email = document.getElementById("email_address");
let paswd = document.getElementById("passwd");

fname.addEventListener("onchange",function(){
    fname.classList.add("hide-placeholder");
});

function validateForm() {

    let flag=0;

    //first name validation
    if(fname.value === ''){
        fname.setAttribute("placeholder","");
        fname.classList.add("icon-svg");
        fname.style.border = "2px solid hsl(0, 100%, 74%)";
        document.getElementById("fname_label").innerHTML = "First name cannot be empty";
        flag=1;
    }
    if(lname.value === ''){
        lname.setAttribute("placeholder","");
        lname.classList.add("icon-svg");
        lname.style.border = "2px solid hsl(0, 100%, 74%)";
        document.getElementById("lname_label").innerHTML = "Last name cannot be empty";
        flag=1;
    }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) === false){
        email.setAttribute("placeholder","");
        email.classList.add("icon-svg");
        email.style.border = "2px solid hsl(0, 100%, 74%)";
        document.getElementById("email_label").innerHTML = "Looks like this is not an email";
        flag=1;
    }
    if(paswd.value === ''){
        paswd.setAttribute("placeholder","");
        paswd.classList.add("icon-svg");
        paswd.style.border = "2px solid hsl(0, 100%, 74%)";
        document.getElementById("pass_label").innerHTML = "Password cannot be empty";
        flag=1;
    }

    if(flag==0)
        return true;
    return false;
}