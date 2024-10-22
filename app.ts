// Get the form element by ID
const form = document.getElementById("formFields") as HTMLFormElement;

// Add an event listener for form submission
form.addEventListener("submit", async (event: Event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form values
    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const email = (document.getElementById("email") as HTMLInputElement).value.trim();
    const contactNumber = (document.getElementById("contactNumber") as HTMLInputElement).value.trim();
    const subject = (document.getElementById("subject") as HTMLInputElement).value.trim();
    const message = (document.getElementById("message") as HTMLInputElement).value.trim();

    // Validate required fields
    if (!name || !email || !contactNumber || !subject || !message) {
        alert("All fields are required!");
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate contact number (10 digits)
    const contactPattern = /^\d{10}$/;
    if (!contactPattern.test(contactNumber)) {
        alert("Please enter a valid 10-digit contact number.");
        return;
    }

    // Prepare the data to be sent to the API
    const formData = {
        Name: name,
        EmailId: email,
        Contact: contactNumber,
        Subject: subject,
        Message: message
    };

    // Log the formData to verify data before sending
    console.log("Submitting form data:", formData);

    // Submit the form data to the API
    try {
        const response = await fetch("http://localhost:3000/contactUs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Form successfully submitted:", result);
            alert("Form submitted successfully!");
            form.reset(); // Reset the form after successful submission
        } else {
            const errorText = await response.text();
            console.error("Failed to submit the form:", errorText);
            alert("Failed to submit the form. Please try again.");
        }
    } catch (error) {
        console.error("Error submitting the form:", error);
        alert("An error occurred. Please try again later.");
    }
});
