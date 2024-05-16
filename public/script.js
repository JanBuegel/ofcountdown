const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const targetDate = new Date('2024-08-07T15:00:00');
    const currentDate = new Date();

    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
        countdownElement.textContent = 'Countdown abgelaufen!';
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        countdownElement.innerHTML = `${days} Tage, ${hours} Stunden<br>und ${minutes} Minuten<br>bis zum <br>Open Flair 2024`;
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);
