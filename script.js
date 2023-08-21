const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const loveAnimation = document.getElementById('loveAnimation');
const thankYouText = document.getElementById('thankYouText');
const questionText = document.getElementById('questionText');

yesBtn.addEventListener('click', () => {
    questionText.innerHTML = 'Love You!';
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
    loveAnimation.classList.remove('hidden');
    thankYouText.classList.remove('hidden');
});

noBtn.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});
