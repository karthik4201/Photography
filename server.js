const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Routes for Different Pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'public', 'login.html')));
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, 'public', 'signup.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'public', 'Dashboard.html')));
app.get('/photographers', (req, res) => res.sendFile(path.join(__dirname, 'public', 'photographers.html')));
app.get('/calendar', (req, res) => res.sendFile(path.join(__dirname, 'public', 'calender.html')));
app.get('/meeting', (req, res) => res.sendFile(path.join(__dirname, 'public', 'meeting.html')));
app.get('/client-dashboard', (req, res) => res.sendFile(path.join(__dirname, 'public', 'clientDashboard.html')));
app.get('/photographer-dashboard', (req, res) => res.sendFile(path.join(__dirname, 'public', 'photographerDashboard.html')));

// 404 Error Page for Invalid Routes
app.use((req, res) => res.status(404).send('Page Not Found'));

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running at: http://localhost:${PORT}`);
});
