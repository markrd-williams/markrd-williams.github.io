const scriptURL = "https://script.google.com/macros/s/AKfycbwsgBVAZfrLMTd9o1U2oesVv7N3tJuivubP1obA22s1lJ6ucZQ8iv_2GcuXRR40pUssEw/exec"
const form = document.getElementById("rsvp-form")
const button = document.getElementById("rsvp-submit");
const status = document.getElementById("rsvp-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  button.disabled = true;
  status.textContent = "Sending...";


  const formData = new FormData(e.target);


  if (formData.mobile_number && formData.mobile_number !== '') {
	  return ContentService.createTextOutput(
		  JSON.stringify({ result: 'success', message: 'Bot detected' }),
  	).setMimeType(ContentService.MimeType.JSON)
  }

  fetch(scriptURL, {method: 'POST', body: new FormData(form) })
    .then(response => response.json)
    .then(response => { 
      status.textContent = "Thank you for sending your RSVP!"
    })
    .catch(error => {
      status.textContent = "Sorry, something went wrong!"
    })

  button.disabled = false;
})

