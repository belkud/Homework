import './style.css'


let x1 = Date.now()




// await fetch('https://jsonplaceholder.typicode.com/photos')


// const url = fetch('http://localhost:5173/Homework/')

const persons = document.querySelector('#persons') as HTMLDivElement



// let formData = new FormData([form])


const name = document.querySelector('#name') as HTMLInputElement
console.log(name);

name.addEventListener('click', () => {

})


// persons.innerHTML =''





const form1 = document.forms[1]
// const form2 = document.querySelector('#formElem')

console.log(form1)
// console.log(form2)
// console.log(form1 == form2)

const formData1 = new FormData(form1)
// const formData2 = new FormData(form2 as any)

console.log(formData1)
// console.log(formData2)
console.log(formData1.get('surname'))
console.log(formData1.get('name'))
// console.log(formData2.get('surname'))








// const url = fetch('https://api.github.com/users/belkud')


// async function gitPhoto () {
//     try {
//         const response = await url

//         //! Проверка статуса сервера
//         if(response.ok) {
//             setTimeout(()=> {
//                 persons.innerHTML += `<div id="request">Запрос выполнен</div>
//                 <img id="avatar" src="https://avatars.githubusercontent.com/u/126806058?v=4" alt="">`
//             },0) 
//             // setTimeout(() => {
//             //    persons.innerHTML = `<div id="request">Запрос выполнен</div>` 
//             // }, 6000);
//         } else {
//             persons.innerHTML += 'Ошибка сервера <br>'     
//         }
//         const photo = await response.blob()
//         console.log(response.ok);
//         console.log(response.headers.get('Content-length'));
//         console.log(response.headers.get('Content-type'));

//         console.log(photo);

//     } catch (error:any) {
//         persons.innerHTML += `ошибка: ${error.message}`
//     }
// }

// gitPhoto()

// const check = document.querySelector('#check') as HTMLDivElement
// check.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>')

// const pig = document.querySelector('#pig') as HTMLDivElement
// pig.style.backgroundColor = 'aqua'
// pig.style.border = '2px solid red'

//! два способа написания
// pig.style.height = '250px'
// // pig.style.height = 250 + 'px'

// pig.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>')
// pig.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>')
// pig.insertAdjacentHTML('afterend', '<p>afterend</p>')
// pig.insertAdjacentHTML('beforeend', '<p>beforeend</p>')

// pig.innerHTML +='<img src="public/vite.svg">'



// let divStart = document.createElement('div') as HTMLDivElement
// divStart.innerHTML = 'DIV создан в ts prepend'
// divStart.style.backgroundColor = 'pink'
// divStart.style.color = 'aliceblue'

// <img src=https://ir.ozone.ru/s3/multimedia-1/wc500/6847439437.jpg>






// let divEnd = document.createElement('div') 
// divEnd.innerHTML = 'создан в ts, метод prepand'
// divEnd.style.color = 'white'
// divEnd.style.backgroundColor = 'yellowgreen'
// pig.append(divEnd)


// const url2 = fetch('https://api.github.com/users/belkud')
// .then(mylog=>mylog.json())
// .then(login =>console.log(login.login))
// console.log(url2);














// async function learnJS () {
//     const response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//     const json = await response.json()
//     // console.log(json);


// }

// learnJS()
















// async function users() {
//     try {

//         const resp = await fetch('https://jsonplaceholder.typicode.com/users', {
//                 method:'POST',
//                 headers: {
//                         "Content-type":"application/json"
//                     },
//                     body:JSON.stringify({
//                             name: "Mary",
//                         formData: {
//                             "Content-Type": "multipart/form-data"
//                         }
//                     })
//                 })

//         const json = await resp.json()
//         console.log(json);


//                 //! splice - выводит по id
//                 // console.log(json.splice(5,10));
//                 let key
//                 for (key in json) {
//                     json[key]
//                     // console.log(json[key]);
//                 } 
//             } catch (error) {
//                 console.log(error);

//             }
//         }

//         users()


// async function loadJson(url) {
//     const response = await fetch(url)
//     const json = await response.json()


//     if (response.status == 200) {
//             return json
//         } else {
//           throw new Error(response.status);
//         } 
//   }

