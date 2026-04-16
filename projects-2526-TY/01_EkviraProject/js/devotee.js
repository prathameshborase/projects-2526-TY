function loadUserDashboard() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if(!user) return;

    // युजरचे नाव डॅशबोर्डवर दाखवणे
    if(document.getElementById('welcomeName')) {
        document.getElementById('welcomeName').innerText = user.name;
    }

    // युजरचे स्वतःचे बुकिंग्स फिल्टर करणे
    const allBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const myBookings = allBookings.filter(b => b.user_id === user.id);
    
    // टेबलमध्ये दाखवण्याचे लॉजिक इथे येईल...
}