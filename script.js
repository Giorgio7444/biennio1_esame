document.querySelector('img').addEventListener('click', function() {
  this.style.transition = 'transform 1s';
  this.style.transform = 'scale(2.2) translateX(18vw)'; 
  
  const gif = document.querySelector('#gif');
  gif.style.visibility = 'visible'; 
  gif.style.opacity = '1'; 
  gif.style.transition = 'transform 0.6s, opacity 0.6s, visibility 0s'; 
  gif.style.transitionDelay = '1.2s'; 
  gif.style.transform = 'translateY(70px)'; 

  const img = document.querySelector('#plus_hp'); 
    img.style.visibility = 'visible';
    img.style.opacity = '1';
    img.style.transition = 'transform 0.6s, opacity 0.6s, visibility 0s';
    img.style.transitionDelay = '1.2s';
    img.style.transform = 'translateY(-200px)';
});

document.querySelector('#plus_hp').addEventListener('click', function() {
  this.style.transition = 'transform 1s';
  this.style.transform = 'translate(0px, -98vh) rotate(45deg) scale(0.8)';

  const gif = document.querySelector('#gif');
  gif.style.transition = 'transform 1s';
  gif.style.transform = 'translate(0px, -100vh)';

  const img = document.querySelector('img');
  img.style.transition = 'transform 1s';
  img.style.transform = 'translate(100vw, 0px) scale(2.2)';
});