//   loadJson('no-such-user.json')
//   .catch(alert)


//! response.json() - преобразовывает ответ в JSON-объект
//! response.text() - возращает объект в обычный текст
//! response.formData() - возвращает объект как formData()
//! response.blob() - возращает объект как Blob (бинарные данные с типом)

// for (let i = 0; i < json.length; i++) {
//     console.log(json[i].name);
//     persons.innerHTML += `<br>${json[i].name}`
// }

//! можно выбрать определенные айдишники как с помощью json.splice(3,8) 
//! - в данном случае вырезает с 3 по 8 'id'
//! так и с помощью цикла for





















// const digitals = document.querySelector ('#digitals') as HTMLDivElement

// const digitalColor = document.querySelector ('#digitalColor') as HTMLDivElement
//   setInterval(() => {
//     if (digitals.style.color =='orange') {
//       digitals.style.color= 'greenyellow'
//       digitalColor.innerHTML = `greenyellow`
//       digitalColor.style.color= 'greenyellow'
//     } else {
//       digitals.style.color = 'orange'
//       digitalColor.innerHTML = `orange`
//       digitalColor.style.color = 'orange'
//     }

//   }, 10000);

//   digitalColor.addEventListener ('click', ()=>{console.log(46);
//   })

// console.log(digitals.style.color);




// fetch ('https://jsonplaceholder.typicode.com/users')

// async function ozon() {
//   const response = await fetch ('https://www.ozon.ru/category/smartfony-15502/')
//   console.log(response);

//   const json = await response.blob()
//   console.log(json);

//   console.log(json.slice(0,100));



// }
// ozon()


// digitals.innerHTML += `
// <img src=https://ir.ozone.ru/s3/multimedia-1/wc500/6847439437.jpg>
// <img id="avatar" src="https://avatars.githubusercontent.com/u/126806058?v=4 " alt="" srcset="">
// `

// console.log('https://www.ozon.ru/category/smartfony-15502/')


// console.log(
//   fetch('https://www.ozon.ru/category/smartfony-15502/')
//   );

const stars = document.querySelector('#star') as HTMLDivElement

stars.addEventListener('click', (event) => {
    const pressStar = event.target as HTMLDivElement

    if (pressStar.dataset.set) {
        let x = +pressStar.dataset.set
        for (let i of stars.children) {
            const el = i as HTMLDivElement
            if (el.dataset.set && +el.dataset.set <= x) {
                el.style.color = 'white'
            } else {
                el.style.color = 'black'
            }
        }
    }

})

console.log('___________');



const text = document.querySelector('#check2') as HTMLDivElement
text.addEventListener('click', () => {

    text.style.color = 'red'
    text.innerHTML += 'k'
})
text.style.cursor = 'POINTER'
console.log(text.style.cursor);



// document.body.innerHTML += 'adsfsdfsdfsdf'




console.log('hi');
console.dir('hi')
console.table('hi')

const anim = 'pig'
console.log(anim);

const animMass = {
    color: 'pink',
    age: 3
}
console.table(animMass);

const digit = [3, 5, 7]

console.log(digit.map(el => el * 2));



// округлять к ближайшему нечетному числу

const x = 5.3
console.log(2 * Math.ceil(x / 2));



const oddNumber = [2, 3, 6, 8, 5, 0] as any
oddNumber.forEach(el => {
    if (el % 2 != 0) {
        console.log(el);
    }
})

let acc = 0
oddNumber.forEach(el => {
    acc += el
})
console.log(acc);



const odd = (el) => el % 2 != 0
console.log(oddNumber.filter(odd));


let acc2 = 0
for (let i = 0; i < oddNumber.length; i++) {
    acc2 += oddNumber[i]
}
console.log('acc2 = ' + acc2);


let letter = ['a', 'b', 'a', 'e', 'a', 'e']

let letterAcc = 0 as any
letter.forEach(el => {
    if (el == 'a') {
        letterAcc += 1
    }
})

console.log(letterAcc);


// if (el=='a' || el=='b' || el =='e') {
//     // if (el == 'q') {
//         letterAcc += 1
//     // } 

