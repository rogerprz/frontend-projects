// JS for focus trap & toggling
console.log('Focus trap initialized');
const openBtn = document.getElementById('open-modal');
const closeBtn = document.getElementById('close-modal');
const modal = document.getElementById('modal');
const focusable = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

openBtn.onclick = () => {
  console.log('Open button clicked, showing modal');
  modal.hidden = false;
  modal.style.display = 'grid'; // Ensure modal is visible
  const focusEls = modal.querySelectorAll(focusable);
  focusEls[0].focus();
};

closeBtn.onclick = () => {
  console.log('Close button clicked, hiding modal');
  modal.hidden = true;
  modal.style.display = 'none'; // Hide modal
  openBtn.focus();
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab' && !modal.hidden) {
    const focusEls = Array.from(modal.querySelectorAll(focusable));
    const first = focusEls[0];
    const last = focusEls[focusEls.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  if (e.key === 'Escape' && !modal.hidden) {
    console.log('Escape key pressed, closing modal');
    modal.hidden = true;
    openBtn.focus();
  }
});
