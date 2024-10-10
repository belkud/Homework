import './style.css'




let x1 = Date.now()




// await fetch('https://jsonplaceholder.typicode.com/photos')


// const url = fetch('http://localhost:5173/Homework/')

const persons = document.querySelector('#persons') as HTMLDivElement



// let formData = new FormData([form])


// const name = document.querySelector('#name') as HTMLInputElement
// console.log(name);

// name.addEventListener('click', () => {

// })


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



// let massive = [3, 7, 2, 6, 9]
// console.log(massive.forEach((el) => {

// }))
// console.log(massive);


// massive.push(8)
// console.log(massive);

// massive.pop()
// console.log(massive);

// massive.unshift(555)
// console.log(massive);

// massive.shift()
// console.log(massive);


// let checkMap = massive.map((el) => {
//     return el * el
// })
// console.log(checkMap);

// console.log(Date().split(' ').join('___'));

// let cherry = 'cherryyyyy'
// console.log(cherry);




// let nums = [3, 5, 7, 9]
// nums.forEach((el) => {
//     return console.log(el * 5);
// })
// console.log(nums);

// let mapNums = nums.map((el) => {
//     return Math.floor(Math.random() * el)
// })

// console.log(mapNums);

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




// const My = {
//     name: 'Vova',
//     age: 33
// }
// console.log(My);
// const { age } = My
// console.log(age);


// const changeMy = {name}
// console.log(changeMy);






let temperature = 25
console.log(typeof temperature);


  



//! Рестуктуризация объектов
// const Mike = {
//     age2: 45,
//     village: 'Myrtle Beach',
//     country: 'USA',
//     greet: function hey() {
//         "Hello, I'm " + age2
//     }
// }
// console.log(Mike);

// const { age2, village } = Mike
// console.log(age2);
// console.log(village);
// console.log();



// const { greet } = Mike
// console.log(greet);







// let vegetables = ['tomato', 'potato', 'cucumber']
// console.log(vegetables);

// const [firstVeg, secondVeg, thirdVeg] = vegetables
// console.log(firstVeg);



 


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

newMass.forEach((el) => {
    if (el == 'а') {
        accE += 1
    }
    else if (el == 'е') {
        accE2 += 1
    } else {
        // accE3+=1

    }

})
console.log(`В данной строке:
    букв'а' = ${accE} 
    букв 'е' = ${accE2},
    оставшиеся буквы = ${newMass.length - accE2 - accE} `);



// let mass = ['Дима', 'Петя', 'Даша', 'Вера']
// let [pers1, pers2, pers3, pers4] = mass
// console.log(pers3);



// let array = {
//     Дима: 17,
//     Петя: 19,
//     Даша: 15,
//     Вера: 16
// }
// let { Дима, Петя, Даша, Вера } = array
// console.log(Петя);


const newUser = {
    name: 'Petya',
    age: 25,
    city: 'Moscow'
}
console.log(newUser);

const addNewUser = ({ name, age }) => {
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

    accumulation += i
}

console.log(accumulation);



//! через forEach сделать граффик для массива




let graf = document.querySelector('#diagram') as HTMLDivElement
graf.addEventListener('click', (event) => {
    const graffics = event.target as HTMLDivElement
    let x = graffics.style

    // console.log(graffics.dataset.set);
    if (x.backgroundColor == 'blue') {
        x.backgroundColor = 'orange'
    } else {
        x.backgroundColor = 'blue'
    }

    let growHeight = 100 + graffics.dataset.set * 10
    let acc = 0
    setTimeout(() => {
        graffics.style.height = growHeight + 'px'
        graffics.style.transition = 1 + 's'
        // graffics.innerHTML = graffics.style.height

        const intervalId = setInterval(function func() {

            acc++
            if (acc >= growHeight) {
                acc = growHeight
            }

            graffics.innerHTML = acc


        }, 4);

        setTimeout(() => {
            clearInterval(intervalId)
        }, 2000);

    }, 1000)
    // graffics.style.color = 'white'
    // console.log(graffics.style.height+'px');

})



