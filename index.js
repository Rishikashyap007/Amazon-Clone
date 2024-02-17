document.addEventListener('DOMContentLoaded', function () {
    const nextBtn = document.querySelector('.control-next');
    const prevBtn = document.querySelector('.control-prev');
    const ImgCont = document.querySelectorAll('.header-slider ul img');
    let count = 0;

    function chngImg() {
      for (let i = 0; i < ImgCont.length; i++) {
        ImgCont[i].style.display = 'none';
      }
      ImgCont[count].style.display = 'block';
      // ImgCont[count].style.width = '100vw';
    }

    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(count);
      if (count > 0) {
        count--;
      } else {
        count = ImgCont.length - 1;
      }
      chngImg();
    });

    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (count < ImgCont.length - 1) {
        count++;
      } else {
        count = 0;
      }
      chngImg();
    });
  });

const topBtn = document.querySelector('.topscrollbtn')
const Body = document.querySelector('body')
topBtn.addEventListener('click',() =>{
 console.log("clicked");
  // $('html, body').animate({scrollTop : 0}, 800);
  // Body.animate({scrollTop:0},1000)
 // window.Animation({scrollTo: 0})
 document.documentElement.scrollTop = 0; 

})