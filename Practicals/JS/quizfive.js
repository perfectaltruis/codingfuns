
        function validateForm() {
            const registrationNumberRegex = /^BCS-\d{2}-\d{4}-\d{4}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{3,}$/;

            const registrationNumberInput = document.getElementById("registrationNumber");
            const emailInput = document.getElementById("email");
            const profilePhotoInput = document.getElementById("profilePhoto");
            const passwordInput = document.getElementById("password");
            const profilePhotoError = document.getElementById("profilePhotoError");

            // Validate Registration Number
            if (!registrationNumberRegex.test(registrationNumberInput.value)) {
                alert("Invalid Registration Number format. Please use BCS-00-0000-0000.");
                return false;
            }

            // Validate Email
            if (!emailRegex.test(emailInput.value)) {
                alert("Invalid Email format.");
                return false;
            }

            // Validate Profile Photo Format
            const allowedExtensions = /(\.jpg)$/i;
            if (!allowedExtensions.exec(profilePhotoInput.value)) {
                profilePhotoError.innerHTML = "Profile photo must be in jpg format.";
                return false;
            } else {
                profilePhotoError.innerHTML = "";
            }

            // Validate Password
            if (!passwordRegex.test(passwordInput.value)) {
                alert("Invalid Password format. It must contain at least three special characters and one capital letter.");
                return false;
            }

            // If all validations pass, the form can be submitted
            return true;
        }