const { exec } = require('child_process');
const sound = require('sound-play');
const os = require('os');

// Ensure these files are in the same folder as this script
const photo = 'your-photo.jpg';
const music = 'your-music.mp3';

// 1. Open the photo in the computer's native default photo app
const platform = os.platform();
if (platform === 'win32') {
    exec(`start "" "${photo}"`);       // Windows
} else if (platform === 'darwin') {
    exec(`open "${photo}"`);           // macOS
} else {
    exec(`xdg-open "${photo}"`);       // Linux
}

console.log("Photo opened!");

// 2. Play the music in the background
console.log("Playing background music...");
sound.play(music).then(() => {
    console.log("Music finished.");
}).catch((error) => {
    console.error("Error playing audio:", error);
    console.log("Please make sure your-music.mp3 is in the same folder.");
});