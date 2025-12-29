// Get DOM elements
const formTitle = document.getElementById("formTitle");
const switchBtn = document.getElementById("switchBtn");
const switchText = document.getElementById("switchText");
const confirmPasswordGroup = document.getElementById("confirmPasswordGroup");
const confirmPassword = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");
const btnText = document.getElementById("btnText");
const errorMsg = document.getElementById("errorMsg");
const formSubtitle = document.querySelector(".form-subtitle");

let isLogin = true;

// Switch between Login and Register
switchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isLogin = !isLogin;

    if (isLogin) {
        // Switch to Login mode
        formTitle.innerText = "Welcome Back";
        formSubtitle.innerText = "Please login to continue";
        btnText.innerText = "Login";
        switchText.innerText = "Don't have an account?";
        switchBtn.innerText = "Create Account";
        confirmPasswordGroup.style.display = "none";
        confirmPassword.removeAttribute("required");
    } else {
        // Switch to Register mode
        formTitle.innerText = "Create Account";
        formSubtitle.innerText = "Join ShopEasy today!";
        btnText.innerText = "Register";
        switchText.innerText = "Already have an account?";
        switchBtn.innerText = "Login";
        confirmPasswordGroup.style.display = "block";
        confirmPassword.setAttribute("required", "required");
    }

    // Clear error message
    errorMsg.innerText = "";
    
    // Add animation
    document.querySelector(".login-form-wrapper").style.animation = "none";
    setTimeout(() => {
        document.querySelector(".login-form-wrapper").style.animation = "slideUp 0.3s ease";
    }, 10);
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Handle form submission
document.getElementById("authForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("userEmail").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const confirm = confirmPassword.value;

    // Clear previous error
    errorMsg.innerText = "";

    // Validate input
    if (!email || !password) {
        showError("Please fill in all fields");
        return;
    }

    if (!isValidEmail(email)) {
        showError("Please enter a valid email address");
        return;
    }

    if (password.length < 6) {
        showError("Password must be at least 6 characters");
        return;
    }

    // Get users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (!isLogin) {
        // REGISTER MODE
        if (password !== confirm) {
            showError("Passwords do not match");
            return;
        }

        // Check if email already exists
        const userExists = users.find(u => u.email === email);
        if (userExists) {
            showError("This email is already registered");
            return;
        }

        // Add new user
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));

        // Show success message
        showSuccess("Account created successfully! Redirecting to login...");
        
        // Switch to login after 1.5 seconds
        setTimeout(() => {
            switchBtn.click();
            document.getElementById("userEmail").value = email;
            document.getElementById("password").value = "";
        }, 1500);
        return;
    }

    // LOGIN MODE
    const validUser = users.find(
        u => u.email === email && u.password === password
    );

    if (validUser) {
        // Login successful
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", email);
        
        // Show success and redirect
        showSuccess("Login successful! Redirecting...");
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        showError("Invalid email or password");
    }
});

// Show error message
function showError(message) {
    errorMsg.innerText = message;
    errorMsg.style.background = "#ffe5e8";
    errorMsg.style.color = "#ff4757";
    
    // Shake animation
    errorMsg.style.animation = "shake 0.5s";
    setTimeout(() => {
        errorMsg.style.animation = "";
    }, 500);
}

// Show success message
function showSuccess(message) {
    errorMsg.innerText = message;
    errorMsg.style.background = "#d4edda";
    errorMsg.style.color = "#155724";
}

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);