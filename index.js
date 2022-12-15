$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html header', head);
$('footer').load('./inc.html footer');

let idx = localStorage.idx;

function head() {
  $('.header-middle li a').eq(idx).addClass('active');
  $('.header-middle li').click(function() {

    let idx = $(this).index();
    localStorage.idx = idx;
    // localStorage.setItem(); idx값 수정
    // localStorage.getItem(); idx값 가져오기
    // localStorage.removeItem(); idx값 삭제
    // localStorage.clear(); 로컬슽리지 모두 삭제
  })
  localStorage.clear()
}
const can = document.querySelectorAll('img.overImg')
const canLi = document.querySelectorAll('.middle-line')

idx = 0;
canLi.forEach(function(btn, key) {
  btn.onmouseover = function () {
    can[idx].classList.remove('first')
    can[key].classList.add('first')

    idx = key
  }
})

const sec06 = document.querySelectorAll('.sec06-li')

idx1 = 0;
sec06.forEach(function(btn, key) {
  btn.onmouseover = function () {
    sec06[idx1].classList.remove('on')
    sec06[key].classList.add('on')

    idx1 = key
  }
})
// 슬라이드 효과 관련 
const elChange = document.querySelectorAll('.sec01 .change');
const elBtn = document.querySelectorAll('.sec01 li');
const elDiv = document.querySelector('.sec01 > div');
const elSlide = document.querySelectorAll('.slide01 li');
const elText = document.querySelectorAll('.change > .sec01-text');

let move;

elBtn.forEach(function(btn, key) {
  btn.addEventListener('click', function() {
    animation(key)
    elText[idx].classList.remove('active')
    elText[key].classList.add('active')
    idx = key
  })
})
//이미지 슬라이드
function animation (key) {
  try {
    move = elChange[key].offsetLeft
  }
  catch{}
  // console.log(move)
  elDiv.style = `transform: translateX(-${move}px)`
}
//호버시 이미지 변경
const imgLi = document.querySelectorAll('.img-bottom > ul > li')
const changeImg = document.querySelectorAll('.contain > .img-txt > div')
const contents = document.querySelector('.mid-img-box')
let imgData = [
  {url:'./img/sec02_bg_0.png'},
  {url:'./img/sec02_bg_1.png'},
  {url:'./img/sec02_bg_2.png'},
  {url:'./img/sec02_bg_3.png'},
  {url:'./img/sec02_bg_4.png'},
  {url:'./img/sec02_bg_5.png'}
]
let changeIdx = 0;
imgLi.forEach(function(btn, key) {
  btn.onclick = function() {
    changeImg[changeIdx].classList.remove('check')
    changeImg[key].classList.add('check')
    changeIdx = key
    contents.style.backgroundImage = `url(${imgData[key].url})`
  }
})
console.log(imgData[0].url)
let aniIdx = 0;
elSlide.forEach(function(btn, key) {
  btn.onclick = function() {
    elSlide[aniIdx].classList.remove('on')
    elSlide[key].classList.add('on')
    aniIdx = key
  }
})
//아래에서 위로 슬라이드 효과
const content1 = document.querySelector('.sec02 > div:nth-of-type(1)')
const content2 = document.querySelector('.sec02 > div:nth-of-type(2)')
const content3 = document.querySelector('.mid > div:nth-of-type(1)')
const content4 = document.querySelector('.mid > .mid-img-box')
const content5 = document.querySelector('.product > .product-txt')
const content6 = document.querySelector('.sec05-top > .top-logo')
const content7 = document.querySelector('.sec05-top > .bottom-logo')
const content8 = document.querySelector('.img-box')
const content9 = document.querySelector('.sec06 > .sec05-top')
const content10 = document.querySelector('.sec06-bottom')
window.addEventListener('scroll', function() {
  if (content1.offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
    content1.classList.add('on')
  }
  if (content2.offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
    content2.classList.add('on')
  }
  if (content3.offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
    content3.classList.add('on')
  }
  if (content4.offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
    content4.classList.add('on')
  }
  if (content5.offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
    content5.classList.add('on')
  }
  if (content6.offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
    content6.classList.add('on')
  }
  if (content7.offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
    content7.classList.add('on')
  }
  if (content8.offsetTop+475 - window.innerHeight * 0.8 < window.pageYOffset) {
    content8.classList.add('on')
  }
  if (content9.offsetTop+6700 - window.innerHeight * 0.8 < window.pageYOffset) {
    content9.classList.add('on')
  }
  if (content10.offsetTop+6700 - window.innerHeight * 0.8 < window.pageYOffset) {
    content10.classList.add('active')
  }
})