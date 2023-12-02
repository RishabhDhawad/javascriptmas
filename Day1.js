const countdownDisplay = document.getElementById("countdown-display");

function renderCountdown(){
    const christmas = new Date('December 25, 2023').getDate();
    // Task:
    // - Get today's date (you only need the day).
    const today = new Date();
    // - Calculate remaining days.
    return christmas - today.getDate();
    // - Display remaining days in countdownDisplay.
}
 
countdownDisplay.textContent = renderCountdown()