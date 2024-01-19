buttonRight = document.querySelectorAll(".rightButtonStory")
buttonLeft = document.querySelectorAll(".leftButtonStory")
const widthSlider = document.querySelector('.allLostBelt')

buttonRight.forEach((element, index)=> {
    element.addEventListener("click", function(){
    RightSlide(index)
    });
  })
  
  
  buttonLeft.forEach(element => {
    element.addEventListener("click", function(){
    LeftSlide()
    });
  })
  
  
  function LeftSlide(){
    if (widthSlider.scrollLeft == 0 ) {
      widthSlider.scrollTo({
        left: widthSlider.offsetWidth * (buttonLeft.length),
        behavior: 'smooth'
      })
    } else {
      widthSlider.scrollTo({
        left: widthSlider.scrollLeft - widthSlider.offsetWidth,
        behavior: 'smooth'
      })
    }
   }
   
  
  
  function RightSlide(index){
    if (index == buttonRight.length - 1) {
      widthSlider.scrollTo({
        left: 0,
        behavior: 'smooth'
      })
    } else {
      widthSlider.scrollTo({
        left: widthSlider.scrollLeft + widthSlider.offsetWidth,
        behavior: 'smooth'
      })
    }
   }