const intervalId = setInterval(function () {
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

let findO = letterO.split('').forEach((el) => {
    if (el == 'о') {
        accO += 1
    }
})

console.log(accO);


 
 
 


//! дест массива
const checkCity = ['Moscow', 'Sochi', 'Peterburg']
const [first1, second2, third3] = checkCity
// ! после const идут скобки и значения в них без кавычек, 
// ! после скобок снова имя переменной
console.log(first1);

 



 
 
//! дест функции
 
const user =  {
    name: 'Vova',
    age:33,
    answer: ''
}
const checkUSer=({name, answer})=>{
    if(!answer) {
         console.log(`у пользователя ${name} нет комментариев`)
    } else if (answer<=10){
         console.log(`у пользователя ${name} мало (${answer} комментариев)`) 
    } else {
         console.log(`у пользователя ${name} много (${answer} комментариев)`)
    }
    
}

checkUSer(user)


//! тернарный оператор

// let y = 14
// let h = 12
// h>y?console.log('"h" будет больше'):console.log('"y" будет больше')





//! дест объекта
let fruit = {
    apple: 'яблоко',
    banana: 'банан',
    orange: 'апельсин'
}

let {apple, orange} = fruit
console.log(orange);
console.log(apple);

//! дест массива

let vegetable = ['cabage', 'potato', 'tomato' ]

let [veget1, veget2, veget3] = vegetable
console.log(veget1);


//! дест функции
let eats = ({apple, banana, orange})=>{
    console.log(apple);
    console.log(banana);

}

eats(fruit)


console.log(new Date().getMonth());


let accI=0

for (let i = 1; i<=5; i++) {
    
    accI+=i
    console.log(i);
    
}
console.log(accI);



let filterNumber = [5, 2, 8, 12, 15, 3, 23]

//!  Создайте функцию, которая принимает массив чисел 
//!  и число. Эта функция должна умножать каждый элемент 
//!  массива на входящее число и выводить на экран. Нужно 
//!  задать значение по умолчанию для массива и для числа.

    console.log('__________');
    

        let summDigitals = filterNumber.map ((el)=> {
            return el*10
        })
    
        console.log(summDigitals);

    
    


    console.log('__________');

//! найти числа больше 10

let newFilterNumber = []  as any
filterNumber.map((el)=> {
    if (el>10) {
        newFilterNumber.push(el)
        return 
    }
})
console.log(...newFilterNumber);


//! сложить элементы в новом массиве

// let accNewFilter = 0

// newFilterNumber.forEach((el)=> {
//     accNewFilter+=el
// })
// console.log(accNewFilter);




//    Необходимо выполнить такие задачи с помощью деструктуризации:
//    ■ Записать в переменные все поля объекта и вывести 
//    их на экран:
//    ■ Записать в переменные все поля объекта, кроме полей 
//    age и course.
//    ■ Записать в переменные поля name, surname и age. Так 
//    же, если какое-либо значение отсутствует, то в переменную должно записываться значение по умолчанию.

let student = {
    Nickname: 'Ivan',
    surname: 'Petrov',
    subjects: ["English", "History", "Marketing"],
    course: 3
   } 

console.log(student);
      
 let stud = ({Nickname, surname, subjects, course})=>{
     console.log(Nickname);
     console.log(surname);
     console.log(subjects);
     if (course==3){
         console.log(`Вам осталось учиться ${5- course} года`);

     }

 }
stud(student)


//! Задача 1. Определить сколько раз каждый элемент встречается в массиве.

// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

// console.log(fruits);

// let accum1 = 0
// let accum2 = 0 
// let accum3 = 0

// fruits.forEach((el)=> {
//     if (el=='kiwi') {
//         accum1+=1
//     } else if (el =='apple') {
//         accum2+=1
//     } else {
//         accum3+=1
//     }
// })

// console.log(`киви ${accum1}, apple ${accum2}, orange ${accum3} раз`);

//! Задача 2. Создать массив который содержит только уникальные 
//! значения исходного массива.

// let uniqItem = fruits.map(el=> {
//     console.log(el);
    
//     if (el!=el) {
        
//     }
//     return
// })

// console.log(uniqItem);


//! На выходе требуется получить объект, где ключ - возраст, 
//! а значение - массив студентов, которые относятся
//!  к данной возрастной группе.

// const students = [
    //     { name: 'alex', age: 20 },
    //     { name: 'mike', age: 24 },
    //     { name: 'masha', age: 20 },
    //     { name: 'stas', age: 18 },
    //   ];
    // console.log(students);
    
    // students.forEach(el=> {
        //     if (el.age==20) {
            //         console.log(el);
            //     } else if (el.age==24) {
                //         console.log(el);
                //     } else {
                    //         console.log(el);
                    
                    //     }
                    // })
                    
                    
                    // '20': [{ name: 'alex', age: 20 }, { name: 'masha', age: 20 }],
                    // '24': [{ name: 'mike', age: 24 }],
                    // '18': [{ name: 'stas', age: 18 }]
                    
                    
                    
                    //! рест массива
                    
                    // let col = [ 'puple', 'blue', 'white']
                    // let [one1, two2, three3] = col
                    
                    // console.log(two2);
                    // console.log(three3);
                    
                    //! рест объекта
                    // let day = {
                        //     понед: 'первый',
                        //     вторник: 'второй',
                        //     среда: 'третий'
                        // }
                        // let {понед, вторник, среда} = day
                        // console.log(понед);
                        // console.log(среда);
                        
                        //! рест функции
                        
                        // let funcs = ({понед, вторник})=>{
                            //     console.log(понед);
                            //     console.log(вторник);   
                            // }
                            
                            // funcs(day)
                            
                            
                            
                            
                            //! выучить методы массивов 
                            
                            //! выучить методы объектов
                            
                            
                            
                            
const button = document.querySelector('#createDiv') as HTMLDivElement
const button2 = document.querySelector('#deleteDiv') as HTMLDivElement
const container = document.querySelector('#containDiv') as HTMLDivElement

let sum = 0
button.addEventListener('click', ()=> {
    sum++
    // let x = Math.random().toFixed(2)
    let newDiv = `<div id="settings"> ${sum}</div>`
    container.innerHTML += newDiv

})


button2.addEventListener('click',()=> {
    container.childNodes[0].remove()
})  




    let accAge = 0
    
    const workers = [
        {name: 'Anna', age:23},
        {name: 'Masha', age:33},
        {name: 'Katya', age:27},
        {name: 'Vika', age:29},
        {name: 'Sveta', age:36},
    ]
    
    const totalAge = workers.reduce((agess, workers)=>agess+=workers.age,0)
    console.log(totalAge);


const youngestPerson = workers.map(el=> {
        return el.age
}) 
console.log(Math.min(...youngestPerson));
 
  

console.log('-----------');

try {
    
    console.log(_.min(youngestPerson));
} catch (error) {
    console.log(error.message);
    console.log(ReferenceError());
    
}



    //! найти Катю
    //! find......
    
const cate = workers.find(cate=> cate.name === 'Katya')
console.log(cate);

const cateIndex = workers.findIndex(cate=> cate.name === 'Katya')
console.log(cateIndex);



    
    //! сумма возрастов
    
    //! 1
    workers.forEach(el=>{
        accAge += el.age
    })
    console.log(accAge);
    console.log('____________');
    
    
    //! 2
    let accAge2 = 0
    for (let i = 0; i < workers.length; i++) {
            accAge2+=workers[i].age

    }
console.log(accAge2);

    //! 3 reduce...........
    let accAge3 = workers.reduce((total, worker)=>total+worker.age, 0)
    console.log(accAge3);
     








//! оставить старше 25  

    //! filter..............

let more30Age = workers.filter(el=> {
    if (el.age>=30) {
        return `${el.name}`
    }
})

console.log(...more30Age);

const checkMetod = []

for (let i = 0; i < workers.length; i++) {
    if(workers[i].age>=30) {   
     checkMetod.push(workers[i])
    }
}

console.log(...checkMetod);



console.log('___________');


// businessmans.forEach(age=> {
//     if(age.age>=30) {
//         console.log(age);
//     }
// })

// let lettersInName = businessmans.map (letter=>{
//     if(letter.name.length==4) {
//         return `${letter.name} имеет 4 буквы`
//     }else {
//         return letter.name = ''

//     }
// })
// console.log(...lettersInName);










const businessmans = [
    {name: 'Anna', age:23, budget:30000},
    {name: 'Masha', age:33, budget:50000},
    {name: 'Katya', age:17, budget:45000},
    {name: 'Vika', age:16, budget:32000},
    {name: 'Sveta', age:36, budget:47000},
]

//! (forEach, map, filter, reduce, find, findIndex).


//! сложить бюджет через forEach

let allBudget = 0
businessmans.forEach(el=>{
    allBudget+=el.budget
})
console.log(allBudget);


//! индексация бюджета каждому отдельно на 10% через map

let newBudget = businessmans.map(budget=> 
{
    return Math.round(budget.budget*1.1)
})
console.log(newBudget);

//! Поиск по списку несовершеннолетних методом filter

let underAge = businessmans.filter(el=> {
    if(el.age<18) 
        return el
    
})

let names = underAge.map(el=> {
    return el.name
    
})
console.log(names);



// console.log(...underAge);

// console.log(JSON.stringify(underAge));



    // //! Поиск по списку несовершеннолетних методом filter
    
    // businessmans.filter(el=> {
    //     if(el.age<18){ 
    //         console.log(el.name)
    //     }
    // })
 
    
    //! сложить бюджет через reduce
    
    let budgets = businessmans.reduce((money, el)=> money+el.budget,0)
    console.log(budgets);








    //! (forEach, map, filter, reduce, find, findIndex).
    let car = [
        {brand: 'Kia', price:1200000, mileage:100000},
        {brand: 'Mazda', price:6000000, mileage:860000},
        {brand: 'Bmw', price:1800000, mileage:25000},
        {brand: 'Volkswagen', price:2300000, mileage:120000},
        {brand: 'Jeep', price:1500000, mileage:100000},
        ]

  

// вывести бренды через forEach

let brands = [] as any
car.forEach(el=> {
    brands.push(el.brand)
})
console.log(brands);

// через filter вывести массив с машинами дешевле 1.5 млн

let shortBrands = [] as any
car.filter(symbol=> {
    if (symbol.price<=1500000) {
        shortBrands.push(`${symbol.brand} : ${symbol.price}`);
   }
})
console.log(shortBrands);


// посчитать стоимость всех машин через reduce

let totalPrice = car.reduce((total, car)=>total+=car.price, 0)
console.log(totalPrice);


// find Volkswagen
let findCar = car.filter(el=> {
    if (el.mileage==100000)
    return el.brand
})
console.log(...findCar);
// сложить обе стоимости

let carsPrice = findCar.reduce((carsPrice, el)=>carsPrice+=el.price,0)
console.log(carsPrice);


let bothPrice = 0
findCar.forEach((el)=> bothPrice+=el.price)
console.log(bothPrice);



let index = car.find(el=> el.brand === 'Jeep')
console.log(index?.brand);

let fIndex = car.findIndex(el=> el.brand === 'Jeep')
console.log(fIndex);










// let nums = [5, 2, 6, 7, 4, - 5, - 9, 8]

// //! 1-ый способ
// let accnums = 0 
// nums.forEach(num=> {
//     accnums+=num
// })
// console.log(accnums);

// //! 2-ой способ
// let summNums = nums.reduce((summ, el)=>summ+=el,0)
// console.log(summNums);

// //! 3-ой способ

// let summnum = 0 
// for (let i = 0; i < nums.length; i++) {
//     summnum+=nums[i]    
// }
// console.log(summnum);





let date = '2025-12-31'
console.log(date.split('-').reverse().join('/'));



let products = {     
    "15": {"category": "fruit"},
    "2": {"category": "fruit"},
    "31": {"category": "fruit"},
    "4": {"category": "vegetable"},
    "5": {"category": "vegetable"},
    "65": {"category": "vegetable"}
}


let newMas = []
for (const el in products) {
    if (el!=='fruit') {
        newMas.push(el)
        
    }
}
console.log(...newMas);







 //! (forEach, map, filter, reduce, find, findIndex).
 


 //! (forEach, map, filter, reduce, find, findIndex).
 let bus = [
    {brand: 'Kia', price:1200000, mileage:100000},
    {brand: 'Mazda', price:6000000, mileage:860000},
    {brand: 'Bmw', price:1800000, mileage:25000},
    {brand: 'Volkswagen', price:2300000, mileage:120000},
    {brand: 'Jeep', price:1500000, mileage:100000},
    ]


// в массив по отдельности вывести пробек и суммарный потом

let miles = 0 
let milesArray = [] as any
bus.forEach(el=> {
    miles+=el.mileage
    milesArray.push(el.brand + ' : ' + el.mileage)    
})

console.log('суммарный километраж: ' + miles, milesArray);



const name = ['Мария', 'Елена', 'Ирина', 'Светлана', 'Есения'];
const job = ['teacher', 'lawyer', 'journalist', 'doctor', 'seller'];


for (let i = 0; i < 5; i++) {
    console.log(name[i]+' - '+job[i])
}









//! (forEach, map, filter, reduce, find, findIndex).
let aircrafts = [
    {brand: 'Kia', price:1200000, mileage:100000},
    {brand: 'Mazda', price:6000000, mileage:860000},
    {brand: 'Bmw', price:1800000, mileage:25000},
    {brand: 'Volkswagen', price:2300000, mileage:120000},
    {brand: 'Jeep', price:1500000, mileage:100000},
]












// // Самое большое число

// // Второе самое большое число
// nums.forEach(el=>{
// if (el ==Math.max(...nums)){
// console.log('наибольшее число = '+ el);

// // } else if(el ==Math.max(...nums)){
//     //     console.log('наибольшее число = '+ el);
    
// } else {
//     console.log('наименьшее число = '+ el);

// }

// })


const array = [21, 19, 34, 28, 32];
let arrX = [...array].sort().reverse()
console.log(arrX[1]);




//  найти предпоследний наибольший
console.log([...array].sort()[array.length-2]);




// и наименьший элемент
console.log([...array].sort().reverse()[array.length-2]);
console.log('_______');




let nums = [5, 2, 3, 6, 4, - 5, - 9, 8]
let addMeansInNums = [5, 7, 9]
console.log(`${addMeansInNums}, ${nums}`);

let xx = []
xx.push(3)
  
console.log(xx);
console.log(typeof xx);



console.log('_______');

let numsY = [...nums].sort().reverse().splice(1, 1)
console.log(Math.max(...numsY));

let numsX = Math.max(...numsY)

console.log(typeof numsY);
console.log(typeof numsX);



// let numsX = [...nums.splice(Math.max())]
// console.log(numsX);
// console.log(typeof numsX);



let check = [
    {name: 'Masha', age: 23},
    {name: 'Katya', age: 27},
    {name: 'Natasha', age: 33},
    {name: 'Sveta', age: 36}
]
//! старше 30 

    //! первый способ
    const zzz = check.filter(age=> {
        if(age.age>=30) {
            return age.name
        }
    })
    console.log(...zzz);
    
    //! второй способ
    let zzzName = zzz.map(el=> {
        return el.name
    })
    console.log(zzzName);
    
    
    //! третий способ
    let massName = []

    for (let i = 0; i < check.length; i++) {
        if(check[i].age>=30) {
            massName.push(check[i].name);
        }
}
console.log(massName);

// одна буква в секунду выводилась с имени Natasha

const nameN = document.querySelector('#name') as HTMLDivElement



let letterName = 'Добро пожаловать'

let greetArray = letterName

let timer = 0

let stopInterval = setInterval(() => {
    nameN.innerHTML +=greetArray[timer]
    timer+=1
    if (timer==letterName.length) {
        clearInterval (stopInterval)
    }
    
}, 200);
 

let arrPush = [] as any
arrPush.push(letterName + ' друг')
console.log(arrPush);


let namesInСycle= [
    {name: 'Masha', age: 23},
    {name: 'Katya', age: 27},
    {name: 'Natasha', age: 33},
    {name: 'Sveta', age: 36}
]

let kia = {brand: 'Kia', price:1200000, mileage:100000}

//! for of для массивов
    for (const key of namesInСycle) {
    console.log(key.name);
}


//! for in для объектов
    for (const key in kia) {
    console.log(key, kia[key]);
}



let xyz = {
    x:10,
    y:12,
    z:5
}

for (const key in xyz) {
    console.log(key + ' =', xyz[key]);
    
}


console.log(Object.values(xyz))
console.log(Object.keys(xyz))



Object.values(xyz).forEach(el=> {
    console.log( el)
})

Object.keys(xyz).filter(el=> {
    console.log( el)
})









Object.values({name:'Vova', age:33}).forEach (el=>{
    console.log(el);
    
})





let d = 5.456456
console.log(d.toFixed(2));



// указать дату рождения и через reduce вычислить сумму чисел
//  и потом повторно сложить между собой общую сумму
 



let dateObBirth = '28.03.1991'

let summNumbers = 
dateObBirth.split('.').reduce((acc,el)=>acc+=+el,0)
.toFixed().split('').reduce((acc,el)=>acc+=+el,0)
console.log(summNumbers);





let str = '123'
console.log(typeof str);
//! преобразование строки в число
console.log(typeof Number(str));





let buttons = document.querySelectorAll('#btn') 
buttons.forEach(el=>{
    el.addEventListener('click', (event)=> {
        const btn = event.target as HTMLDivElement
        const btn2 = btn.dataset.set as any
        if (btn2==1) {
            console.log('Вы нажали кнопку 1');   
            btn.style.backgroundColor = 'green'
        } else if(btn2==2){
        console.log('Вы нажали кнопку 2');   
        btn.style.backgroundColor = 'yellow'
        } else if(btn2==3){
        console.log('Вы нажали кнопку 3');   
        btn.style.backgroundColor = 'red'
    } else {
        console.log('Вы нажали на div'); 
        btn.style.backgroundColor = 'gold'
    }
    setTimeout(() => {
        btn.style.backgroundColor = 'rgb(9, 132, 132)'
    }, 500);
})
})


 


let stuff = [
    {name: 'Katya', age: 27, salary: 50000},
    {name: 'Natasha', age: 33, salary: 80000},
    {name: 'Masha', age: 23, salary: 32000},
    {name: 'Sveta', age: 36, salary: 95000},
]
//! посчтитать общую зарплату и добавить подоходный налог в 30 процентов
 
let scoreSalary = stuff.reduce((score, el)=>(score+=el.salary), 0)
console.log(scoreSalary*1.1);
console.log(scoreSalary*1.1);

//! Проверить у всех ли сотрудников зп ниже 100 тысяч
let cheсkSalary = stuff.every(el=> el.salary<100000) 
console.log(cheсkSalary);

let cheсkSalary2 = stuff.some(el=> el.salary>50000) 
console.log(cheсkSalary2);

//! Найти сотрудника с наименьшей зарплатой и увеличить оклад на 20.000
let salaries = stuff.map(el=>{
    return el.salary
})
console.log(salaries);

let smalestSalary = Number(salaries.sort().splice(0,1)) + 20000 

console.log(smalestSalary);











let stuffs = [
    {name: 'Katya', age: 27, salary: 50000},
    {name: 'Natasha', age: 33, salary: 80000},
    {name: 'Masha', age: 23, salary: 32000},
    {name: 'Sveta', age: 36, salary: 95000},
]

//! Найти сотрудника с наибольшим количеством символов в имени
let longestName = stuffs.map(el=>el.name.length).sort().pop()
console.log(longestName);

stuffs.map(el=>{
    if (longestName== el.name.length) {
        return console.log(el);
    }
})





























//! Найти Катю через find
let namess = stuffs.find(el=>el.name=='Katya')
console.log(namess.name)




console.log('_______________________________________');





let massNums = [1,2,3,4,5]

let massNumsReduce = massNums.reduce((acc, el)=> acc*el)
console.log(massNumsReduce);


let massNumsReduce2 = massNums.reduce((acc, el, index)=> {
    acc.push(el*3)
    return acc
},[])
console.log(massNumsReduce2);



let massNumsMap = massNums.map(el=>{ return el+10 })
console.log(massNumsMap);

let massNumsSome = massNums.some ((el)=>el>3)
console.log(massNumsSome);

let massNumsEvery = massNums.every(el=> el>=1)
console.log(massNumsEvery);

let massFind = massNums.find(el=>el==2)
console.log(massFind);

let massFindIndex = massNums.findIndex(el=>el==2)
console.log(massFindIndex);

console.log(massNums);

massNums.push(17)
console.log(massNums);

massNums.unshift(10, 12)
console.log(massNums);

massNums.pop()
console.log(massNums);

massNums.shift()
console.log(massNums);






//! возвести элементы в степень через reduce


massNums.shift()

let powerOfNumber = massNums.reduce((acc,el)=> {
    acc.push(el*el)
    return acc
},[])
console.log(powerOfNumber);





// рест массива
const cities = ['Sochi', 'Moscow','Peter']
let [first, second, third] = cities
console.log(first);





// let day = {
//   понед: 'первый',
//   вторник: 'второй',
//   среда: 'третий'
//  }
//  let {понед, вторник, среда} = day
//  console.log(понед, среда);
 











 
 
 // посчитать количество букв
 let rest ='архитектурный стиль для сложных интернет сервисов'
 let scoreRest = rest.split('')
 
 let scoreLetters = [] as any
 
 scoreRest.map((el)=> {
     if(!scoreLetters[el]){
         scoreLetters[el]=1
         return scoreLetters[el]
        } else {
            scoreLetters[el]+=1
            return scoreLetters[el]
        }
    })
    console.log(scoreLetters);
    
    
    
    
    const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
    
    // Задача 1. Создать массив который содержит только уникальные 
    // значения исходного массива.
    
    let uniqFruits = {} as any
        fruits.filter(el=>{
            if(uniqFruits[el]=1){
                 return uniqFruits[el]
                
            }
        })    
    console.log(uniqFruits);
    



    
    
    
    
    // Задача 2. Определить сколько раз каждый элемент встречается в массиве.
    // Имеется исходный массив:
    
    let scoreFruits = [] as any
    fruits.map ((el)=> {
        if (!scoreFruits[el]) {
            scoreFruits[el]=1
            return scoreFruits[el]
        } else {
            scoreFruits[el]++
            return scoreFruits[el]
        }
    })
    console.log(scoreFruits);

    


    //! stringify - из объекта в строку

    const apples = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
    console.log(JSON.stringify(apples))
        console.log(apples);







//! или {} вместе с return 
//! или опускаем 








 
// let arr = Array(5).fill(1)
// console.log(arr)


let arr = Array(3).fill(0).map(() => {return Array(3).fill(0)});
console.log (...arr)



const newArr = [1, 8, 2, 2, 4, 5, 6, 6]

// общая сумма элементов
const summNewArr = newArr.reduce((acc, el)=>acc+=el)
console.log(summNewArr);

// или
let newArrAcc = 0
for (let i = 0; i < newArr.length; i++) {
    newArrAcc+=newArr[i]
}
console.log(newArrAcc);


// наибольшее число в массиве
// let max = newArr[5]
// for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i]>max) {
//         max=newArr[i]
//     }
// }
// console.log(max);

// или
console.log(Math.max(...newArr));

// найти четвертое число в массиве

const fourthNumber = newArr.sort().splice(newArr.length-4, 1)
console.log(fourthNumber);

const pushMaxNumber = []
pushMaxNumber.push(Math.max(...newArr))
console.log(pushMaxNumber);


// проверка слова на палиндром
// let palindrom = 'а роза упала на лапу азора'
// console.log(palindrom); 



// let checkPalindrom = palindrom.split('').reverse().join('').split(' ').join('') 
// console.log(checkPalindrom);

// if (palindrom.split(' ').join('')==checkPalindrom) {
//     console.log('Данная фраза палиндром');
// } else {
//     console.log('Это не палиндром');
    
// }


const newArr2 = [1, 8, 2, 2, 4, 5, 6, 6]

const maxNum = newArr2.reduce((acc, el)=>Math.max(acc, el),1 )
console.log(maxNum);


const arr3 = ['red', 'yellow', 'white', 'green', 'red', 'yellow', 'red', 'yellow']
console.log(arr3);

let colorNumber = [] as any

let arr4 = arr3.forEach(el=> {    
    if(!colorNumber[el]) {
        colorNumber[el]=true
    }
})

console.log(arr4);




console.log(colorNumber);


let temp = 15
switch (temp) {
  case 15:
    console.log('Прохладно');
  break;
  
  case 20:
    console.log('Приемлемо');
  break;
  
  case 25:
    console.log('Тепло');
  break;
  
  default:
    console.log('Данные вне диапазона');        
}
                
                
const newArr3 = [1, 8, 2, 2, 4, 5, 6, 6]
console.log(newArr3[0]);

newArr3[0]==1 ? console.log('верно') : console.log('Неверно');


textInTest.innerHTML += ' ' + Date().split(' ').splice(1,1)

const arr5 = ['red', 'yellow', 'white', 'green']
let [an, bn, cn, dn] = arr5





// Найти нечётные месяцы
// let oddMounzth = Object.keys(mounth)

// for (let i = 0; i < oddMounth.length; i++) {
//      if (i%2==0) {
//         console.log(oddMounth[i]);        
//      }
// }


// for (const key in mounth) {
    
//     console.log(key, mounth[key]);
    
// }


let mounth = {
    январь: 'первый',
    февраль: 'второй',
    март: 'третий',
    апрель: 'четвёртый',
    май: 'пятый',
    июнь: 'шестой',
    июль: 'седьмой',
}

// let days = {
//     день: 'воскресенье'
// }
// console.log(days.день);


// let dateDate = {
//     ...mounth,
//     ...days
// }
// console.log(dateDate);



let dateDate2 = [] as any
// dateDate2.push(Object.values(mounth).concat(Object.values(days)))
console.log(...dateDate2);
console.log(typeof dateDate2);

import {nam,surname, mounthMounth, multNumbers, objObj } from "./name.ts";
nam()
surname()
console.table(mounthMounth);


multNumbers(7,9)

objObj
let splObj = objObj.ответ.name.split('').map(el=> {
    
    if (el=='u') {
        el = 'UUU'
    }
    return el
})
console.log(splObj.join(''));














import loc from './locations.ts'

console.log(loc);


class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0

    }

    upvote(){
        this.votesQty+=1
    }

    
}

