// १. लॉगिन फंक्शन
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPass').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // ॲडमिनसाठी चेक (तुझा आधीचा ॲडमिन डेटा)
    if(email === "admin@ekvira.com" && pass === "admin123") {
        const adminUser = { name: "Administrator", role: "admin", email: email };
        localStorage.setItem('currentUser', JSON.stringify(adminUser));
        window.location.href = 'index.html';
        return;
    }

    const user = users.find(u => u.email === email && u.password === pass);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert("स्वागत आहे, " + user.name + "!");
        window.location.href = 'index.html';
    } else {
        alert("ईमेल किंवा पासवर्ड चुकीचा आहे!");
    }
}

// २. रजिस्ट्रेशन फंक्शन
function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const pass = document.getElementById('regPass').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // ईमेल आधीच आहे का चेक करा
    if(users.some(u => u.email === email)) {
        alert("हा ईमेल आधीच वापरला गेला आहे!");
        return;
    }

    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: pass,
        role: 'devotee'
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert("नोंदणी यशस्वी! आता 'Login' टॅबवर क्लिक करून लॉगिन करा.");
    
    // रजिस्ट्रेशन नंतर आपोआप लॉगिन टॅबवर जाण्यासाठी
    document.getElementById('pills-login-tab').click();
}