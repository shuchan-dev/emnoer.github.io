const form = document.getElementById("my_form");

form.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();

  // 👇️ Send data to server here
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let company = document.getElementById("company").value;
  let telp = document.getElementById("telp").value;

  var contactParams = {
    name: name,
    email: email,
    message: message,
    company: company,
    telp: telp,
  };
  emailjs
    .send("service_zwkzyau", "template_e2e9tno", contactParams)
    .then((res) => {
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
  // 👇️ Reset form here
  form.reset();
});
