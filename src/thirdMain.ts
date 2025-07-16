

//!!!!!!!!!!!! Размеры и прокрутка элементов!!!!!!!!!!!!!



let checkDiv = document.querySelector('#checkDiv') as HTMLButtonElement
// console.log(checkDiv.scrollTop); //! высота от родителя
// console.log(checkDiv.clientTop); //! border элемента
// console.log(checkDiv.clientHeight); //! видимая внутренняя высота (сам текст)
// console.log(checkDiv.offsetHeight); //! видимая общая высота
// console.log(checkDiv.scrollHeight); //! высота вместе с невидимой частью элемента
// console.log(checkDiv.offsetTop); //! высота от начала родителя (страницы)
// console.log(getComputedStyle(checkDiv).height);



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
// console.log(document.body.scrollHeight);


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



// console.log(window.innerHeight);

// console.log(window.outerWidth); //! общая ширина
// console.log(document.body.clientWidth); //! ширина за вычетом полосы прокрутки и панели разработчика =)
// console.log(document.body.clientHeight);
// console.log(document.body.offsetHeight);
// console.log(document.body.scrollHeight);
// console.log(document.body.scrollTop);
// console.log(window.innerHeight);

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





// console.log(document.forms[0]);
// console.log(document.forms.userSurname);
// console.log(document.forms.userId);

// console.log(document.forms[0].elements[2].type);
// console.log(document.forms.userId);










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

// let testtIdd = document.querySelector('#testtIdd') as HTMLInputElement
// testtIdd.addEventListener('keydown',()=> {
    // testtIdd.style.background = 'red'
    // if (testtIdd.value=='') {
    // } else {
    //     testtIdd.style.background = ''
    // }
// })


let advertisment = document.querySelector('#advertisment') as HTMLDivElement

let data = new Date()
advertisment.innerText = data as any


// console.log(document.getElementsByTagName('div'));

// console.log(document.activeElement);

document.addEventListener('keydown',(e)=> {
    // console.log(document.activeElement);
})




let userId = document.querySelector('#userId') as any
userId[0].addEventListener('focus',(e:any)=> {
    console.log('Зашли на элемент');
    userId[0].style.background = 'red' 
})
userId[0].style.background = 'red' 

userId[0].addEventListener('blur',(e)=> {
    console.log('Вышли с элемента');    
})



document.addEventListener('copy', (e:any)=>{
    const text = window.getSelection() + ' этот текст скопирован'
    navigator.clipboard.writeText(text)
    

    
})

// let testForm = document.createElement('img') as any
// testForm.src = 'src="/public/smile1.png" '
// document.append('testForm')

// console.log(testForm.src);



// let testForm = document.createElement('img') as any
// testForm.src = 'public/ball.svg'
// document.body.append(testForm)



console.log(document.cookie);
console.log(document.cookie);

console.log(localStorage.length);
console.log(localStorage);







console.log(localStorage.length); //! количество


localStorage.setItem('name', 'ivan') //! добавление

console.log(localStorage.getItem('name')); //! просмотр


localStorage.name = 'Dmitriy'  //! перезапись
console.log(localStorage);

delete localStorage.name  //! удаление
console.log(localStorage);


for (let i = 0; i < localStorage.length; i++) {  //! перебор в цикле
    console.log(localStorage.key(i));
}






console.log(document.cookie = ('digitals : 999'));
console.log(document.cookie);



//! блокировка потока
// function sleep(ms:number) {
//   const start = Date.now();
//   while (Date.now() - start < ms) {} // Блокирует поток!
// }

// console.log("Начало");
// sleep(2000); // Блокирует на 2 секунды
// console.log("Конец");


//! добавление тэга style в smile_container через js
let smile_container = document.querySelector('#smile_container') as HTMLDivElement

let style = document.createElement('style')

setTimeout (()=> {

    style.innerHTML = ` #smile_container {
        background-color: greenyellow;
        transition:.2s;
        }`
        smile_container.append(style)
    },1000)

    // document.body.onclick= (e) => {
    // console.log(e.target);
    // }


 

//! остановка setInterval
// let testAcc = 0
// let stopInt = setInterval (()=> {
//     testAcc+=1
//     console.log(testAcc);
// },1000)

// setTimeout(()=>{
// clearInterval (stopInt)
// },3000)



//! фон за 10 сек плавно меняется в прозрачный, затем акк остановка


// let opacityAcc = 1

    
//     let smile = setInterval(()=> {
//         opacityAcc -= 0.1
//         console.log(opacityAcc.toFixed(1));
//         smile_container.style.opacity = `${opacityAcc}`
    
// },1000)

// setTimeout(() => {
//     clearInterval(smile)
// }, 5000);




//! let prom = new Promise ((resolve, reject) => {
//     console.log('promise start');
//         setTimeout(() => {
//             console.log('promise end');
//             resolve ('Выполнено')
//             reject (new Error ('Oooops'))
            
//         }, 1000);        
// })
// .then ((data)=> {
//     console.log(data);
// })
// .catch ((error)=> {
//     console.log(error);
// })
// .finally (()=> {
//     console.log('Промис завершен');
// })  
    


// fetch('http://localhost:5174/Homework/') //! здесь сделать ошибку
// .then ((data)=> {
//     dfssdf
//     console.log(data) //!выводятся данные //! или здесь
// })
// .catch((error)=>{
//     // document.body.style.background = 'yellow'
//     console.log(error + ' где-то ошибка');
// })








// try {
//     sgsddf
// } catch (error:any) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
// }



// try {
//     sdgsfgdfhgdhdg
// } catch { 
//     console.log('error'); //! можно просто написать ошибка, тогда мы не узнаем что за ошибка
// }









//! Создать html-страницу с формой для ввода стилизованного 
//! текста. После заполнения формы, вывести текст на экран в соот
//! ветствии с указанными стилями.

let text_from_form = document.querySelector('#text_from_form') as HTMLDivElement

let formMenu = document.querySelector('#formMenu') as any
let textArea = document.querySelector('#textArea') as HTMLTextAreaElement
let print_text = document.querySelector('#print_text') as HTMLButtonElement

print_text.addEventListener('click',(e)=> {
    e.preventDefault()
    text_from_form.innerHTML=`<div class="">${textArea.value}<div>`
    
    if (formMenu.children[0].checked == true) {
          text_from_form.classList.add('bold')        
    } else {
          text_from_form.classList.remove('bold')  
    } 

    if (formMenu.children[2].checked == true) {
          text_from_form.classList.add('underline')        
    } else {
          text_from_form.classList.remove('underline')  
    }  


console.log(formMenu.children[0].checked);

})






//    if(newUserForm[2].checked==true) {
    //    return console.log(`Привет ${newUserForm[0].value}! Я тебя запомнил`);
    // }

