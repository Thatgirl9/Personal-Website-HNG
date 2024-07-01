// To display the current time in UTC and Current Date.

document.addEventListener('DOMContentLoaded', () => {
  const currentTimeDate = () => {
    const current = new Date();
    const utcTime = current.toUTCString().split(' ')[4];
    const utcDay = current.toLocaleString('en-us', { weekday: 'long' })

    const currentTime = document.getElementById('currentTimeUTC');
    const currentDay = document.getElementById('currentDay');
    // Display in HTML Page
    currentTime.textContent = `Current Time in UTC: ${utcTime}`;
    currentDay.textContent = `Current Day: ${utcDay}`;

  };
  currentTimeDate();
  setInterval(currentTimeDate, 1000);

}
)

