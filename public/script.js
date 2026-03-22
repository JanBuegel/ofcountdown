const countdownElement = document.getElementById('countdown');

const OF_2026_START = new Date('2026-09-05T15:00:00');
const OF_2026_END   = new Date('2026-09-10T00:00:00');
const OF_2027_START = new Date('2027-09-04T15:00:00');

function updateCountdown() {
    const now = new Date();

    if (now >= OF_2026_START && now < OF_2026_END) {
        countdownElement.innerHTML = 'It\'s Open Flair time!';
        return;
    }

    const target = now < OF_2026_START ? OF_2026_START : OF_2027_START;
    const year   = now < OF_2026_START ? 2026 : 2027;

    const diff = target - now;

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    countdownElement.innerHTML =
        `${days} Tage, ${hours} Stunden<br>und ${minutes} Minuten<br>bis zum <br>Open Flair ${year}`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
