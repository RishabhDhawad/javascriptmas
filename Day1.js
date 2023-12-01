// Function to calculate and show the countdown
function renderCountdown() {
    // Set the day for Christmas
    const christmasDay = 25;

    // Get today's date
    const today = new Date();
    const todayDay = today.getDate();

    // Calculate remaining days until Christmas
    let remainingDays;
    if (todayDay <= christmasDay) {
        remainingDays = christmasDay - todayDay;
    } else {
        // If Christmas has passed this year, calculate for next year
        const nextChristmas = new Date(today.getFullYear() + 1, 11, christmasDay);
        const daysUntilNextChristmas = Math.ceil((nextChristmas - today) / (1000 * 60 * 60 * 24));
        remainingDays = daysUntilNextChristmas;
    }

    // Display remaining days
    console.log(`Days 'til Christmas! ${remainingDays} days`);
    
}
// Call the function to render the countdown
renderCountdown();