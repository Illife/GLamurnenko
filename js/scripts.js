/*Фиксированое меню после прокрутки первого экрана*/
$(window).scroll(function() {

	if ($(this).scrollTop() > 1000) {
		$('.menu_fixed').css('background-color','black');
    $('.menu_fixed').css('position','fixed');
	} else {
		$('.menu_fixed').css('background-color','transparent');
    $('.menu_fixed').css('position','relative');
	}
});
/*прокрутка вверх*/
const anchors = document.querySelectorAll('.btn_up')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
/*анимация вращения*/
$(".modal_x").rotate({
  bind:
  {
    mouseover : function() {
    $(this).rotate({animateTo:1380})
  },
  mouseout : function() {
    $(this).rotate({animateTo:0})
    }
  }
});