// } else {
//     letterAcc == 'incorrect number'
// }

let memory = {
    cat: 'Bars',
    dog: 'Guf'
}
let a = memory
let b = memory
console.log(a);
console.log(b);
console.log(memory, b);
console.log(memory.cat);

memory.cat = 'Catty'
console.log(memory.cat);

memory.bird = 'parrot'

console.log(memory.bird);








let equipment = {
    10: 10,
    b: 111,
    c: 555
}
console.log(equipment);


equipment.d = 777
console.log(equipment);



function corn() {
    console.log('hjk');

}
console.log(corn);




function www() {
    console.log(123);
}
www()

const hh = function () {
    console.log('hhhhh');
}
hh()


const macesta = {
    street1: 'Lechebnya',
    street2: 'Lechebnya2',
    street3: {
        str: 'Lechebnya111',
        str2: 'Lechebnya222',

    },
    macestaDictrict: function () {
        console.log('hi');

    },
    www

}
console.log(macesta);

let js = JSON.stringify(macesta)
console.log(js);

let antiJs = JSON.parse(js)
console.log(antiJs);





const person = {
    name: 'Dima',
    age: 30
}
console.log(person);


function changeName(newName: any) {
    newName.name += 'aaa'
    return newName
}
console.log(changeName(person));


const person3 = { ...person }
person3.name = 'Petya'

console.log(person3);
console.log(person);



const person2 = person
person2.name = 'Kolya'
console.log(person2);



function fn(a: any, b: any) {
    a = a + 100
    return a + b
}

console.log(fn(5, 8));
console.log(fn(15, 14));














const time = {
    year: 2020,
    mounth: 'March'
}

function changeYear(newYear: any, newMounth: any) {
    newYear.year += 10
    newMounth.mounth = 'April'

    return newMounth
}
console.log(changeYear(time, time));














let aa = 9
let bb = 19

if (aa >= 10 && bb >= 10) {
    console.log('выше допустимого значения');
} else {
    console.log('ниже допустимого значения');

}


// function func () {
//     let bb = true
//     console.log(bb);
// }

// func()




console.log(typeof (aa) == typeof (bb));


// let mass = [3, 2, 5]
// mass.forEach(el=>{
//     setInterval (()=> {
//         console.log(el*=3)
//     },10000)

// });


let switchers = document.querySelector('.switcher') as HTMLDivElement
let score = 0

setInterval(() => {
    let x = score += 1
    switchers.innerHTML = x

    if (switchers.innerHTML % 2 == 0) {
        switchers.style.backgroundColor = 'red'
    } else {
        switchers.style.backgroundColor = 'blue'
    }
    if (switchers.innerHTML >= 3 && switchers.innerHTML <= 10) {
        switchers.style.backgroundColor = 'green'
    }


}, 10000)

console.log(false || 'Vladimir');

const battery = '500 mah'
const battery2 = '300 mah'


const capacity = {
    battery,
    battery2,
    time
}


const capacity2 = `${battery} ${battery2}`
const capacity3 = battery + ' ' + battery2

console.table(capacity);
console.log(capacity2);
console.log(capacity3);




// const anonim = setTimeout(() => {
//     console.log('anonim');
//     console.log('anonim');
//     console.log('anonim');

// }, 500);

// console.log(anonim);


// const findError = ()=> {
//  const findError=()=> {
//     throw new Error('some error');
// }

//     try {
//         findError()
//         console.log('without mistake');

//     } catch (error) {
//         console.log('with mistake');
//         console.log(error);



// }

// findError()

console.log('continue...');

const cat = {
    name: 'Catty',
    age: 3
}

const dog = {
    name2: 'Diggy',
    age2: 4
}


const animal = {
    ...cat,
    ...dog,
}
console.log(animal);



console.log('hi ' + 'log');
console.log(`${cat.name + ' ' + dog.name2}`);

const myName = 'Vladimir'
const city = 'Sochi'

console.log('Меня зовут ' + myName + ' Я живу в городе ' + city);
console.log(`Меня зовут ${myName}, я живу в городе ${city}`);


function summ(a: number, b: number) {
    console.log(a + b)
    return
}
summ(5, 7)
summ(6, 9)


