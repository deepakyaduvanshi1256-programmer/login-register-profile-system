// Load required packages
const express = require('express');           // Express framework for server & routing
const path = require('path');                 // Node.js module to handle file paths
const bcrypt = require('bcrypt');             // For securely hashing passwords
const session = require("express-session");   // For managing user login sessions

// Initialize Express app
const app = express();



// 1️ Parse form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// 2️ Parse JSON data (application/json)
app.use(express.json());

// 3️ Set EJS as the template engine
app.set('view engine', 'ejs');

// 4️ Set the folder where EJS templates are located
app.set('views', path.join(__dirname, 'views'));

// 5 Session middleware configuration
app.use(session({
  secret: "mysecret",    // Secret key to sign session ID cookie
  resave: false,         // Prevents saving session if nothing changed
  saveUninitialized: true // Save new sessions even if empty
}));


// Redirect '/' to login page
app.get('/', (req, res) => {
    res.redirect('/login');
});


// GET: Render login page
app.get('/login', (req, res) => {
    res.render('login'); // login.ejs page
});

// POST: Handle login form submission
app.post('/login', (req, res) => {
    const { username, email } = req.body;

    // Create session for the logged-in user
    // Note: In real apps, we would validate username/password from a database
    req.session.user = { name: username, email };

    // Redirect user to profile page after login
    res.redirect("/viewprofile");
});


// GET: Render registration page
app.get('/register', (req, res) => {
    res.render('register'); // register.ejs page
});

// POST: Handle registration form submission
app.post('/register', async (req, res) => {
    const {
        username,
        gender,
        dob,
        fatherName,
        motherName,
        phoneNumber,
        address,
        email,
        password
    } = req.body;

    // Hash the password securely before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store user data in session
    req.session.user = {
        name: username,
        gender,
        dob,
        fatherName,
        motherName,
        phoneNumber,
        address,
        email,
        password: hashedPassword
    };

    // Redirect to profile page after successful registration
    res.redirect("/registerprofile");
});

// GET: Display profile page after registration
app.get('/registerprofile', (req, res) => {
    // Protect route: Redirect to registration page if no session exists
    if (!req.session.user) {
        return res.redirect("/register");
    }

    // Render profile page with user data from session
    res.render('registerprofile', { user: req.session.user });
});


// GET: Display profile page after login
app.get("/viewprofile", (req, res) => {
    // Protect route: Redirect to login if user is not logged in
    if (!req.session.user) {
        return res.redirect("/login");
    }

    // Render profile page with user data from session
    res.render("viewprofile", { user: req.session.user });
});


// GET: Logout user
app.get("/logout", (req, res) => {
    // Destroy session to log out the user
    req.session.destroy(() => {
        // Redirect to login page after logout
        res.redirect("/login");
    });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});