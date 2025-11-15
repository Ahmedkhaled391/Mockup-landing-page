function sendMaile(event){
    event.preventDefault();
    let firstName = document.querySelector(".First-name").value
    let lastName = document.querySelector(".Last-name").value
    let emaile = document.querySelector(".emaile").value
    let mes = document.querySelector(".mes").value

    
    let templateParams = {
    from_name: firstName + " " + lastName,
    from_email: emaile,
    message: mes
};

  emailjs
    .send("service_dk0wjm9", "template_2le74gv", templateParams)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Email Sent!',
        text: 'Your message has been sent successfully!',
        confirmButtonColor: '#c27e26'
      });
    })
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: 'Email not sent. Please try again later.',
        confirmButtonColor: '#c27e26'
      });
    });
}