let test = function summMultiplier(a: any, b = 8) {
    let c = a * a + b * b
    console.log(c);
    return c
}
test(3, 3)
test(7)

const yyy = function (a: number, b = 8) {
    let c = a * a + b * b
    // console.log(c);
    return c
}
console.log(yyy(5));

// сумма чисел от 1 до 10 

let summNumber = 0
for (let i = 0; i <= 100; i++) {
    summNumber += i
}
console.log(summNumber);
// setTimeout(() => {
//     document.body.innerHTML= ''
// }, 10);



// let random = Math.random()

// let changeColor = setInterval(()=> {
//     console.log;
// },1000)
// console.log(changeColor);



// document.body.innerHTML = 'sdfsfgdfg'

// setInterval(()=> {
//     document.body.innerHTML += `Отложенное сообщение <br>`  
//     let x = document.body.style

//     let random = (Math.round(Math.random()*2+1))
//     console.log(random);

//     if (random==1) {
//         x.color = 'red'
//     } else if(random==2){
//         x.color = 'green'
//     } else if(random==3){
//         x.color = 'blue'
//     } else {
//         x.color = 'black'
//     }

// },1000)




// console.log(x);
// if (x.color=='red') {
//     x.color='yellow' 
// } else if (x.color='yellow' ) {
//     x.color='orange' 
// } else {

//     x.color='green' 
// }

const noName = (a: any, b: any) => {
    let c = a + b
    console.log(c)
    return
}
noName(3, 4)
noName(8, 4)
noName(8, 14)


const post = (newPost: any, time = Date()) => ({
    newPost: 8,
    time: Date()
})

console.log(post(1, Date().day));

// let data = Date.now



let x2 = Date.now()



console.log(x1);
console.log(x2);
let extraInfo = 'обработка консоли произошла в '

console.log(`${extraInfo} ${x2 - x1} милисекунды`);


const makeMistake = () => {
    throw new Error("Есть ошибка");
}
try {
    // makeMistake()
    console.log('ошибок нет');

} catch (error) {
    console.log('ошибка обработана');

}

console.log('проверочка');

console.log(`на дворе сегодня ${new Date().getFullYear()}`)




console.log(new Date().valueOf());


console.log('_____________________________');




try {
    console.log(1);
    console.log(2);
    let user = 'Vasya'

    if (user == 'Petya' || !user) {
        throw new SyntaxError("Ошибочка");
    }

    console.log(3);

} catch (error) {
    console.log('есть ошибка');
    console.log(error.name);
    console.log(error.message);

} finally {
    console.log('Запрос обработан');

}

console.log(4);


const textInTest = document.querySelector('.test') as HTMLDivElement
textInTest.innerHTML = `${new Date().getDate()}`
textInTest.style.color = 'red'
textInTest.style.fontWeight = 800 as any
textInTest.style.fontSize = 2 + 'em'
textInTest.style.padding = 5 + 'px'
textInTest.style.marginTop = -15 + 'px'




try {
    let x = 5
    if (x < 6) {
        throw new SyntaxError("Ошибочка");

    }

} catch (error) {
    console.log(error.name);
    console.log(error.message);

}


console.log(12345);



let z = 10
z = (z + 5) * 3
console.log(z);
console.log(z);
console.log(z);

console.log('____________');

let masss = [3, 5, 4, 8, 3, 6]
let xxx = masss.forEach(el => {
    (el * 2);
})
console.log(xxx);
console.log(xxx);

let z2 = 10
z2 > 9
    ? console.log('верно')
    : console.log('неверно');

let z3 = textInTest.style.color = 'red'
z3 == 'red'
    ? console.log('Правильно')
    : console.log('Неправильно');

console.log('____________');

try {
    let day = 3
    switch (day) {
        case 1: console.log('понедельник');
            break
        case 2: console.log('Вторник');
            break
        case 3: console.log('Среда');
            break
        case 4: console.log('Четверг');
            break
        case 5: console.log('Пятница');
            break
        case 6: console.log('Суббота');
            break
        case 7: console.log('Воскресенье');
            break
        case x: console.log('это не число');
            break
        default: console.log('число не соответствует диапазону');
            throw new Error("проверка ошибки");
    }

} catch (error) {
    console.log(error.message);
    console.log(error.name);
    console.log('_введено неверное число_');

}