const firstComment = new Comment('first comment')

firstComment.upvote()
console.log(firstComment);









 

class Modem {
    constructor (link) {
        this.link = link
        this.text = text
    }
    action () {
        console.log('Подключено');
        
    }
}
const firstModem = new Modem('first modem')

console.log(firstModem);
















class Rocket {
    constructor(name) {
        this.name =name
        this.oil= 'oil'
    }
    launch(){
        console.log('Запуск');
    }
    static location(){
        console.log('слово static не наследуется');
    }
}

const xyy = new Rocket('первая ракета')
const xyy2 = new Rocket('вторая ракета')

console.log(xyy.hasOwnProperty('oil'))
console.log(xyy.name);

console.log(xyy.launch()==xyy2.launch());
Rocket.location()









class Pets {
    constructor(name){
        this.name = name
        this.color = 'white'
        this.habbit = 'eat'
    }
    static funct() {
        console.log('статика');
        
    }
    static weight(potato, meat) {
        return console.log(potato + meat + ' грамм')
    }

    feed() {
        console.log('Кормёжка ' + this.name);
    }
}

const catty = new Pets ('Кошка Кэтти') 
const doggy = new Pets ('Собачка Чип') 

catty.feedCheck = 'Выполнено'

console.log(catty);
doggy.feed()
catty.feed()

