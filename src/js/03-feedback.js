// Додатковий імпорт стилів
import '../css/common.css';
import '../css/03-feedback.css';

import throttle from 'lodash.throttle';

const elem = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textArea: document.querySelector('.feedback-form textarea'),
};

const email = elem.email.textContent;
const message = elem.textArea.textContent;
const feedback = {
  email: email,
  message: message,
};

populateForm();

// console.log(email);
// console.log(message);
// console.log(feedback);

elem.form.addEventListener('submit', textAreaSub);
elem.email.addEventListener('input', onInput);
elem.textArea.addEventListener('input', throttle(onTextAreaInput, 500));

function onInput(event) {
  const emailNew = event.currentTarget.value;
  feedback.email = emailNew;
  //   console.log(feedback);
  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}

function onTextAreaInput(event) {
  const messageNew = event.currentTarget.value;
  feedback.message = messageNew;
  //   console.log(feedback);
  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}

function textAreaSub(event) {
  if (elem.email.value && elem.textArea.value) {
    event.preventDefault();
    console.log(feedback);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  } else {
    alert('Будь ласка заповніть всі поля');
  }
}

function populateForm(event) {
  const savedMessage = localStorage.getItem('feedback-form-state');
  if (savedMessage) {
    feedbackNew = JSON.parse(savedMessage);
    elem.email.value = feedbackNew.email;
    elem.textArea.value = feedbackNew.message;
  }
}