console.log('продолжение...');


let numbers = [1, 2, 3, 4]
console.log(numbers);

let numbers2 = numbers.map(el => {
    return el * 3

});
console.log(numbers2.length);

numbers2.push(6)
console.log(numbers2);
console.log(numbers2.length);

numbers2[5] = 100
console.log(numbers2);
console.log(numbers2.length);

numbers2.pop()
console.log(numbers2);
console.log(numbers2.length);






let t = 3



try {
    if (t > 5) {

        throw new Error("Проверить");
    }

} catch (error) {
    console.log('непонятная ошибка');

}


console.log('проверка');



let massive = [3, 7, 2, 6, 9]
console.log(massive.forEach((el) => {

}))
console.log(massive);


// massive.push(8)
// console.log(massive);

// massive.pop()
// console.log(massive);

// massive.unshift(555)
// console.log(massive);

// massive.shift()
// console.log(massive);


let checkMap = massive.map((el) => {
    return el * el
})
console.log(checkMap);

console.log(Date().split(' ').join('___'));

// let cherry = 'cherryyyyy'
// console.log(cherry);




let nums = [3, 5, 7, 9]
nums.forEach((el) => {
    return console.log(el * 5);
})
console.log(nums);

let mapNums = nums.map((el) => {
    return Math.floor(Math.random() * el)
})

console.log(mapNums);

// console.log(Math.round(Math.random()*3));


let numeric = 5.878776
console.log(typeof numeric);
console.log(numeric.toFixed(2));


let numeric2 = numeric.toFixed(2)
console.log(numeric2);
console.log(parseInt(numeric2));
console.log(parseFloat(numeric2));

//! проверка на число/строку
console.log(typeof numeric2);




const My = {
    name: 'Vova',
    age: 33
}
console.log(My);
const { age } = My
console.log(age);


// const changeMy = {name}
// console.log(changeMy);






let temperature = 25
console.log(typeof temperature);



//! деструктуризация массивов

let colors = ['white', 'yellow', 'blue']
console.log(colors);

const [firstCol, secondCol] = colors
console.log(firstCol);
console.log(secondCol);















//! Рестуктуризация объектов
const Mike = {
    age2: 45,
    village: 'Myrtle Beach',
    country: 'USA',
    greet: function hey() {
        "Hello, I'm " + age2
    }
}
console.log(Mike);

const { age2, village } = Mike
console.log(age2);
console.log(village);
console.log();



const { greet } = Mike
console.log(greet);







let vegetables = ['tomato', 'potato', 'cucumber']
console.log(vegetables);

const [firstVeg, secondVeg, thirdVeg] = vegetables
console.log(firstVeg);





const letters = ['a', 'b', 'c', 'd']

const [letA, letB, letC, letD] = letters
console.log(letA);
console.log(letB);
console.log(letC);
console.log(letD);



const numm = {
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4,
}
console.log(numm);

const { num2, num1, num3, num4 } = numm
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

console.log('____________');


let letterFindQuantity = 0

let findQuantity = ['a', 'b', 'a', 'e', 'a', 'e']
console.log(findQuantity)
findQuantity.forEach((el) => {
    if (el == 'a') {
        letterFindQuantity += 1
    }
})
console.log(letterFindQuantity)
 



//! Посчтитать буквы 'е' в тексте

let accE = 0 
let accE2 = 0 
let accE3 = 0 

const scoreE = 'Заметьте, что свойство   — это также объект со своими собственными свойствами '
console.log(typeof scoreE);


const newMass = scoreE.split('') 
console.log(typeof newMass);

console.log(newMass);

