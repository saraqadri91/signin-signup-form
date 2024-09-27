var loginBtn = document.getElementById("login");
loginBtn && loginBtn.addEventListener("click", function () {
    var logEmail = document.getElementById("emaillog").value;
    var logPass = document.getElementById("pass").value;

    // Fetch users from localStorage
    var storedUsers = JSON.parse(localStorage.getItem("userData")) || [];

    // Check if user exists
    var userFound = false;
    for (var user of storedUsers) {
        if (user.email === logEmail && user.password === logPass) {
            userFound = true;
            Swal.fire({
                icon: "success",
                title: "Login successful!",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(function () {
                window.location.href = "web.html";
            }, 1500);
            break;
        }
    }

    if (!userFound) {
        Swal.fire({
            icon: "error",
            title: "Login failed",
            text: "Incorrect email or password",
            showConfirmButton: true
        });
    }
});




var users = [];

// Get the create button
var createBtn = document.getElementById("createbtn");
createBtn && createBtn.addEventListener("click", function () {
    // Get the input values
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    // Check if any field is empty
    if (name.value === "" || email.value === "" || password.value === "") {
        Swal.fire({
            text: "Error: Please fill in all fields.",
            icon: "error"
        });
    } else {
        // Create user object
        var userObj = {
            name: name.value,
            email: email.value,
            password: password.value // Corrected this to 'password'
        };

        // Fetch existing users from localStorage or initialize as an empty array
        var fetchingData = JSON.parse(localStorage.getItem("userData")) || [];

        // Add the new user to the array
        fetchingData.push(userObj);

        // Store the updated user array back to localStorage
        localStorage.setItem("userData", JSON.stringify(fetchingData));

        // Show success message
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your account has been created successfully!",
            showConfirmButton: false,
            timer: 1500
        });

        // Redirect to login page after a short delay
        setTimeout(function () {
            window.location.href = "index.html";
        }, 1500);
    }
});
