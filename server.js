const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Echte Zugangsdaten liegen sicher auf dem Server (niemals im Browser!)
const ADMIN_USER = "root_admin";
const ADMIN_PASS = "R!ft_Adm!n_9982#Secur3_Core_2026!";

app.post('/api/login', (req, res) => {
    const { user, pass } = req.body;
    
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        res.json({ success: true, flag: "FLAG{c0de_obfusc4ti0n_m4st3r_9981}" });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => {
    console.log('Secure Server läuft auf http://localhost:3000');
});
