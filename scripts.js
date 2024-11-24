// Function to copy phone number to clipboard
function copyPhoneNumber() {
    const phoneNumber = "437-361-9206";
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert("Phone number copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy the phone number. Please try again.");
    });
}

// Function to send an email using the contact form
function sendEmail(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const email = "Ariel.xq2025@outlook.com"; // Your email address
    const name = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = `Contact from Personal Website`;
    const body = `
Hi Ariel,

${encodeURIComponent(message)}

Best regards,
${encodeURIComponent(name)} (${encodeURIComponent(userEmail)})`;

    // Create mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open mail client
    window.location.href = mailtoLink;
}

// Function to scroll smoothly to a specific section
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Function to toggle project details
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "none" || !details.style.display) {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// Function to show a pop-up for technical details
function showPopup(contentId) {
    const popup = document.getElementById(contentId);
    if (popup) {
        popup.style.display = "block";
    }
}

// Function to hide the pop-up for technical details
function hidePopup(contentId) {
    const popup = document.getElementById(contentId);
    if (popup) {
        popup.style.display = "none";
    }
}
