document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('photo');
  const brightnessSlider = document.getElementById('brightness');
  const grayscaleToggle = document.getElementById('grayscale');
  const resetBtn = document.getElementById('reset');

  function applyFilters() {
    const brightness = brightnessSlider.value;
    const grayscale = grayscaleToggle.checked ? 'grayscale(100%)' : '';
    console.log('B:', brightness, grayscaleToggle.checked);
    img.style.filter = `brightness(${brightness}%) ${grayscale}`;
  }

  // Event listeners
  brightnessSlider.addEventListener('input', applyFilters);
  grayscaleToggle.addEventListener('change', applyFilters);
  resetBtn.addEventListener('click', () => {
    brightnessSlider.value = 100;
    grayscaleToggle.checked = false;
    applyFilters();
  });

  // init
  applyFilters();
});
