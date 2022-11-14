// function sendMail() {
//     var params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       message: document.getElementById("message").value,
//     };
  
//     const serviceID = "service_zwkzyau";
//     const templateID = "template_e2e9tno";
  
//       emailjs.sendForm(serviceID, templateID, params)
//       .then(res=>{
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//           document.getElementById("message").value = "";
//           console.log(res);
//           alert("Your message sent successfully!!")
  
//       })
//       .catch(err=>console.log(err));
  
//   }


  /* Sending Email from Contact Section */


function sendmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

        var contactParams = {
            name: name,
            email: email,
            message: message
        };

        emailjs.send('service_zwkzyau', 'template_e2e9tno', contactParams)
        .then(res => {
            console.log(res)
            alert("Your message sent successfully!!")
        })
        .catch(err=>console.log(err));
}