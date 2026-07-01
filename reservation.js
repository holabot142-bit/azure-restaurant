// reservation.js - Reservation System
document.addEventListener('DOMContentLoaded', function() {
    // Set minimum date to today
    const dateInput = document.getElementById('resDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        dateInput.value = today;
    }
    
    // Set default time to 7 PM
    const timeInput = document.getElementById('resTime');
    if (timeInput) {
        timeInput.value = '19:00';
    }
});

// Guest counter
function changeGuests(delta) {
    const countEl = document.getElementById('guestCount');
    const inputEl = document.getElementById('guests');
    let count = parseInt(countEl.textContent) + delta;
    
    if (count < 1) count = 1;
    if (count > 20) count = 20;
    
    countEl.textContent = count;
    inputEl.value = count;
}

// Seating selection
function selectSeating(element, type) {
    document.querySelectorAll('.seating-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
    document.getElementById('seatingType').value = type;
}

// Handle reservation submission
function handleReservation(event) {
    event.preventDefault();
    
    const form = document.getElementById('bookingForm');
    if (!validateForm('bookingForm')) return false;
    
    // Collect data
    const formData = {
        name: document.getElementById('resName').value,
        phone: document.getElementById('resPhone').value,
        date: document.getElementById('resDate').value,
        time: document.getElementById('resTime').value,
        guests: document.getElementById('guests').value,
        seating: document.getElementById('seatingType').value,
        notes: document.getElementById('resNotes').value
    };
    
    // Here you would normally send to server
    console.log('Reservation Data:', formData);
    
    // Show success message
    document.getElementById('reservationForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    
    // Add animation
    const successMsg = document.getElementById('successMessage');
    successMsg.style.opacity = '0';
    successMsg.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        successMsg.style.transition = 'all 0.5s ease';
        successMsg.style.opacity = '1';
        successMsg.style.transform = 'translateY(0)';
    }, 100);
    
    return false;
}
