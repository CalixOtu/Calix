

function SendMail() {
    emailjs.send("service_vdmjvud","template_ocjsvoc", {
    from_name: document.getElementById('name').value,
    email_id: document.getElementById('mail').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
}).then(alert("Message Successfully Sent!"));
}