console.log(doggy);
Pets.funct()
Pets.weight(200, 300)

console.log(doggy.hasOwnProperty('color'));

console.log('_______________');


//! Расширение класса
class extraPet extends Pets {
    action() {
        console.log('Погладить животное');
    }
}
console.log(extraPet.prototype.action());

console.log('_______________');



let pers = [
    { name: 'Кошка Кэтти', salary: 85000},
    { name: 'Собачка Чип', salary: 15000},
    { name: 'Котик мяу', salary: 65000},
    { name: 'Собачка Гав', salary: 55000},
]




//! посчитать общую, вывести мин, макс и среднюю

let persSumm2 = pers.reduce((acc, el)=>acc+= el.salary, 0)
console.log(persSumm2);

let minSalary = [] as any
pers.filter(el=> {
    minSalary.push(el.salary)    
})
console.log(minSalary.sort().slice(0,1));



let minSalary2 = pers.map(el=>{
    return el.salary
})
console.log(Math.min (...minSalary2));

// const youngestPerson = workers.map(el=> {
//     return el.age
// }) 
// console.log(Math.min(...youngestPerson));


console.log(...pers);



console.log(minSalary.sort().slice(minSalary.length-1));

let accSalary = 0
pers.map(el=>{
    accSalary+=el.salary
    return accSalary
})
console.log(`средняя зарплата животных = ${accSalary/4}`);


