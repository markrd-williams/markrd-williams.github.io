const scriptURL = "https://script.google.com/macros/s/AKfycbwsgBVAZfrLMTd9o1U2oesVv7N3tJuivubP1obA22s1lJ6ucZQ8iv_2GcuXRR40pUssEw/exec"
const form = document.getElementById("rsvp-form")

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (e.parameter.mobile_number && e.parameter.mobile_number !== '') {
	  return ContentService.createTextOutput(
		  JSON.stringify({ result: 'success', message: 'Bot detected' }),
  	).setMimeType(ContentService.MimeType.JSON)
  }

  fetch(scriptURL, {method: 'POST', body: new FormData(form) })
    .then(response => response.json)
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

