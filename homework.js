document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('signupForm');

  // Input fields
  const fname = document.getElementById('fname');
  const mname = document.getElementById('mname');
  const lname = document.getElementById('lname');
  const ssn = document.getElementById('ssn');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');

  // Error fields
  const fnameError = document.getElementById('fnameError');
  const mnameError = document.getElementById('mnameError');
  const lnameError = document.getElementById('lnameError');
  const ssnError = document.getElementById('ssnError');
  const phoneError = document.getElementById('phoneError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');

  // Validation patterns
  const patterns = {
    fname: /^[a-zA-Z' -]{1,30}$/, // Letters, apostrophes, dashes, 1-30 characters
    mname: /^[a-zA-Z]?$/, // 1 character only, or blank
    lname: /^[a-zA-Z' -0-9]{1,30}$/, // Letters, apostrophes, numbers 2 to 5, and dashes
    ssn: /^\d{3}-\d{2}-\d{4}$/, // XXX-XX-XXXX format
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Standard email
    phone: /^\d{3}-\d{3}-\d{4}$/, // 000-000-0000 format
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%^&*()\-+=\/><.,`~])[A-Za-z\d!@#%^&*()\-+=\/><.,`~]{8,}$/ // Complex password
  };

  // Real-time validation functions
  function validateFname() {
    if (patterns.fname.test(fname.value)) {
      fnameError.textContent = '';
      fname.classList.remove('error');
    } else {
      fnameError.textContent = 'First name must be 1-30 characters long and contain only letters, apostrophes, and dashes.';
      fname.classList.add('error');
    }
  }

  function validateMname() {
    if (patterns.mname.test(mname.value)) {
      mnameError.textContent = '';
      mname.classList.remove('error');
    } else {
      mnameError.textContent = 'Middle initial must be a single letter or blank.';
      mname.classList.add('error');
    }
  }

  function validateLname() {
    if (patterns.lname.test(lname.value)) {
      lnameError.textContent = '';
      lname.classList.remove('error');
    } else {
      lnameError.textContent = 'Last name must be 1-30 characters long and contain only letters, apostrophes, numbers (2 to 5), and dashes.';
      lname.classList.add('error');
    }
  }

  function validateSSN() {
    if (patterns.ssn.test(ssn.value)) {
      ssnError.textContent = '';
      ssn.classList.remove('error');
    } else {
      ssnError.textContent = 'SSN must be in the format XXX-XX-XXXX.';
      ssn.classList.add('error');
    }
  }

  function validatePhone() {
    if (patterns.phone.test(phone.value)) {
      phoneError.textContent = '';
      phone.classList.remove('error');
    } else {
      phoneError.textContent = 'Phone number must be in the format 000-000-0000.';
      phone.classList.add('error');
    }
  }

  function validateEmail() {
    if (patterns.email.test(email.value)) {
      emailError.textContent = '';
      email.classList.remove('error');
    } else {
      emailError.textContent = 'Please enter a valid email address.';
      email.classList.add('error');
    }
  }

  function validatePassword() {
    if (patterns.password.test(password.value)) {
      passwordError.textContent = '';
      password.classList.remove('error');
    } else {
      passwordError.textContent = 'Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.';
      password.classList.add('error');
    }
  }

  function validateConfirmPassword() {
    if (password.value === confirmPassword.value && confirmPassword.value !== '') {
      confirmPasswordError.textContent = '';
      confirmPassword.classList.remove('error');
    } else {
      confirmPasswordError.textContent = 'Passwords do not match.';
      confirmPassword.classList.add('error');
    }
  }

  // Add event listeners for real-time validation
  fname.addEventListener('input', validateFname);
  mname.addEventListener('input', validateMname);
  lname.addEventListener('input', validateLname);
  ssn.addEventListener('input', validateSSN);
  phone.addEventListener('input', validatePhone);
  email.addEventListener('input', validateEmail);
  password.addEventListener('input', validatePassword);
  confirmPassword.addEventListener('input', validateConfirmPassword);

  // Final form submission validation
  form.addEventListener('submit', (e) => {
    validateFname();
    validateMname();
    validateLname();
    validateSSN();
    validatePhone();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    if (
      !patterns.fname.test(fname.value) ||
      !patterns.mname.test(mname.value) ||
      !patterns.lname.test(lname.value) ||
      !patterns.ssn.test(ssn.value) ||
      !patterns.phone.test(phone.value) ||
      !patterns.email.test(email.value) ||
      !patterns.password.test(password.value) ||
      password.value !== confirmPassword.value
    ) {
      e.preventDefault(); // Prevent form submission if validation fails
    }
  });
});