// let persSumm = []
// pers.forEach(el=> {
//     persSumm.push(el.salary)
// })
// console.log(persSumm);

let persSumm = 0
pers.forEach(el=> {
    persSumm+= el.salary
})
// console.log(persSumm);













class Message {
    constructor(type){
        this.type = type
        this.media = type
        this.memory = '5 megabate'
    }
    write(){console.log('Вы напечатали сообщение')}
    static send() {return + 'Вы отправили сообщение'}
}

const audioMessage = new Message ('аудиосообщение')
audioMessage.write()

console.log(audioMessage.hasOwnProperty('memory'));
console.log(Message.hasOwnProperty('write'));




// console.log(Message.send());



class Planet {
    constructor(name){
        this.name = name
        this.system = 'Solar system'
        this.galaxy = 'MilkyWay'
    }
    action(){
        console.log(this.name + ' has rotation');
    }
}

const Earth = new Planet('Земля')
console.log(Earth);





const jjj = [ 2, 4, 6, 5, 9]
console.log(jjj);

const jjjPush = []
jjj.forEach (el=> {
    if (el>5) {
        jjjPush.push(el)
    }
})

console.log(jjjPush);



//!     !!!     Методы массивов    !!!
//! .sort() - сортирует по возрастанию
//! .reverse() - сортирует в обратном порядке
//! .splice - удаляет элементы (1 - индекс, 1 -  количество)
//! .every - true если все элементы соответствуют 
//! .some - true если хотя бы один элемент соответствует

