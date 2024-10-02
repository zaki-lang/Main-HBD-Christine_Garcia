// 3D Card flip interaction
document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('flipped');
  });
  
  // Confetti effect using Canvas
  const confettiCanvas = document.getElementById("confettiCanvas");
  const ctx = confettiCanvas.getContext("2d");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  
  function randomColor() {
    const colors = ['#ff69b4', '#ff1493', '#ffb6c1', '#fff'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  function createConfettiPiece() {
    return {
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      size: Math.random() * 10 + 5,
      color: randomColor(),
      speed: Math.random() * 3 + 2,
    };
  }
  
  const confetti = Array.from({ length: 100 }, createConfettiPiece);
  
  function drawConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  
    confetti.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
      ctx.fill();
      p.y += p.speed;
  
      if (p.y > confettiCanvas.height) {
        p.y = 0 - p.size;
      }
    });
  
    requestAnimationFrame(drawConfetti);
  }
  
  document.querySelector('.wish-button').addEventListener('click', () => {
    drawConfetti();
  });
  

  document.querySelector('.wish-button').addEventListener('click', function() {
    var audio = document.getElementById('birthdaySong');
    audio.play();
});
