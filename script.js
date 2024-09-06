document.addEventListener('mousemove', (e) => {
  const ring = document.createElement('div');
  ring.style.position = 'fixed';
  ring.style.pointerEvents = 'none';
  ring.style.width = '20px'; // Size of the ring
  ring.style.height = '20px'; // Size of the ring
  ring.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2014/09/17/11/01/ring-449331_640.png)"; // Path to your ring image
  ring.style.backgroundSize = 'cover';
  ring.style.borderRadius = '50%';
  ring.style.zIndex = '10000';
  ring.style.left = `${e.clientX - 10}px`;
  ring.style.top = `${e.clientY - 10}px`;
  ring.style.opacity = '1';
  ring.style.transition = 'opacity 1s ease-out, transform 1s ease'; // Increased transition time

  document.body.appendChild(ring);

  setTimeout(() => {
    ring.style.opacity = '0';
    ring.style.transform = 'scale(1.2)'; // Slightly enlarges the ring
  }, 500); // Start fading and scaling later

  setTimeout(() => {
    ring.remove();
  }, 100); // Increase the time before the ring is removed
});