//! forEach - ничего не возвращает (undefined) 
//! map - возвращает новый массив того же размера в отличие от forEach
//! toFixed() - преобразует число в строку и округляет при необходимости
//! push - вставляет элементы в конец массива
//! reduce - перебор элеметов массива и возврат новой структуры данных
//! unshift - вставляет элементы вначало массива
//! shift - удаляет элемент из начала массива


let translate = 'border-left-width'

let newArray = translate.split('-').map(el=> {
    return el.slice(0,1).toUpperCase() + el.slice(1);
})
console.log(newArray);


let newWord = JSON.stringify(newArray).split('","').join('')
console.log(newWord.slice(2,3).toLowerCase()+ newWord.slice(3, newWord.length-2));









const world = 'world'
console.log(typeof world);

const moon = JSON.stringify(world)
console.log(typeof moon);



const promise = new Promise((resolve, reject)=> {

})
console.log(promise);



// let as = 8
// console.log(as);

// let bs = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let as =99
//         console.log(as);
//     }, 2000);
// })
// bs.then(()=> {
//     console.log(as);
    
// })


// let prom = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//             resolve('Выполнено')
//     }, 2000)
// })
// console.log(prom);

// // prom.then(onFulfilled, onRejected) 

// console.log('___________');


// let catchError = new Promise((resolve,reject)=>{
//     // throw new Error("Ошибка");
//     setTimeout(()=>{
//         resolve('обработана')
//     },1000)

