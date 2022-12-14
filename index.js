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

const elChange = document.querySelectorAll('.sec01 .change')
const elBtn = document.querySelectorAll('.sec01 li')
const aa = document.querySelector('.sec01 > div')
let move;

elBtn.forEach(function(btn, key) {
  btn.addEventListener('click', function() {
    animation(key)
    
  })
})

function animation (key) {
  try {
    move = elChange[key].offsetLeft
  }
  catch{}
  // console.log(move)
  aa.style = `transform: translateX(-${move}px)`
}