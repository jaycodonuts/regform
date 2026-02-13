// Registration Form Validation Script

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    // Get all form elements
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const username = document.getElementById('username');
    const phoneNumber = document.getElementById('phoneNumber');
    const email = document.getElementById('email');
    const gender = document.getElementById('gender');
    const dob = document.getElementById('dob');
    const country = document.getElementById('country');
    const company = document.getElementById('company');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const agreeTerms = document.getElementById('agreeTerms');
    
    // Real-time validation for First Name - only letters
    firstName.addEventListener('input', function() {
        validateName(this, 'firstNameError', 'First Name');
    });
    
    // Real-time validation for Last Name - only letters
    lastName.addEventListener('input', function() {
        validateName(this, 'lastNameError', 'Last Name');
    });
    
    // Real-time validation for Username - alphanumeric and underscore
    username.addEventListener('input', function() {
        validateUsername(this);
    });
    
    // Real-time validation for Phone Number - only numbers
    phoneNumber.addEventListener('input', function() {
        validatePhoneNumber(this);
    });
    
    // Real-time validation for Email
    email.addEventListener('input', function() {
        validateEmail(this);
    });
    
    // Real-time validation for Date of Birth
    dob.addEventListener('input', function() {
        validateDOB(this);
    });
    
    // Real-time validation for Password
    password.addEventListener('input', function() {
        validatePassword(this);
        // Also revalidate confirm password if it has a value
        if (confirmPassword.value) {
            validateConfirmPassword(confirmPassword);
        }
    });
    
    // Real-time validation for Confirm Password
    confirmPassword.addEventListener('input', function() {
        validateConfirmPassword(this);
    });
    
    // Validation for dropdown fields on change
    gender.addEventListener('change', function() {
        validateSelect(this, 'genderError', 'Gender');
    });
    
    country.addEventListener('change', function() {
        validateSelect(this, 'countryError', 'Country');
    });
    
    // Form submission validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        let isValid = true;
        
        isValid = validateName(firstName, 'firstNameError', 'First Name') && isValid;
        isValid = validateName(lastName, 'lastNameError', 'Last Name') && isValid;
        isValid = validateUsername(username) && isValid;
        isValid = validatePhoneNumber(phoneNumber) && isValid;
        isValid = validateEmail(email) && isValid;
        isValid = validateSelect(gender, 'genderError', 'Gender') && isValid;
        isValid = validateDOB(dob) && isValid;
        isValid = validateSelect(country, 'countryError', 'Country') && isValid;
        isValid = validatePassword(password) && isValid;
        isValid = validateConfirmPassword(confirmPassword) && isValid;
        isValid = validateCheckbox(agreeTerms) && isValid;
        
        if (isValid) {
            // If form is valid, show success message
            showSuccessToast('Registration successful! Form data is valid.');
            
            // You can submit the form data to a server here
            // For now, we'll just log the data to console
            console.log('Form Data:', {
                firstName: firstName.value,
                lastName: lastName.value,
                username: username.value,
                phoneNumber: phoneNumber.value,
                email: email.value,
                gender: gender.value,
                dob: dob.value,
                country: country.value,
                company: company.value,
                agreeTerms: agreeTerms.checked,
                receiveOffers: document.getElementById('receiveOffers').checked
            });
            
            // Refresh page after showing success message
            setTimeout(function() {
                location.reload();
            }, 2000); // 2 second delay to show the success message
        } else {
            showErrorToast('Please fill out all required information!');
        }
    });
    
    // Validation Functions
    
    /**
     * Validate name fields (First Name, Last Name) - only letters and spaces
     */
    function validateName(field, errorId, fieldName) {
        const value = field.value.trim();
        const errorElement = document.getElementById(errorId);
        const nameRegex = /^[A-Za-z\s]+$/;
        
        if (value === '') {
            showError(field, errorElement, `${fieldName} is required.`);
            return false;
        } else if (!nameRegex.test(value)) {
            showError(field, errorElement, `${fieldName} should only contain letters.`);
            return false;
        } else if (value.length < 2) {
            showError(field, errorElement, `${fieldName} must be at least 2 characters.`);
            return false;
        } else {
            clearError(field, errorElement);
            return true;
        }
    }
    
    /**
     * Validate username - alphanumeric and underscore, 3-20 characters
     */
    function validateUsername(field) {
        const value = field.value.trim();
        const errorElement = document.getElementById('usernameError');
        const usernameRegex = /^[A-Za-z0-9_]+$/;
        
        if (value === '') {
            showError(field, errorElement, 'Username is required.');
            return false;
        } else if (!usernameRegex.test(value)) {
            showError(field, errorElement, 'Username can only contain letters, numbers, and underscores.');
            return false;
        } else if (value.length < 3 || value.length > 20) {
            showError(field, errorElement, 'Username must be between 3 and 20 characters.');
            return false;
        } else {
            clearError(field, errorElement);
            return true;
        }
    }
    
    /**
     * Validate phone number - only numbers, 10-15 digits
     */
    function validatePhoneNumber(field) {
        const value = field.value.trim();
        const errorElement = document.getElementById('phoneNumberError');
        const phoneRegex = /^[0-9]+$/;
        
        if (value === '') {
            showError(field, errorElement, 'Phone Number is required.');
            return false;
        } else if (!phoneRegex.test(value)) {
            showError(field, errorElement, 'Phone Number should only contain numbers.');
            return false;
        } else if (value.length < 10 || value.length > 15) {
            showError(field, errorElement, 'Phone Number must be between 10 and 15 digits.');
            return false;
        } else {
            clearError(field, errorElement);
            return true;
        }
    }
    
    /**
     * Validate email address
     */
    function validateEmail(field) {
        const value = field.value.trim();
        const errorElement = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (value === '') {
            showError(field, errorElement, 'Email Address is required.');
            return false;
        } else if (!emailRegex.test(value)) {
            showError(field, errorElement, 'Please enter a valid email address.');
            return false;
        } else {
            clearError(field, errorElement);
            return true;
        }
    }
    
    /**
     * Validate Date of Birth - DD/MM/YY format
     */
    function validateDOB(field) {
        const value = field.value.trim();
        const errorElement = document.getElementById('dobError');
        const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{2}$/;
        
        if (value === '') {
            showError(field, errorElement, 'Date of Birth is required.');
            return false;
        } else if (!dobRegex.test(value)) {
            showError(field, errorElement, 'Please use DD/MM/YY format (e.g., 15/03/95).');
            return false;
        } else {
            // Additional validation to check if date is valid
            const parts = value.split('/');
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10);
            const year = parseInt(parts[2], 10);
            
            // Check if month is valid
            if (month < 1 || month > 12) {
                showError(field, errorElement, 'Invalid month. Please use 01-12.');
                return false;
            }
            
            // Check if day is valid for the month
            const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (day < 1 || day > daysInMonth[month - 1]) {
                showError(field, errorElement, 'Invalid day for the selected month.');
                return false;
            }
            
            clearError(field, errorElement);
            return true;
        }
    }
    
    /**
     * Validate password - minimum 8 characters, at least one uppercase, lowercase, number
     */
    function validatePassword(field) {
        const value = field.value;
        const errorElement = document.getElementById('passwordError');
        
        if (value === '') {
            showError(field, errorElement, 'Password is required.');
            return false;
        } else if (value.length < 8) {
            showError(field, errorElement, 'Password must be at least 8 characters long.');
            return false;
        } else if (!/[A-Z]/.test(value)) {
            showError(field, errorElement, 'Password must contain at least one uppercase letter.');
            return false;
        } else if (!/[a-z]/.test(value)) {
            showError(field, errorElement, 'Password must contain at least one lowercase letter.');
            return false;
        } else if (!/[0-9]/.test(value)) {
            showError(field, errorElement, 'Password must contain at least one number.');
            return false;
        } else {
            clearError(field, errorElement);
            return true;
        }
    }
    
    /**
     * Validate confirm password - must match password
     */
    function validateConfirmPassword(field) {
        const value = field.value;
        const passwordValue = password.value;
        const errorElement = document.getElementById('confirmPasswordError');
        
        if (value === '') {
            showError(field, errorElement, 'Please confirm your password.');
            return false;
        } else if (value !== passwordValue) {
            showError(field, errorElement, 'Passwords do not match.');
            return false;
        } else {
            clearError(field, errorElement);
            return true;
        }
    }
    
    /**
     * Validate select dropdown fields
     */
    function validateSelect(field, errorId, fieldName) {
        const value = field.value;
        const errorElement = document.getElementById(errorId);
        
        if (value === '' || value === null) {
            showError(field, errorElement, `Please select a ${fieldName}.`);
            return false;
        } else {
            clearError(field, errorElement);
            return true;
        }
    }
    
    /**
     * Validate required text fields
     */
    function validateRequired(field, errorId, fieldName) {
        const value = field.value.trim();
        const errorElement = document.getElementById(errorId);
        
        if (value === '') {
            showError(field, errorElement, `${fieldName} is required.`);
            return false;
        } else if (value.length < 5) {
            showError(field, errorElement, `${fieldName} must be at least 5 characters.`);
            return false;
        } else {
            clearError(field, errorElement);
            return true;
        }
    }
    
    /**
     * Validate checkbox (terms and conditions)
     */
    function validateCheckbox(field) {
        const errorElement = document.getElementById('agreeTermsError');
        
        if (!field.checked) {
            errorElement.textContent = 'You must agree to the terms & conditions.';
            return false;
        } else {
            errorElement.textContent = '';
            return true;
        }
    }
    
    /**
     * Show error message and add error class
     */
    function showError(field, errorElement, message) {
        field.classList.add('error');
        errorElement.textContent = message;
    }
    
    /**
     * Clear error message and remove error class
     */
    function clearError(field, errorElement) {
        field.classList.remove('error');
        errorElement.textContent = '';
    }
    
    /**
     * Clear all errors (used after successful form submission)
     */
    function clearAllErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        const errorFields = document.querySelectorAll('.error');
        
        errorMessages.forEach(function(element) {
            element.textContent = '';
        });
        
        errorFields.forEach(function(element) {
            element.classList.remove('error');
        });
    }
    
    /**
     * Show error toast notification
     */
    function showErrorToast(message) {
        const toastElement = document.getElementById('validationToast');
        const toastMessage = document.getElementById('toastMessage');
        
        // Set message
        toastMessage.textContent = message;
        
        // Change to error style
        toastElement.classList.remove('bg-success');
        toastElement.classList.add('bg-danger');
        
        // Show toast
        const toast = new bootstrap.Toast(toastElement, {
            autohide: true,
            delay: 4000
        });
        toast.show();
    }
    
    /**
     * Show success toast notification
     */
    function showSuccessToast(message) {
        const toastElement = document.getElementById('validationToast');
        const toastMessage = document.getElementById('toastMessage');
        
        // Set message
        toastMessage.textContent = message;
        
        // Change to success style
        toastElement.classList.remove('bg-danger');
        toastElement.classList.add('bg-success');
        
        // Show toast
        const toast = new bootstrap.Toast(toastElement, {
            autohide: true,
            delay: 4000
        });
        toast.show();
    }
});
