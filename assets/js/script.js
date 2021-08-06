let header = document.querySelector('header');
let cloudsBg = document.getElementById('clouds-bg');
let cloudsLeft = document.getElementById('clouds-left');
let cloudsRight = document.getElementById('clouds-right');
let cloudsPlane = document.getElementById('clouds-plane');
let cta = document.getElementById('cta');
let btn = document.getElementById('btn');
let cloudsFront = document.getElementById('clouds-front');
let plane = document.getElementById('plane');
let text = document.getElementById('text');
let cloudsInvert = document.getElementById('clouds-invert');

window.addEventListener('scroll', function(){
  let value = window.scrollY;

  header.style.top = value * .5 + 'px';
  cloudsBg.style.top = value * .6 + 'px';
  cloudsLeft.style.left = value * .25 + 'px';
  cloudsRight.style.left = value * .25 + 'px';
  cloudsPlane.style.top = value * 1.15 + 'px';
  plane.style.left = value * 1.35 + 'px';
  cloudsFront.style.top = value * .1 + 'px';
  cta.style.marginRight = value * 4.1 + 'px';
  cta.style.marginTop = value * .5 + 'px';
  btn.style.marginTop = value * .5 + 'px';
  cloudsInvert.style.top = value * .1 + 'px';
})