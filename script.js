const volumeSlider = document.getElementById('volume-slider');
const volumeLowIcon = document.getElementById('volume-low-icon');
const volumeHighIcon = document.getElementById('volume-high-icon');

volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;

    // Update icon opacity based on the volume level
    // volumeLowIcon.style.opacity = volume <= 50 ? 1 : 0.5;
    // volumeHighIcon.style.opacity = volume > 50 ? 1 : 0.5;

    // Add your logic to control volume here
    console.log(`Volume: ${volume}`);
});