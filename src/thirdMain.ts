

//!!!!!!!!!!!! Размеры и прокрутка элементов!!!!!!!!!!!!!



let checkDiv = document.querySelector('#checkDiv') as HTMLButtonElement
console.log(checkDiv.scrollTop); //! высота от родителя
console.log(checkDiv.clientTop); // border элемента
console.log(checkDiv.clientHeight); //! видимая внутренняя высота (сам текст)
console.log(checkDiv.offsetHeight); //! видимая общая высота
console.log(checkDiv.scrollHeight); //! высота вместе с невидимой частью элемента
console.log(checkDiv.offsetTop); //! высота от начала родителя (страницы)
console.log(getComputedStyle(checkDiv).height);



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

document.body.scrollHeight
console.log(document.body.scrollHeight);


let scrollDiv = document.querySelector('#scrollDiv') as HTMLDivElement
let showDiv = document.querySelector('#showDiv') as HTMLDivElement

// console.log(document.body.);


document.addEventListener ('scroll', (e)=> {
    if (window.pageYOffset + window.innerHeight>scrollDiv.offsetTop) {
        console.log('вы дошли до элемента');
        showDiv.style.display = 'block'
        // alert('вы дошли до элемента')
    }
    // console.log(e.pageY);
    console.log(window.pageYOffset);
    console.log(window.scrollY);
    console.log(window.scrollTo);
    console.log(window.pageYOffset + window.innerHeight);
    console.log(scrollDiv.offsetTop);
})



console.log(window.innerHeight);

console.log(window.outerWidth); //! общая ширина
console.log(document.body.clientWidth); //! ширина за вычетом полосы прокрутки и панели разработчика =)
console.log(document.body.clientHeight);
console.log(document.body.offsetHeight);
console.log(document.body.scrollHeight);
console.log(document.body.scrollTop);
console.log(window.innerHeight);

// document.body.scrollTop = '300px'


//! window.scrollY( или window.pageYOffset) -  сколько пикселей прокручено 
//! window.innerHeight - высота видимой области




//! Прокрутка: scrollTo, scrollBy, scrollIntoView
let moveOnButton = document.querySelector('#moveOnButton') as HTMLButtonElement
moveOnButton.addEventListener('click', ()=> {
    window.scroll(0, document.body.scrollHeight)
    
})



let calcInput = document.querySelector('#calcInput') as HTMLInputElement



// //! Прокрутка: scrollTo, scrollBy, scrollIntoView
// moveOnButton.addEventListener('click', ()=> {
//     calcInput.scrollTo(0, 0)
    
// })