newMass.forEach((el)=> {
    if (el=='а') {
        accE+=1
    }
    else if (el=='е') {
        accE2+=1
    } else {
        // accE3+=1
        
    }
    
})
console.log(`В данной строке:
    букв'а' = ${accE} 
    букв 'е' = ${accE2},
    оставшиеся буквы = ${newMass.length-accE2-accE} `);



    let mass = ['Дима','Петя','Даша','Вера']
    let [pers1, pers2, pers3, pers4] = mass
    console.log(pers3);
    


    let array = {
        Дима: 17,
        Петя: 19,
        Даша: 15,
        Вера: 16
    }
    let {Дима, Петя, Даша, Вера} = array
    console.log(Петя);
    

    const newUser = {
        name: 'Petya',
        age: 25,
        city: 'Moscow'
    }
    console.log(newUser);
    
    const addNewUser = ({name, age})=> {
        if (!name) {
            console.log('Нет имени');
        } else if (!age) {
            console.log('Нет возраста');
        } else (
            console.log(`Добро пожаловать ${name}, ваш возраст ${age}`)
        )
    }
    addNewUser(newUser)



    //! циклы
        let accumulation = 0
        let numers = 5
    for (let i = 0; i <= numers; i++) {
        console.log('цикл ' + `${i}`);
        console.log(accumulation);
        
        accumulation+=i
    }

    console.log(accumulation);



    //! через forEach сделать граффик для массива




let graf = document.querySelector('#diagram') as HTMLDivElement
graf.addEventListener('click', (event)=> {
    const graffics = event.target as HTMLDivElement
    let x = graffics.style

    // console.log(graffics.dataset.set);
    if (x.backgroundColor == 'blue') {
        x.backgroundColor  = 'orange'
    } else {
        x.backgroundColor  = 'blue'
    }

    let growHeight = 100+graffics.dataset.set*10
    let acc = 0
    setTimeout(()=>{
        graffics.style.height = growHeight+'px'
        graffics.style.transition = 1+'s'
        // graffics.innerHTML = graffics.style.height
        
        const intervalId = setInterval(function func () {
            
            acc++
            if (acc>=growHeight) {
                acc =growHeight           
                }
                
            graffics.innerHTML =acc
                
                
            }, 4);

            setTimeout(() => {
                clearInterval(intervalId)     
            }, 2000);

    },1000)
    // graffics.style.color = 'white'
    // console.log(graffics.style.height+'px');
    
})
 


const intervalId = setInterval(function() {
    console.log('Я выполняюсь каждую секунду')
  }, 1000)
  
  clearInterval(intervalId)










// stars.addEventListener('click', (event) => {
//     const pressStar = event.target as HTMLDivElement

//     if (pressStar.dataset.set) {
//         let x = +pressStar.dataset.set
//         for (let i of stars.children) {
//             const el = i as HTMLDivElement
//             if (el.dataset.set && +el.dataset.set <= x) {
//                 el.style.color = 'white'
//             } else {
//                 el.style.color = 'black'
//             }
//         }
//     }

// })







//! посчитать количество симоволов 'о' в этой строке 

let letterO = 'посчитать количество симоволов о в этой строке '
console.log(typeof letterO);

let accO = 0 as any

let findO = letterO.split('').forEach((el)=> {
    if (el=='о'){
        accO+=1
    }
})

console.log(accO);



//! деструктуризация массива

console.log('____________');
let accLengthPlanet = 0
let accLength = 0

const planet = ['Mars', 'Venus', 'Earth', 'Saturn']
let [first, second, third] = planet 


planet.forEach((el)=> {
    if (el.length==5) {
        accLength = el.length
        accLengthPlanet+=1
        console.log(el);
        
    }
});
console.log(`количество планет, имеющих ${accLength} символов = ${accLengthPlanet}`);
console.log('____________');


console.log(second);


//! деструктуризация объекта
const solaryPlanet = {
    Earth: ' blue',
    Mars:'red',
    Venus:'orange',
    Saturn:'violet'
}

console.log(solaryPlanet);
let {Earth, Mars, Venus, Saturn} = solaryPlanet
console.log(Earth);

for (const el in solaryPlanet) {
        // const element = solaryPlanet[el];
        console.log(el[0]);
        
}

//! Найти сколько планет имеет 4 буквы в названии 








//! дест массива
const checkCity = ['Moscow', 'Sochi', 'Peterburg'] 
let [first1, second2, third3 ] = checkCity
console.log(first1);


// const planet = ['Mars', 'Venus', 'Earth', 'Saturn']
// let [first, second, third] = planet 
