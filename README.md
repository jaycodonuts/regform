# Registration Form with Validation

A fully functional registration form with comprehensive JavaScript validation.

## Features

### Form Fields
- **First Name** - Required, letters only, minimum 2 characters
- **Last Name** - Required, letters only, minimum 2 characters
- **Username** - Required, alphanumeric and underscores only, 3-20 characters
- **Phone Number** - Required, numbers only, 10-15 digits
- **Email Address** - Required, valid email format
- **Gender** - Required dropdown selection
- **Date of Birth** - Required, DD/MM/YY format with date validation
- **Country** - Required dropdown selection
- **Company Name** - Optional text field
- **Home Address** - Required, minimum 5 characters
- **Office Address** - Optional text area
- **Password** - Required, minimum 8 characters with uppercase, lowercase, and number
- **Confirm Password** - Required, must match password
- **Terms & Conditions** - Required checkbox
- **Receive Offers** - Optional checkbox

### Validation Rules

#### First Name & Last Name
- Only letters and spaces allowed
- Minimum 2 characters
- Required field

#### Username
- Alphanumeric characters and underscores only
- Must be between 3-20 characters
- Required field

#### Phone Number
- Only numeric digits allowed
- Must be between 10-15 digits
- Required field

#### Email
- Must be a valid email format (example@domain.com)
- Required field

#### Date of Birth
- Must follow DD/MM/YY format
- Validates actual date (checks for valid days in months)
- Required field
- Example: 15/03/95

#### Password
- Minimum 8 characters
- Must contain at least one uppercase letter
- Must contain at least one lowercase letter
- Must contain at least one number
- Required field

#### Confirm Password
- Must match the password field
- Required field

#### Gender & Country
- Must select a value from dropdown
- Required fields

#### Home Address
- Minimum 5 characters
- Required field

## Technologies Used

- **HTML5** - Structure and form elements
- **CSS3** - Styling and responsive design
- **JavaScript (Vanilla)** - Form validation and interactivity

## Validation Features

1. **Real-time Validation** - Fields are validated as the user types
2. **Visual Feedback** - Error messages appear below each field with red border
3. **Comprehensive Checks** - Multiple validation rules per field
4. **Form Submission Validation** - All fields validated before submission
5. **User-Friendly Messages** - Clear error messages guide the user

## File Structure

```
PT_REGFORM/
├── index.html          # Main HTML file with form structure
├── styles.css          # CSS styling for the form
├── validation.js       # JavaScript validation logic
└── README.md          # Project documentation
```

## How to Use

1. Open `index.html` in a web browser
2. Fill out the registration form
3. Real-time validation will show errors as you type
4. Click "Register" to submit the form
5. All fields must pass validation before submission

## Deployment

To deploy this project on a free hosting service:

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Push these files to the repository
3. Go to Settings > Pages
4. Select the main branch as source
5. Your site will be published at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Go to [Netlify](https://www.netlify.com/)
2. Drag and drop the project folder
3. Your site will be deployed instantly

### Option 3: Vercel
1. Go to [Vercel](https://vercel.com/)
2. Import your GitHub repository or upload files
3. Deploy with one click

### Option 4: Glitch
1. Go to [Glitch](https://glitch.com/)
2. Create a new project
3. Upload your files
4. Your site will be live immediately

## Browser Compatibility

This form works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## Honor Pledge

I pledge that this work represents my own efforts and adheres to academic integrity standards. I have not used any AI web page generation tools for this assignment.

## AI Usage Disclosure

I did not use any AI tool/s for this activity

## References

1. **MDN Web Docs - HTML Forms**
   - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
   - Used for understanding form elements and attributes

2. **MDN Web Docs - Form Validation**
   - https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
   - Referenced for validation techniques and best practices

3. **W3Schools - JavaScript Validation**
   - https://www.w3schools.com/js/js_validation.asp
   - Used for JavaScript validation patterns and examples

4. **MDN Web Docs - Regular Expressions**
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
   - Consulted for regex patterns used in validation

5. **CSS-Tricks - Form Design**
   - https://css-tricks.com/
   - Referenced for CSS styling techniques

## License

This project is created for educational purposes as part of a web development assignment.

---

**Created by:** [Your Name]  
**Date:** February 9, 2026  
**Course:** [Your Course Name]
