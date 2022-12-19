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
let changeIdx = 0,timeFun,time=0;
imgLi.forEach(function(btn, key) {
  btn.onclick = function() {
    clearInterval(timeFun)
    timeFun = setInterval(()=>{
      if(time < 0.8){
        time+=0.2;
      }else{
        time=0;
        clearInterval(timeFun)
      }
    },200)
    if(time == 0){
      changeImg[changeIdx].classList.remove('check')
      changeImg[key].classList.add('check')
      changeIdx = key
      contents.style.backgroundImage = `url(${imgData[key].url})`
    }else{time=0}
  }
})

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
  if (content9.offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
    content9.classList.add('on')
    console.log(content9)
  }
  if (content10.offsetTop - window.innerHeight * 0.8 < window.pageYOffset) {
    content10.classList.add('active')
  }
})
const sliCon = document.querySelectorAll('.sliding-view li')
if (window.innerWidth <= 989) {
  
  $(window).on('load',function(){
    // 무한 반복 슬라이딩 //
    // sliCon.style.width = "25%"
    // sliCon.style.margin = `${15}%`
    
    let current= 0;
    let show = 3;
    let container = $('.sliding-view > ul');
    let length = container.find('>li').length;
    let view =  $('.sec02-img01').width();
    let tt = view/show ; //이동거리 -한칸씩 움직이기//
    let next = $('.sec02-img01 .next');
    let prev = $('.sec02-img01 .prev');
    console.log(view)
    
    container.css('width','length*tt');//컨테이너 길이 초기화//
    
    next.on({
    click:function(){
    
    if(current == length) {//마지막 엘리먼트에 다다르면 current 초기화//
    current = 0;
    }
    
    if(current == 0){
    //먼저 복사된 엘리먼트 삭제하고 위치 초기화//
    container.find('>li').eq(length-1).nextAll().remove();
    container.css({left:0}).stop();
    
    //이동//
    current++;
    container.stop().animate({left:tt*current*-1},{duration:900});	
    
    //엘리먼트 복사 - 컨네이너의 자식 모두 복사//
    let cloneEl = container.children().clone();
    //복사된 엘리먼트 수 만큼 길이 늘리고 붙이기//
    // container.css({width:container.innerWidth()+(tt*length)});
    cloneEl.appendTo(container);
    }
    else if(current >= 1){
    
    current++;
    container.stop().animate({left:tt*current*-1},{duration:900});
    }			
    
    },
    mouseenter:function(){
    clearInterval(Sliding);
    },
    mouseleave:function(){
    slidingTimer();
    }
    });
    
    prev.on({
    click:function(){
    if(current == 0){
    //먼저 복사된 엘리먼트 삭제하고 위치 초기화//
    container.find('>li').eq(length-1).nextAll().remove();
    container.css({left:0}).stop();
        
    //인덱스 순서를 length로 치환해줌//
    current=length;
    
    //앞쪽으로 엘리먼트 복사해서 붙이기//
    //길이 & 위치 초기화 -앞쪽으로 붙었기 떄문에 늘어난 길이 만큼 left시작 위치가 -가 되어야함//
    let cloneEl = container.children().clone();
    container.css({left:tt*length*-1,width:container.innerWidth()+(tt*length)}).stop();
    cloneEl.prependTo(container);
    
    //붙이고 나서 바로 이동 되도록//
    current--;
    container.stop().animate({left:tt*current*-1},{duration:900});
    }
    else if(current > 0 ){
    current--;
    container.stop().animate({left:tt*current*-1},{duration:900});
    }
    
    },
    mouseenter:function(){
    clearInterval(Sliding);
    },
    mouseleave:function(){
    slidingTimer();
    }
    });
    
    
    //컨테이너에 hover 되면 타이머 일시정지//
    container.on({
    mouseenter:function(){
    clearInterval(Sliding);
    },
    mouseleave:function(){
    slidingTimer();
    }
    });
    
    slidingTimer();
    
    //자동 슬라이딩 타미머 함수 정의//
    function slidingTimer(){
    Sliding = setInterval(function(){
    
    next.trigger('click');
    
    },3000);
    }
    });
}