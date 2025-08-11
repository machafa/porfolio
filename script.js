document.addEventListener('mousemove', (e) => {
  const hero = document.getElementById('hero');
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  hero.querySelector('h1').style.transform = `translate(${x}px, ${y}px)`;
});

function openLinkedIn() {
  document.getElementById('linkedinModal').style.display = 'block';
}

function closeLinkedIn() {
  document.getElementById('linkedinModal').style.display = 'none';
}
