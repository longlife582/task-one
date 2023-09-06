const updateTime = () => {
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0'); // Ensure two digits
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = currentTime;
  };
  
  setInterval(updateTime, 1000);
  
  updateTime(); // Initial call to set the time immediately



  function updateDayOfWeek() {
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfWeek"]');
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const currentDay = daysOfWeek[currentDayIndex];
    dayOfWeekElement.textContent = `Today is ${currentDay}`;
  }
  
  // Update the day every second (1000 milliseconds)
  setInterval(updateDayOfWeek, 1000);
  
  // Initial call to set the day immediately
  updateDayOfWeek();
  
  