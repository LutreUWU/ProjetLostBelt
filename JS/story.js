buttonRight = document.querySelectorAll(".rightButtonStory")
buttonLeft = document.querySelectorAll(".leftButtonStory")
const widthSlider = document.querySelector('.allLostBelt')
buttonRight.forEach((element, index)=> {
    element.addEventListener("click", function(){
    RightSlide(index)
    });
  })
buttonLeft.forEach((element, index) => {
  element.addEventListener("click", function(){
  LeftSlide(index)
  });
})
function LeftSlide(index){
  widthSlider.style.animation = "None"
  page = 100 * (index - 1)
  if (index == 0 ) {
    end = 100 * (buttonLeft.length - 1)
    widthSlider.style.transform = `translateX(-${end}%)`
  } else {
    widthSlider.style.transform = `translateX(-${page}%)`
  }
  }
function RightSlide(index){
  widthSlider.style.animation = "None"
  page = 100 * (index+1)
  if (index == buttonRight.length - 1) {
    widthSlider.style.transform = `translateX(0)`
  } else {
    widthSlider.style.transform = `translateX(-${page}%)`
    }
  }


