let currentForm = {};

async function SubmitForm(token = '') {
  currentForm.form.classList.remove('failed-request');
  currentForm.form.classList.remove('success-request');
  currentForm.form.classList.add('sending-form');
  
  try {
    const formData = new FormData(currentForm.form);
    const data = {};

    // Add non-file fields to data and count their size
    for (let [key, value] of formData) {
      if (!(value instanceof File) && !(value instanceof FileList)) {
        data[key] = typeof value === 'string' ? value.trim() : value;
      }
    }

    await emailjs.send(currentForm.serviceId, currentForm.emailTemplate, {
      ...data,
      ...(token ? {"g-recaptcha-response": token} : {})
    });

    currentForm.form.reset();
    currentForm.form.classList.add('success-request');
    scrollTo(currentForm.form.clientTop, currentForm.form.clientLeft);
    location.hostname !== 'localhost' && grecaptcha.reset();
  } catch (e) {
    console.error("Error submitting form:", e);
    currentForm.form.classList.add('failed-request');
    scrollTo(currentForm.form.clientTop, currentForm.form.clientLeft);
  } finally {
    currentForm.form.classList.remove('sending-form');
  }
}

function handleForm(formId, emailTemplate, serviceId) {
  try {
    const form = document.getElementById(formId);
    const successBtn = form.querySelector('.success button');
    const failedBtn = form.querySelector('.error button');

    [successBtn, failedBtn].forEach(btn => {
      btn.addEventListener('click', () => {
        btn.parentNode.style.display = 'none';
      })
    })
    
    form.addEventListener('submit', ev => {
      ev.preventDefault();
      
      if (!form.checkValidity()) {
        form.classList.add('invalid-form');
        scrollTo(form.clientTop, form.clientLeft);
      } else {
        form.classList.remove('invalid-form');
        currentForm = {form, emailTemplate, serviceId};
        grecaptcha.execute()
      }
    })
  } catch (e) {
    console.error(`Error handling form with ID ${formId}:`, e);
  }
}
