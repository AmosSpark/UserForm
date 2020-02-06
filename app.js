// Select Variables

const name = document.querySelector("#name"),
      namefeedBack = document.querySelector(".name-feedback"),
      zip  = document.querySelector("#zip"),
      zipfeedBack = document.querySelector(".zip-feedback"),
      email = document.querySelector("#email"),
      emailfeedBack = document.querySelector(".email-feedback"),
      phone = document.querySelector("#phone"),
      phonefeedBack = document.querySelector(".phone-feedback"),
      input = document.querySelector("input");

// Event Lister fn

const loadEvents = () => {
    name.addEventListener("keyup",validateName);
    zip.addEventListener("keyup",validateZip);
    email.addEventListener("keyup",validateEmail);
    phone.addEventListener("keyup",validatePhone);
};

// Event fn

const validateName = () => {  // Validate user name
    const re = /^[A-Za-z]{2,10}$/;

    if (!re.test(name.value)) {
        namefeedBack.classList.add("validate");  
    } else {
        namefeedBack.classList.remove("validate");
    }
};

const validateZip = () => {  // Validate user zip code
    const re = /^[0-9]{5}$/;

    if(!re.test(zip.value)) {
        zipfeedBack.classList.add("validate");
    } else {
        zipfeedBack.classList.remove("validate");
    }
};

const validateEmail = () => {  // Validate uer email
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)) {
        emailfeedBack.classList.add("validate");
    } else {
        emailfeedBack.classList.remove("validate");
    }

};

const validatePhone = () => {  // Validate user phone
    const re = /^(\+?\(?[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{3}[-. ]?[0-9]{4})?([0-9]{3}[-. ]?[0-9]{3}[-. ]?[0-9]{3}[-. ]?[0-9]{2})?$/;

    if(!re.test(phone.value)) {
        phonefeedBack.classList.add("validate");
    } else {
        phonefeedBack.classList.remove("validate");
    }
};

// Invove Event Lister fn

loadEvents();

