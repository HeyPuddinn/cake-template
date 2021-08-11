const form = document.querySelector("#form-1")
const messInput = document.querySelector("textarea[name='message']");
const nameInput = document.querySelector("input[name='name']");
const mailInput = document.querySelector("input[name='mail']");
const subjectInput = document.querySelector("input[name='subject']");
const errorSubject = subjectInput.nextElementSibling.innerHTML;
const errorName = nameInput.nextElementSibling.innerHTML;
const errorMail = mailInput.nextElementSibling.innerHTML;
const errorMess = messInput.nextElementSibling.innerHTML;

const validateMessInput = () => {
    if(!messInput.value && !subjectInput.value && !mailInput.value) {
        messInput.nextElementSibling.classList.add("error");
        messInput.nextElementSibling.innerHTML = errorMess;
    }
    if(messInput.value.length > 0 && messInput.value.length < 21){
        messInput.nextElementSibling.classList.add("error");
        messInput.nextElementSibling.innerHTML = "that all? really?";
    }
    if(messInput.value.length > 20){
        messInput.nextElementSibling.classList.remove("error");
    }
}

const validateNameInput = () =>{
    if(!nameInput.value){
        nameInput.nextElementSibling.classList.add("error");
        nameInput.nextElementSibling.innerHTML = errorName;
    }
    if(nameInput.value.length < 2 && nameInput.value.length > 0){
        nameInput.nextElementSibling.classList.add("error");
        nameInput.nextElementSibling.innerHTML = "your name must consist of at least 2 characters";
    }
    if(nameInput.value.length > 1){
        nameInput.nextElementSibling.classList.remove("error");
    }
}

const validateEmailInput = () => { 
    var atposition=mailInput.value.indexOf("@");  
    var dotposition=mailInput.value.lastIndexOf(".");  
    if(!mailInput.value){
        mailInput.nextElementSibling.classList.add("error");
        mailInput.nextElementSibling.innerHTML = errorMail;
    } else
    if (atposition > -1 && dotposition > -1){  
        mailInput.nextElementSibling.classList.remove("error");
    }  
}

const validateSubjectInput = () =>{
    if(!subjectInput.value){
        subjectInput.nextElementSibling.classList.add("error");
        subjectInput.nextElementSibling.innerHTML = errorSubject;
    }
    if(subjectInput.value.length < 4 && subjectInput.value.length > 0){
        subjectInput.nextElementSibling.classList.add("error");
        subjectInput.nextElementSibling.innerHTML = "your subject must consist of at least 4 characters";
    }
    if(subjectInput.value.length > 3){
        subjectInput.nextElementSibling.classList.remove("error");
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateMessInput();
    validateNameInput();
    validateSubjectInput();
    validateEmailInput();
});
