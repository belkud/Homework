

//!!!!!!!!!!!! Размеры и прокрутка элементов!!!!!!!!!!!!!



let checkDiv = document.querySelector('#checkDiv') as HTMLButtonElement
// checkDiv.style.border = '10px solid red'
// checkDiv.style.margin = '30px'
console.log(checkDiv.style.height);
console.log(checkDiv.clientHeight); //! видимая внутренняя высота (сам текст)
console.log(checkDiv.offsetHeight); //! видимая общая высота
console.log(checkDiv.scrollHeight); //! высота вместе с невидимой частью элемента
console.log(checkDiv.scrollTop); //! 
console.log(checkDiv.offsetTop); //! высота от начала родителя (страницы)
console.log(checkDiv.clientTop); // border элемента


let accc = 0
document.addEventListener('keydown', (e)=> {
    if (checkDiv.offsetTop>=10) { //! ограничение передвижения элемента!!!!!!! ракета!!!!!!!!!
        accc -=10     
    }
    checkDiv.style.top = accc+ 'px'
    // checkDiv.style.scrollMarginTop = accc+ 'px'
    
    console.log(checkDiv.offsetTop);
    console.log(checkDiv.scrollTop);
    
    console.log(getComputedStyle(checkDiv).length); // количество css-свойств
})

console.log(document.body.offsetHeight);
console.log(document.body.clientHeight);
console.log(document.body.scrollHeight);
console.log(document.body.scrollTop);

console.log(getComputedStyle(checkDiv).height);

// if (document.body.scrollTop>=1550) {
//     console.log('scroll');
    
// }
 

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Размеры и прокрутка окна!!!!!!!!!!!!!!!!!

let moveOnTop = document.querySelector('#moveOnTop') as HTMLButtonElement
moveOnTop.addEventListener('click', ()=> {
    // window.scrollTo(0,0)
    
    workerTable.scrollIntoView({ //! переходим на начало тега или diva по id 
        behavior: 'smooth', //! плавный переход
        block:'end', //! на низ или верх экрана
        inline:'center',
    })
})

