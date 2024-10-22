"use strict";
// document.getElementById("formFields")?.addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the default form submission
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = validateEmail;
exports.validateRequiredFields = validateRequiredFields;
//     // Fetch form values
//     const name = (document.getElementById("name") as HTMLInputElement).value;
//     const email = (document.getElementById("email") as HTMLInputElement).value;
//     const contactNumber = (document.getElementById("contactNumber") as HTMLInputElement).value;
//     const subject = (document.getElementById("subject") as HTMLInputElement).value;
//     const message = (document.getElementById("message") as HTMLInputElement).value;
//     // Simple validation (You can make it more detailed)
//     if (!name || !email || !contactNumber || !subject || !message) {
//         alert("All fields are required!");
//         return;
//     }
//     // Validate email format
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         alert("Please enter a valid email address");
//         return;
//     }
//     // Prepare data to be sent to MockAPI
//     const formData = {
//         Name: name, // Mapping 'name' to 'Name' field in MockAPI
//         EmailId: email, // Mapping 'email' to 'EmailId'
//         Contact: contactNumber, // Mapping 'contactNumber' to 'Contact'
//         Subject: subject, // Mapping 'subject' to 'Subject'
//         Message: message // Mapping 'message' to 'Message'
//     };
//     // Call the MockAPI endpoint to submit the form
//     fetch("https://6717d2d8b910c6a6e02a26af.mockapi.io/contactUs", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => {
//         if (response.ok) {
//             alert("Form submitted successfully!");
//             // Optionally reset the form after successful submission
//             (document.getElementById("formFields") as HTMLFormElement).reset();
//         } else {
//             alert("Failed to submit the form. Please try again.");
//         }
//     })
//     .catch(error => {
//         console.error("Error submitting the form:", error);
//         alert("An error occurred. Please try again later.");
//     });
// });
// formValidation.ts
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function validateRequiredFields(...fields) {
    return fields.every(field => field.trim() !== "");
}
