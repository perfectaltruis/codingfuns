  function validateForm() {
            // Reset error messages
            document.getElementById("nameError").innerHTML = "";
            document.getElementById("emailError").innerHTML = "";
            document.getElementById("passwordError").innerHTML = "";
            document.getElementById("passwordConfirmationError").innerHTML = "";

            // Get form values
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var passwordConfirmation = document.getElementById("passwordConfirmation").value;

            // Validate name
            if (name.length < 3) {
                document.getElementById("nameError").innerHTML = "Name must be at least 3 characters long.";
                return false;
            }

            // Validate email format
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById("emailError").innerHTML = "Invalid email format.";
                return false;
            }

            // Validate password length
            if (password.length < 6) {
                document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters long.";
                return false;
            }

            // Validate password confirmation
            if (password !== passwordConfirmation) {
                document.getElementById("passwordConfirmationError").innerHTML = "Passwords do not match.";
                return false;
            }

            // If all validations pass, the form can be submitted
            return true;
        }
