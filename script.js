function getPilihanComp() {
  const comp = Math.random();

  if (comp < 0.34) return 'kertas';
  if (comp >= 0.34 && comp < 0.67) return 'batu';
  return 'gunting';
}

function getResult(comp, p) {
  if (p == comp) return 'Draw';
  if (p == 'kertas') return comp == 'batu' ? 'You Win' : 'You Lose';
  if (p == 'batu') {
    if (comp == 'kertas') {
      return 'You Lose';
    } else {
      return 'You Win';
    }
  }
  if (p == 'gunting') return comp == 'batu' ? 'You Lose' : 'You Win';
}

function putar() {
  const imgComp = document.querySelector('.img-computer');
  const gambar = ['kertas', 'batu', 'gunting'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComp.setAttribute('src', 'img/' + gambar[i++] + '1.png');
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = pil.className;

    const result = getResult(pilihanComp, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComp = document.querySelector('.img-computer');
      imgComp.setAttribute('src', 'img/' + pilihanComp + '1.png');

      const info = document.querySelector('.info');
      info.innerHTML = result;
    }, 1000);
  });
});
