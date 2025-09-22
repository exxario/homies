onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

document.addEventListener('DOMContentLoaded', function() {
  const leaf = document.getElementById('reveal-leaf');
  const text = document.getElementById('reveal-text');
  if (leaf && text) {
    leaf.style.cursor = 'pointer';
    leaf.addEventListener('click', function(e) {
      text.style.display = 'block';
      setTimeout(() => {
        text.style.display = 'none';
      }, 2500); 
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
 
  const topTextTrigger = document.getElementById('top-text-trigger');
  const topRevealText = document.getElementById('top-reveal-text');

  if (topTextTrigger && topRevealText) {
    topTextTrigger.style.cursor = 'pointer';
    topTextTrigger.addEventListener('click', () => {
      topRevealText.classList.add('visible');
      setTimeout(() => {
        topRevealText.classList.remove('visible');
      }, 4000);
    });
  }
});