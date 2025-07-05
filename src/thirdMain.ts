

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
// moveOnTop.addEventListener('click', ()=> {
//         workerTable.scrollIntoView({ //! переходим на начало тега или diva по id 
//         behavior: 'smooth', //! плавный переход
//         block:'end', //! на низ или верх экрана
//         inline:'center',
//     })
// })

document.body.scrollHeight
console.log(document.body.scrollHeight);


let scrollDiv = document.querySelector('#scrollDiv') as HTMLDivElement
let showDiv = document.querySelector('#showDiv') as HTMLDivElement
let calc_buttons = document.querySelector('#calc_buttons') as HTMLDivElement

// console.log(document.body.);


document.addEventListener ('scroll', (e)=> {
    if (window.pageYOffset + window.innerHeight>scrollDiv.offsetTop) {
        console.log('вы дошли до элемента');
        showDiv.style.display = 'block'
        // alert('вы дошли до элемента')
    }
    // console.log(e.pageY);
    // console.log(window.pageYOffset);
    // console.log(window.scrollY);
    // console.log(window.scrollTo);
    // console.log(window.pageYOffset + window.innerHeight);
    // console.log(scrollDiv.offsetTop);
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




//!!!!!!!!!!!!!! Прокрутка: scrollTo, scrollBy, scrollIntoView !!!!!!!!!!!!!111

//! Метод scrollBy(x,y) прокручивает страницу относительно её текущего положения.
let moveOnButton = document.querySelector('#moveOnButton') as HTMLButtonElement
moveOnButton.addEventListener('click', ()=> {
    // window.scrollTo({
    //     top: 500,
    //     behavior:'smooth'
    // })
})


let calcInput = document.querySelector('#calcInput') as HTMLInputElement


//! Метод scrollTo(pageX,pageY) прокручивает страницу на абсолютные координаты
moveOnButton.addEventListener('click', ()=> {
    // window.scrollTo({
    //     top: 50,
    //     left: 0,
    //     behavior: "smooth"
    // });
})


//! Метод scrollIntoView прокручивает страницу ДО элемента
moveOnButton.addEventListener('click', ()=> {
    // calcInput.scrollIntoView({
    //     behavior:'smooth',
    //     block:'center',
    // })
})





console.log(document.forms[0]);
console.log(document.forms.userSurname);
console.log(document.forms.userId);

console.log(document.forms[0].elements[2].type);
console.log(document.forms.userId);










// moveOnButton.addEventListener('click', ()=> {
//     calcInput.scrollIntoView({
//         behavior:'smooth'
//     })
    
// })


document.addEventListener('keydown', ()=> {
    if(calc_buttons.offsetTop< window.scrollY+window.innerHeight/2) {
        calc_buttons.style.color = 'red'
        calc_buttons.style.transition = '5s'   
    } else {
        calc_buttons.style.color = ''
    }
    // console.log(calc_buttons.offsetTop);
    // console.log(window.scrollY);
    // console.log(window.innerHeight);
    
})







moveOnButton.addEventListener('click', ()=> {
    calcInput.scrollIntoView({
        inline:'center',
        behavior: 'smooth'
    })
    // window.scrollTo({
    //     top:0,
    //     behavior:'smooth',
    // })
})



moveOnTop.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
})


window.addEventListener('keydown',(e)=> {
    if (window.scrollY>3700) {
        moveOnTop.style.background = 'greenyellow'
    } else {
        moveOnTop.style.background = 'red'
        
    }
        
    moveOnTop.innerHTML= `${(window.scrollY).toFixed()} px`
    
})





let uparrow = document.querySelector('#uparrow') as HTMLDivElement



window.addEventListener('scroll',()=> {
    if(window.scrollY>2000) {
        uparrow.style.display = 'block'
    } else {
        uparrow.style.display = 'none'
    }
})

// console.log(window.innerWidth);
// console.log(window.outerWidth);
// console.log(getComputedStyle(uparrow).width);






//! контейнер с новостями (там где нажать на крестик  и закрыть новость)

let container_news = document.querySelectorAll('#container_news div') as any

for (let i = 0; i < container_news.length; i++) {
    container_news[i].firstElementChild.addEventListener('click', (e:any)=>{
        container_news[i].style.height = '0px'
        container_news[i].style.opacity = 0
        container_news[i].firstElementChild.style.background = 'blue'
        console.log(e.target);
        console.log(e.currentTarget);
        console.log(e.button);

    })
    setTimeout(() => {
container_news[i].style.display = 'block'
        
    }, 1000);
}
// !!!!!!!!!!!!   конец контейнера с новостями





document.body.addEventListener('mousedown',(e)=> {
    // console.log(e.button);    
    // console.log(e.buttons);    
})



document.body.addEventListener('contextmenu', (e)=> {
        // e.preventDefault() //! меню не выходит при нажатии правой кнопкой мыши
})



//!!!!!!!!!!!!!!! removeEventListener !!!!!!!!!

let count = document.querySelector('#count') as HTMLDivElement
count.addEventListener('click', counter)

let counts = 0
function counter () {
    counts+=1
    count.innerHTML=counts as any
    if (counts>=3) {
        count.removeEventListener('click', counter) //! как и в addEventListener        
    }
}


let moveOnTop2 = document.querySelector('#moveOnTop2') as HTMLButtonElement

document.addEventListener('keydown', (e)=> {
    if (window.scrollY +window.innerHeight>moveOnTop2.offsetTop) {
        moveOnTop2.style.background = 'green'
        moveOnTop2.style.transition = '5s'
    } else {
        moveOnTop2.style.background = 'orange'
        moveOnTop2.style.transition = '5s'
    }
        
// найти высоту нижней линии документа

// console.log(window.pageYOffset);//! - насколько px страница прокручивается вниз
// console.log(window.scrollY);//! - насколько px страница прокручивается вниз



})

// console.log(document.forms.namedItem('newUserForm')) //! обращение к форме через name (НЕ через id)

let newUserForm = document.forms.namedItem('newUserForm') as any
newUserForm[3].addEventListener('click',(e:any)=> {
    e.preventDefault()
    if(newUserForm[2].checked==true) {
       return console.log(`Привет ${newUserForm[0].value}! Я тебя запомнил`);
    }
    return console.log(`Привет ${newUserForm[0].value}! Я тебя не запомнил`);
    // console.log(newUserForm[2].checked);
})






