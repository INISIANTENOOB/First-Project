const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const resultContainer = document.getElementById("resultContainer");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const closePopup = document.getElementById("closePopup");
const loveScreen = document.getElementById("loveScreen");
const heartsContainer = document.getElementById("hearts");

noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * window.innerWidth * 0.8);
  const y = Math.floor(Math.random() * window.innerHeight * 0.8);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

noBtn.addEventListener("click", () => {
  popup.style.display = "block";
  overlay.style.display = "block";
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.style.display = "none";
});

yesBtn.addEventListener("click", () => {
  document.querySelector('.container').style.display = 'none';
  loveScreen.style.display = 'flex';
  createHearts();
});

// Fechar popup ao clicar no overlay
overlay.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.style.display = "none";
});

// Criar corações flutuantes
function createHearts() {
  const heartEmojis = ['❤️', '💖', '💗', '💓', '💞', '💕'];
  
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 2 + Math.random() * 3 + 's';
    heart.style.fontSize = (1 + Math.random() * 2) + 'rem';
    
    heartsContainer.appendChild(heart);
    
    // Remover coração após animação
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 300);
}