const specificLog = document.getElementById('specific');
const generalLog = document.getElementById('general');

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
startBtn.disabled = false;
stopBtn.disabled = true;

startBtn.addEventListener('click', (e) => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    console.log('Start button clicked');
    document.addEventListener('keydown', handleDown);
    document.addEventListener('keyup', handleUp);
    });

stopBtn.addEventListener('click', (e) => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    console.log('Stop button clicked');
    document.removeEventListener('keydown', handleDown);
    document.removeEventListener('keyup', handleUp);
    specificLog.textContent = '';
    generalLog.textContent = '';
    });

function handleDown(e) {
    specificLog.textContent = `Key ${e.key} pressed down`;
    console.log('Key ${e.key} pressed down');
    generalLog.textContent = `Key is down`;
    }

function handleUp(e) {
    specificLog.textContent = `Key ${e.key} pressed up`;
    console.log('Key ${e.key} pressed up');
    generalLog.textContent = `Key is up`;
    }