//     // reject будет проигнорирован
//     setTimeout(()=>{
//         reject('произошла ошибка')
//     },2000)
// })

// console.log(catchError.catch())

// catchError.then(result=>console.log('выполнено успешно, '+ result))


// console.log(catchError);








// let res = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         resolve('обработано')
//     }, 1000);
// })
// res.then(el=>console.log('выполнено ' + el))

// console.log(res);






// const f = new Promise((resolve,reject)=> {
//     resolve ('повторное выполнение')
//     reject ('повторное НЕ выполнение')
// })

// console.log(f);

// f.then((el)=>{
//     console.log(el+ ' hhh');
// })
// .catch((el)=> {
//     console.log(el + ' НЕ выполнилось');    
// })


// let checkProm = new Promise((resolve,reject)=> {
//     resolve('успешно')
//     reject ('не выполнено')
// })

// checkProm.then(el=>{
//     console.log(el)
// })
// .catch(el=> {
//     console.log(el);
// })



//! 1 пример
// const asyncFn = async ()=> {
//         return 'success'
// }

// asyncFn()
//     .then(el=> console.log(el))


//! найти наибольше число
let massive = [
    [1,2,3],
    [7,2,9],
    [8,4,6],
]
console.log(...massive);
console.log('__________');


let numms = [] as any

