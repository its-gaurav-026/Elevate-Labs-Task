#  Contact Form with Validation

A  contact form built with **HTML**, **CSS**, and **JavaScript**, implementing **client-side validation** using regular expressions.

---

## 🎯 Objective
Create a responsive and user-friendly contact form that validates:
- **Name**: Required field
- **Email**: Required and must be in valid format (validated via regex)
- **Message**: Required field

---

## 🧩 Features
- Real-time validation feedback
- Error messages below each input
- Success message on valid submission
- Input clearing after successful submission

---

## 📁 File Structure
```
project-directory/
├── index.html       # Main HTML form
├── style.css        # Styling for the form
├── script.js        # JavaScript validation logic
└── README.md        # Project overview
```



## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript

---

## 🔍 Validation Logic
- **Email** is validated using the regex:
```javascript
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```
- Displays error messages if any field is empty or if the email format is invalid.

## Task: Web Development Internship - Task 6
## Submitted by: Gaurav Maurya
