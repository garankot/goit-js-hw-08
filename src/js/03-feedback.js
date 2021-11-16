import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const feedbackFormState = localStorage.getItem('feedback-form-state');
const parseData = JSON.parse(feedbackFormState);

if (parseData !== "") {
  feedbackForm['email'].value = parseData.email;
  feedbackForm['message'].value = parseData.message;
}

feedbackForm.addEventListener(
  'input',
  throttle(event => {
    const formData = {
      email: `${feedbackForm['email'].value}`,
      message: `${feedbackForm['message'].value}`,
    };
    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem('feedback-form-state', formDataJSON);
  }, 500)
);

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (
    feedbackForm['email'].value === '' ||
    feedbackForm['message'].value === ''
  ) {
    return alert('All form fields must be filled out!');
  }
  const formData = {
    email: `${feedbackForm['email'].value}`,
    message: `${feedbackForm['message'].value}`,
  };
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  feedbackForm['email'].value = '';
  feedbackForm['message'].value = '';
});
