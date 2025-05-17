function showGiftExplosion() {
    const totalGifts = 25;

    for (let i = 0; i < totalGifts; i++) {
      setTimeout(() => createGift(), i * 100);
    }

    setTimeout(() => {
      window.location.href = "second.html";
    }, 3000);
  }

  function createGift() {
    const gift = document.createElement('div');
    gift.classList.add('gift');
    gift.textContent = '🎁';

    const size = 30 + Math.random() * 20;
    gift.style.fontSize = size + 'px';

    gift.style.left = Math.random() * 100 + 'vw';
    gift.style.top = Math.random() * 100 + 'vh';

    document.body.appendChild(gift);

    setTimeout(() => {
      gift.remove();
    }, 2000);
  }
  function showGiftExplosion2() {
    const totalGifts = 5;

        setTimeout(() => {
        window.location.href = "third.html";
    }, 500);
}
