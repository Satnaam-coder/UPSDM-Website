document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch input values
    var nameEnglish = document.getElementById("nameEnglish").value;
    var nameHindi = document.getElementById("nameHindi").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var email = document.getElementById("email").value;
    var trainingPartner = document.getElementById("trainingPartner").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validate and process the form data
    // You can add your logic here
    console.log("Name (English):", nameEnglish);
    console.log("नाम (हिंदी):", nameHindi);
    console.log("Mobile Number:", mobileNumber);
    console.log("Email:", email);
    console.log("Training Partner:", trainingPartner);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
});
