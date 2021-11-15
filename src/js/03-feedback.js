
var throttle = require('lodash.throttle');
const feedbackForm = document.querySelector(".feedback-form");

const savedFormDataJSON = localStorage.getItem("feedback-form-state");
const savedFormData = JSON.parse(savedFormDataJSON);

if (savedFormData !== null) {
    feedbackForm["email"].value = savedFormData.email;
    feedbackForm["message"].value = savedFormData.message;
};

