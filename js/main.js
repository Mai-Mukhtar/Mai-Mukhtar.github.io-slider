var imgs= document.querySelectorAll('img');
var fixedBox = document.getElementById('fixedBox');
var smallBox = document.getElementById('smallBox');
var closeIcon = document.getElementById('close');
var right = document.getElementById('right');
var left = document.getElementById('left');
var index ;
var itemsArray = Array.from(imgs);
// console.log(itemsArray);
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click' , function(e){     
        fixedBox.style.display='flex';
        clickedImg =  e.target;
         index = itemsArray.indexOf(clickedImg);
        // console.log(index)
        imageSrc = clickedImg.getAttribute('src');
        smallBox.style.backgroundImage=`url(${imageSrc})`       
    })   
}
function closeItem(){
    fixedBox.style.display='none';
}
closeIcon.addEventListener('click' , closeItem );
function getNextImg (){
    index += 1;
    // console.log(index);

    if (index == itemsArray.length){
        index = 0 ;
    }
    var nextItem = itemsArray[index];
    var nextItemSrc = nextItem.getAttribute('src');
    smallBox.style.backgroundImage = `url(${nextItemSrc})`  
}
right.addEventListener('click' , getNextImg);
function getPrevImg(){
    index -= 1;
    // console.log(index);
    if (index == -1) {
        index = itemsArray.length -1;
    }
    var prvItem = itemsArray[index];
    var prvItemSrc = prvItem.getAttribute('src');
    smallBox.style.backgroundImage = `url(${prvItemSrc})`
   
}
left.addEventListener('click' , getPrevImg);

document.addEventListener('keyup' , function(e){
    if(e.key == "ArrowRight"){
        getNextImg();
    } else if(e.key == "ArrowLeft"){
        getPrevImg()
    } else if ( e.key == "Escape"){
        closeItem()
    }
})