massive.forEach(el=> {
    numms.push(Math.max(...el))    
})

console.log(numms);
console.log(Math.max(...numms));

let person10 = {
    name: 'John',
    age: 31,
    'Russian Federation': 'country'
}


// console.log(person10==person11);

// person10.job = true
// console.log(person10);

// delete person10.age
// console.log(person10);

// person10.name = 'Dima'
// console.log(person10['name']);
// console.log(person10.name);
// console.log(person10['name']==person10.name)


// console.log(person10['Russian Federation'])

let person11 = {
    name: 'John',
    age: 31,
    'Russian Federation': 'country'
}
console.log(person11);

// let y = prompt ('что вы хотите узнать о' + JSON.stringify(person11),'Введите данные')
    
// console.log(person11[y]);

// Object.keys(person11).forEach(el=> {
//     if(y=='name' || y=='age' || y=='Russian Federation') {
//         console.log(person11[y])
        
//     }else {
//         console.log('данные некорректны');
        
//     }
    
// })

// let writeFruitss = prompt('введите данные','apple')

// let fruitss = {
//     [writeFruitss]: 5,
// }

// console.log(fruitss.apple);



// Объекты
// 1. Написать функцию, которая принимает строку и выводит 
// статистику о ней: количество букв, количество цифр и 
// количество других знаков.


console.log('34534');

function showSymbols(str) {
    str = str.toLowerCase() // переводит буквы в нижний регистр
    let res= {
        letter: 0,
        number: 0,
        symbol: 0,
    }
    for (const el of str) {
        if (el>='а' && el<='я') {  // подсчёт кирилицы
            res.letter++
        }else if (el>='a' && el<='z') {  // подсчёт латиницы
            res.letter++
        }else if (el>='a' && el<='z') {  // подсчёт латиницы
            res.letter++
        }else if (el>='0' && el<='9') { // подсчёт чисел
            res.number++  
        } else {  // подсчёт символов
            res.symbol++
            console.log(el);
        }
    }
    


    console.log(res);
    return str
}

showSymbols('ВЕчерsdfgsdf YUGYUGYGU добрый 8534534 4572^%^&% @#$');
showSymbols('Привет мой друг')

showSymbols('Компьютер555')


// 1. Запросить у пользователя его возраст и определить, кем он 
// является: ребенком (0–2), 
// подрастающий ребенок(3-11), 
// подростком (12–18), 
// взрослым (18_60)
// пенсионером (60– 90).
// значение вне диапазона

// let age = prompt('Введите возраст')
// if (age>=0 && age<3) {  
//     console.log('Ребенок ' + age); 
// } else if(age>=3 && age<12) {
//     console.log('подрастающий ребенок ' + age); 
// } else if (age>=12 && age<19) {
//     console.log('подросток ' + age); 
// } else if (age>=18 && age<61) {
//     console.log('взрослый ' + age); 
// } else if (age>=60 && age<91 ) {
//     console.log('пенсионер ' + age); 
// } else {
//     console.log('Значение вне диапазона')
// }

// Если автомобиль едет со скоростью меньше 30 км/ч то скорость
// медленная, иначе быстрая

let speed = 3
if (speed<30) {
    console.log('ваша скорость медленная ' + speed);
} else {
    console.log('ваша скорость быстрая ' + speed);
}


// Запросить у пользователя число от 0 до 9 и вывести ему 
// спецсимвол, который расположен на этой клавише (1–!, 
// 2–@, 3–# и т. д)

// оператор if else как правило используется для диапазона значений
// switch используется для конкретного значения

let symbol = 100
 switch (symbol) {
    case 1:
        console.log('!');
        break;
    case 2:
        console.log('@');
        break;
    case 3:
        console.log('#');
        break;
    case 4:
        console.log('$');
        break;
    case 5:
        console.log('%');
        break;
    case 6:
        console.log('^');
        break;
    case 7:
        console.log('&');
        break;
    case 8:
        console.log('*');
        break;
    case 9:
        console.log('(');
        break;
    default:
        console.log('Значение не найдено');
        break;
}


let day = 5
switch (day) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятница');
        break;
    case 6:
        console.log('Суббота');
        break;
    case 7:
        console.log('Воскресенье');
        break;

    default:
        console.log('Введите корректное число');
        break;
}


console.log(typeof '20');
console.log(typeof +'20');

console.log('========================');

// 1. Подсчитать сумму всех чисел в заданном пользователем 
// диапазоне.

let min = 1
let max = 6

let accumulator = 0
console.log('значение ДО = ' + accumulator);

// 1 2 3 4 5 6

for (let i = min; i < max; i++) { // i++ - шаг равен единице по умолачанию
    
    accumulator+=i
    console.log(i + ' шаг');
    

    console.log(accumulator);
    
}

console.log('значение ПОСЛЕ = ' + accumulator);



// 5. Запросить у пользователя пятиразрядное число и 
// определить, является ли оно палиндромом

let palindrom = '12321'
console.log(palindrom);

let checkPalindrom = palindrom.split('').reverse().join('')  

.split('') // метод разделяет строку по символам
.reverse() // метод, переставляющий символы в обратном порядке (то есть наоборот)
.join('') // метод соединяет строку по символам



if (palindrom==checkPalindrom) {
    console.log('число является палиндромом' );
} else {
    console.log('число не является палиндромом' );
}



