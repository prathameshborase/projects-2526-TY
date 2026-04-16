document.addEventListener('DOMContentLoaded', () => {
    // १. डेटा लोड करणे
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const donations = JSON.parse(localStorage.getItem('donations')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // २. डॅशबोर्डवर आकडेवारी अपडेट करणे
    if(document.getElementById('totalDonations')) {
        const totalAmt = donations.reduce((sum, don) => sum + don.amount, 0);
        document.getElementById('totalDonations').innerText = "₹ " + totalAmt;
        document.getElementById('totalBookings').innerText = bookings.length;
        document.getElementById('totalUsers').innerText = users.length;
    }
    
    console.log("Admin Data Loaded Successfully");
});