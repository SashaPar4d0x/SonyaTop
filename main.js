const startDate = new Date('2025-10-05T20:00:00'); // Первая дата
const startDate1 = new Date('2025-09-09T00:00:00'); // Вторая дата
const startDate2 = new Date('2025-10-05T20:00:00'); // Вторая дата

// Первый счетчик
setInterval(() => {
    const diff = Date.now() - startDate;
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000) % 24;
    const minutes = Math.floor(diff / 60000) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    
    document.getElementById('timer').textContent = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Второй счетчик
setInterval(() => {
    const diff = Date.now() - startDate1; // ← ИСПРАВЛЕНО: startDate1 вместо startDate
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000) % 24;
    const minutes = Math.floor(diff / 60000) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    
    document.getElementById('timer2').textContent = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
