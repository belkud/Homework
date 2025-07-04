import { nam, surname } from "./name";

console.clear()


let date1 = new Date()
console.log(date1.getMilliseconds());





//!!!!!!!!!!!!!!!!!!!!!! Функция конструктор !!!!!!!!!!!!!!!!!!!!!!1!

//! Имя функции-конструктора должно начинаться с большой буквы.
//! Функция-конструктор должна выполняться только с помощью оператора "new".

//!!!!!!!!! ВСЕ СВОЙСТВА / МЕТОДЫ ЧЕРЕЗ THIS

function User(name: any, age: number) {
    this.name = name;
    this.age = age;
    this.group = 'web:45';
    this.academy = 'Top';
    this.greeting = function () {
        console.log('help ' + this.name);
    };

}

let user1 = new User('Jack', 20)
console.log(user1)
user1.greeting()



function Dog(Nickname: string, color: string) {
    this.Nickname = Nickname,
        this.color = color
    this.welcome = () => {
        return `Your Nickname is ${this.Nickname} 
and color is ${this.color}
welcome to our party
`}
}

const dog1 = new Dog('Spark', 'orange')
console.log(dog1);
console.log(dog1.welcome());



//! Это и является основной целью конструкторов – 
//! реализовать код для многократного создания однотипных объектов.

//! Функцию, которая является свойством объекта, называют методом этого объекта.







//!!!!!!!!!!!!!!!!!!!!!!!! Классы !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



//! Класс - это шаблон для создания объектов

//! Конструктор - имя метода, специальный метод, который выполняется
//! автоматически при создании экземпляра класса

//! Не надо перечислять через запятую как в синтаксисе объекта


//! МЕТОДЫ ВЫЗЫВАЮТСЯ КАК В ОБЫЧНОМ ОБЪЕКТЕ 




//! let superAir = class Aircraft {}  -  можно присвоить переменной
class Aircraft {
    company = 'Boeng'
    country = 'Russia'
    constructor(model: any, age: number) {
        this.model = model
        this.age = age
        // this.details = {
        //     wheels : 'колёса'
        // }
    }
    fly() { //!  метод без параметров
        console.log(`
    Самолет ${this.model}  
    компании ${this.company} поднимается 
    и у него есть ${this.details?.wheels}
    `);

    }

    //! Как и в литеральных объектах, в классах можно объявлять вычисляемые 
    //! свойства, геттеры/сеттеры и т.д.

    //! set и get нужны для добавления кастомной логики (напр: написать слово с большой буквы)
    //! в сеттере и геттере нижнее подчеркивание




    get age() {
        return `${this._age}`
    }

    set age(value: any) {
        if (value < 10) {
            this._age = value + ' лет, самолет новый';
            //  return
        } else {
            this._age = value + ' лет, самолет старый'
            // return
        }
    }

}
let aircraftFirst = new Aircraft(1777, 15)
console.log(aircraftFirst.age);






// let aircraftSecond = new Aircraft(999, 3)
// console.log(aircraftSecond);
// 
// aircraftSecond.fly()





// console.log(Aircraft == Aircraft.prototype.constructor);

// console.log(Aircraft.prototype.propertyIsEnumerable());













// class Pencil {
//     country = 'Russia'
//     producer = 'Mishka-Mishka'
//     constructor(color:string, weight:any) {
//             this.color = color
//             this.weight = weight
//     }

//     showInfo() { //!  метод без параметров
//         console.log(`
//     карандаш имеет ${this.color} цвет
//     и ширина стержня ${this.weight}
//  `);
// }
//     write(text:any) {
//         console.log(text);

//     }
// }

// let pencil1 = new Pencil('orange', '5px')
// console.log(pencil1);
// pencil1.showInfo()
// pencil1.write('выведем текст')


// console.log(Pencil.prototype.constructor == Pencil);








//!!!!!!!!!!!!! Прототипное наследование, Наследование классов!!!!!!!!!!!!!!!!!!!


//! Таким образом, прототип используется для чтения свойств, 
//! а get и set — для работы с данными при их присвоении и чтении.

let transport = {
    name: 'transport',
    glass: true,
    wheels: true,
    brake() {
        `тормоза работают y ${this.name}`
    },
    gas() {
        return this.fuel = true
    },
    benzin() {
        return this.fuel = false
    },
}

let bus = {
    name: 'bus',
    stear: true,
    drivers: false,
    __proto__: transport, //! первый способ записи 'proto'
}

let car = {
    name: 'car',
    color: 'gray',
    odometr: '100.000',
    __proto__: bus,
} as any

let bycicle = {
    name: 'bycicle',
    cost: 18000,
    color: 'red',
    brake() {
        return `давайте ремонтировать`
    },

} as any

bycicle.__proto__ = car //! второй способ записи

console.log(bus);


//! покажет ТОЛЬКО свойства объекта
// console.log(...Object.entries(car));

//! покажет ещё и унаследованные свойства
// for (const key in car) {
//     console.log(key + ' ' + car[key]);
// }



console.log(car.brake());
console.log(bycicle.brake());

console.log(bycicle.brake);

console.log(car.color);

delete bycicle.color //! удалить свойство
console.log(bycicle.color);

let bycicle2 = bycicle
console.log(bycicle);
console.log(bycicle2);

// transport.__proto__ = bycicle //! циклическое прото (ошибка)


console.log(bycicle.fuel); //! без вызова false


console.log(...Object.entries(bycicle));

// for (const key in bycicle) {
//     let own = bycicle.hasOwnProperty(key)
//     console.log(own ? `собственный ключ: ${key}` : `унаследованный ключ: ${key}`)

// }


console.log(transport.gas());








let note = {
    display: 15.6,
}
// Object.getPrototypeOf(note) = bycicle


let animal = {
    eat: true,
}


function Anim(name: string) {
    this.name = name
}
Anim.prototype = animal

let cat = new Anim('мяу')
console.log(cat);
console.log(cat.eat);







//! Итого
//! В JavaScript все объекты имеют скрытое свойство [[Prototype]], которое является либо другим объектом, либо null.
//! Мы можем использовать obj.__proto__ для доступа к нему (исторически обусловленный геттер/сеттер, есть другие способы, которые скоро будут рассмотрены).
//! Объект, на который ссылается [[Prototype]], называется «прототипом».
//! Если мы хотим прочитать свойство obj или вызвать метод, которого не существует у obj, тогда JavaScript попытается найти его в прототипе.
//! Операции записи/удаления работают непосредственно с объектом, они не используют прототип (если это обычное свойство, а не сеттер).
//! Если мы вызываем obj.method(), а метод при этом взят из прототипа, то this всё равно ссылается на obj. Таким образом, методы всегда работают с текущим объектом, даже если они наследуются.
//! Цикл for..in перебирает как свои, так и унаследованные свойства. Остальные методы получения ключей/значений работают только с собственными свойствами объекта.


let extraAnim = {
    eats: false,
    runs: true,
    toString() {
        return 'что-то делает'
    }
}

function Fox(name: string, forest: string) {
    this.name = name
    this.forest = forest
    // Fox.prototype = {
    //     eats:true
    // }
    this.sleep = () => {
        return 'спать'
    }
}

Fox.prototype = extraAnim




let foxFirst = new Fox('Tricky', 'Local')


//! prototype - это когда смотрим свойства самого объекта
//! proto - ссылка на свойство prototype функции-конструктора.

//! равнозначны!
console.log(foxFirst.__proto__);
console.log(Fox.prototype);


console.log(extraAnim.toString());


// console.log(foxFirst.__proto__.constructor == Fox);

// console.log(foxFirst.sleep());
// console.log(foxFirst.toString());
// console.log(extraAnim.__proto__ == Object.prototype);


//! проверка через typeof на object
// console.log(Array.prototype);
// console.log(Date.prototype);
// console.log(Object.prototype);
// console.log(Function.prototype());

let mass = [1, 2, 3]
// console.log(mass.__proto__ == Array.prototype) //!true
// console.log(Fox.__proto__ == Function.prototype);

console.log(String.prototype);


console.log(Number.prototype);

Number.prototype.show = () => {
    console.log('Добавили новый метод');
}
let num = 12345
num.show();













//! Задание 1 // JS_PZ_Modul_2_Week_4 
//! Реализовать класс PrintMaсhine, которой состоит из:
//! ■ размера шрифта;
//! ■ цвета шрифта;
//! ■ семейства шрифта;
//! ■ метода print(), который принимает текст и печатает его 
//! соответствующим шрифтом 

let printText = document.getElementById('PrintMaсhine') as HTMLDivElement

class PrintMaсhine {

    background = 'rgb(11, 66, 85)'

    constructor(fontSize: any, color: any, fontFamily: string) {
        this.fontSize = fontSize
        this.color = color
        this.fontFamily = fontFamily
    }
    print(text: any) {
        printText.innerHTML += `
        <div style="font-size: ${this.fontSize}; color: ${this.color}; 
        font-family: ${this.fontFamily}; background:${this.background}">${text}</div>`
    }
}

let writeText1 = new PrintMaсhine('2em', 'red', 'Franklin Gothic Medium')
writeText1.print('Печатаем тестовый текст')

let writeText2 = new PrintMaсhine('1.5em', 'green', 'Franklin Gothic Medium')
writeText2.print('Печатаем ещё один текст')



let input_marker = document.querySelector('#input_marker') as HTMLInputElement
input_marker.addEventListener('input', (e) => {
    console.log(e.target.value);

})









//!  счетчик букв

// let firstLetter = String('а').codePointAt(0) as any
// let lastLetter = String('я').codePointAt(0) as any
// let massCode = []
// for (let i = firstLetter; i <= lastLetter; i++) {
//     massCode.push(i)
// }

// console.log(massCode);

// let letter_count = document.querySelector('#letter_count') as HTMLDivElement
// let letter_count2 = document.querySelector('#letter_count2') as HTMLDivElement
// let letter_count3 = document.querySelector('#letter_count3') as HTMLDivElement
// let letter_count4 = document.querySelector('#letter_count4') as HTMLDivElement
// let acc = 0
// let acc2 = 0
// let acc3 = 0
// let acc4 = 0


// let stopTimer = setInterval(() => {
//     letter_count.innerHTML=String.fromCodePoint(firstLetter+acc).toUpperCase();
//     acc++
// }, 500);
// let stopTimer2 = setInterval(() => {
//     letter_count2.innerHTML=String.fromCodePoint(firstLetter+acc2).toUpperCase();
//     acc2++
// }, 500);
// let stopTimer3 = setInterval(() => {
//     letter_count3.innerHTML=String.fromCodePoint(firstLetter+acc3).toUpperCase();
//     acc3++
// }, 500);
// let stopTimer4 = setInterval(() => {
//     letter_count4.innerHTML=String.fromCodePoint(firstLetter+acc4).toUpperCase();
//     acc4++
// }, 500);





// setInterval(() => {
//         clearInterval(stopTimer)    
// }, 1500);
// setInterval(() => {
//         clearInterval(stopTimer2)    
// }, 7500);
// setInterval(() => {
//         clearInterval(stopTimer3)    
// }, 1500);
// setInterval(() => {
//         clearInterval(stopTimer4)    
// }, 500);















//!!!!!!!!!!!!!!!!!!!!!!!!!!! Наследование классов !!!!!!!!!!!!!!!!!!!!!!!!!1


class City {
    name
    age
    constructor(name = 'nnnnnn', age = 1000000) { //! задание параметров по умолчанию
        this.name = name
        this.age = age
    }
    welcome() {
        return `Добро пожаловать в ${this.name} `
    }
    population = (people: number) => {
        return `население города ${this.name} = ${people} человек`
    }
}

class Country extends City {
    speed
    country
    constructor(name: string, country: string, age = 55555, speed = 100) { //! задание параметров по умолчанию
        super(name, age)  //! super работает ТОЛЬКО внутри нашего конструктора
        this.country = country
        this.speed = speed
    }
    run() {
        return `${this.name} ${super.welcome()} едем со скоростью ${this.speed}` //!можем
        //! возвращать родительский метод
    }
}


let Msc = new City('Moscow')
console.log(Msc);

let Spb = new City('Saint-Petersburg', 300)
console.log(Spb);

let msc2 = new Country('Moscow2', 'Russia')
console.log(msc2);

console.log(msc2.welcome()); //! вызов унаследованного метода
console.log(msc2.run()); //! вызов собственного метода

console.log(Msc.population(10_000_000));


console.log(Msc.name);





//!!!!!!!!!!!!!!!!!!!!!!!!!1! JS_DZ_Modul_2_Week_5 !!!!!!!!!!!!!!!!!!!!!!!!!!!

//! Задание 1
//! Реализовать класс, описывающий простой маркер.  В классе 
//! должны быть следующие компоненты:
//! ■ поле, которое хранит цвет маркера;
//! ■ поле, которое хранит количество чернил в маркере (в про
//! центах);
//! ■ метод для печати (метод принимает строку и выводит 
//! текст соответствующим цветом; текст выводится до тех 
//! пор, пока в маркере есть чернила; один не пробельный 
//! символ – это 0,5% чернил в маркере).


let symbols = document.getElementById('marker_symbol') as HTMLDivElement
let marker_info = document.getElementById('marker_info') as HTMLDivElement

class Marker {
    constructor(color: string, ink: number) {
        this.color = color
        this.ink = ink //количество чернил (на 50 символов)
    }

    print(text: string) {
        let num = this.ink

        for (let i = 0; i < text.length; i++) {
            symbols.innerHTML += `<span style="color: ${this.color}; 
            opacity: ${1 - i / num};">${text[i]}</span>`
        }
        console.log(text.length);

        symbols.innerHTML += '<br>'

        marker_info.innerHTML += `
        Цвет маркера:<div style="color:${this.color}">${this.color}</div> <br>
        Количество введенных символов: <span style="color: red; font-size:25px">
        ${text.length < this.ink ? text.length : this.ink}</span><br>   
        <br>
        `
    }
}

let marker1 = new Marker('red', 15)
marker1.print('1_  s dfg sdf sdf dfsdfsdf 2_3_4_5_6_')


let marker2 = new Marker('orange', 25)
marker2.print('12345678 90 ')

let obje = 123





//? Задание 3
//? Реализуйте класс ExtentedArray, унаследовав его от стандарт
//? ного класса Array и добавив следующие методы:
//? ■ метод getString(separator) – для получения строки со 
//? всеми элементами массива, перечисленными через ука
//? занный разделитель: запятая, тире, пробел и т. д.;
//? ■ метод getHtml(tagName) – для получения строки с html 
//? кодом, где каждый элемент массива будет обернут в ука
//? занный тег (учтите, если указывается тег li, то все эле
//? менты дополнительно необходимо обернуть в ul).
//? Создайте объект класса ExtentedArray, заполните его данны
//? ми и выведите на экран результаты работы методов getString() 
//? и getHtml()

// console.log(Array.prototype);

// let  Test = {

// }
// Test.prototype == Object.prototype
// console.log(Test.__proto__== Object.prototype);
// console.log(Test.prototype);



// class ExtentedArray extends Test {
//     constructor() {

//     }

// }








function findInd(str: string, symb: any) {
    let mass = str.split('')
    let acc = 0
    let accIndex = ''
    for (let i = 0; i < mass.length; i++) {
        if (str[i] == symb) {
            acc += symb.length
            accIndex += i + ' '
        }
    }

    return `буква '${symb}' встречается ${acc} ${acc >= 2 && acc <= 4 ? 'раза' : 'раз'} на индексах: ${accIndex}`
}

console.log(findInd('Написать функцию, которая принимает строку и символ и выводит индексы, по которым находится этот символ в строке', 'е'))
console.log(findInd('которым находится этот символ в старкоторым находится этот символ в старкоторым находится этот символ в староке', 'а'))



let test = 10
console.log(test < 5 ? 'число большое' : 'число маленькое');








// Задча 10. Написать функцию, которая принимает строку и символ
// и выводит индексы, по которым находится этот символ в
// строке. Также вывести, сколько всего раз встречается этот
// символ в строке.

function findIn(str: string, symb: any) {
    let acc = 0
    let mass = [] as any
    str.split('').forEach((el, i) => {
        if (el == symb) {
            acc++
            mass.push(i)
        }
    })
    return console.log(`символ '${symb}' повторяется ${acc} раз под индексами: ${mass}`)
}
findIn('выводит индексы, по которым находится этот символ', 'т')










console.log(Date.prototype);




let date2 = new Date() //! рендеринг документа
console.log(date2.getMilliseconds());

console.log(`документ отрендерился за ${Number(date2) - Number(date1)} миллисекунды`);


let date3 = new Date()
console.log(date3.getTime()); //! перевод в timestamp

let date4 = date3.getTime()
console.log(new Date(date4)); //! перевод обратно в дату !

let date5 = new Date('1991-03-28') //! первый способ записи
console.log(date5);
console.log(date5.getDay());

let date6 = new Date(1991, 2, 28)  //! второй способ записи
console.log(date6);


let date7 = new Date()
console.log(date7);

date7.setHours(36)
console.log(date7);

// date7.setDate(20)
// console.log(date7);

let newYear = new Date(2026, 0, 1) //!считаем дни до Нового года
console.log(newYear);

let quantityDays = Number(newYear) - Number(date3)
console.log(`до нового года осталось: ${parseInt(quantityDays / 24 / 60 / 60 / 1000)} дней`);

console.log(Date.parse('2019-10-05')); //! :DDD





//! Задание 1 // JS_PZ_Modul_2_Week_5
//! Реализовать класс Button, который содержит ширину, высоту, 
//! текст кнопки и метод showBtn(), который выводит кнопку на экран 
//! с помощью тега button и функции document.write(). 


class Button {
    width: string
    color: any
    background: any
    value: any
    constructor(width: any, color: any, background: any, value: any) {
        this.width = width
        this.color = color
        this.background = background
        this.value = value
    }
    showBtn() {
        document.body.innerHTML += `
<button style="width: ${this.width}; color: ${this.color}; background: ${this.background}">${this.value}</button>`
    }


    delete() {
        return 'удалить 123'
    }

}
let button1 = new Button('120px', 'white', 'red', 'Нажми меня')
button1.showBtn()
console.log(button1);


let button2 = new Button('80px', 'red', 'black', 'Удалить')
button2.showBtn()






//! Реализовать класс BootstrapButton, унаследовав его от класса 
//! Button. Добавить поле color и переопределить метод showBtn() 
//! так, чтобы кнопка выводилась со стилями и указанным цветом. 

class BootstrapButton extends Button {
    fontSize
    constructor(width: any, color: any, background: any, value: any, fontSize: number) {
        super(width, color, background, value)
        this.fontSize = fontSize
    }
    showBtn() {
        document.body.innerHTML += `
<button style="width: ${this.width}; color: ${this.color}; background: ${this.background}; font-size:${this.fontSize}px">${this.value}</button>`
    }
}

let light1 = new BootstrapButton(300, 'green', 'yellow', 'Кнопочка', 30)
light1.showBtn()



//! Задание 3
//!  Реализовать класс, который описывает css класс. 
//! Класс CssClass должен содержать внутри себя:
//!  ■ название css класса;
//!  ■ массив стилей;
//!  ■ метод для установки стиля;
//!  ■ метод для удаления стиля;
//!  ■ метод getCss(), который возвращает css код в виде стро
//! ки.

let cssClass = document.getElementById('cssClass') as HTMLDivElement
let string = ''

class CssClass {
    className
    cssArray
    constructor(className: string, cssArray: any[]) {
        this.className = className
        this.cssArray = cssArray
    }

    getCss() {  //! метод для установки стиля;
        for (const obj of this.cssArray) { //! массив закидываем в цикл
            for (const key in obj) { //! объекты закидываем в цикл
                string += key + ':' + obj[key] + '; ';
            }
        }
        cssClass.innerHTML += `
        <div id="${this.className}" style="${string}"> Название класса: ${this.className} <br><br> </div>`
    }

    writeStyle() { //! метод для вывода стилей текстом в HTML
        cssClass.innerHTML += `Стили класса ${this.className}: ${string}`
    }

    deleteStyle(num: number) {
        delete this.cssArray[num]
        // cssClass.innerHTML = '' //! вообще все полностью удалить
    }

}


let class2 = new CssClass('block2', [
    { background: 'pink' },
    { color: 'green' },
    { padding: '5px' },
    { width: '300px' },
    { height: '300px' },
    { display: 'inline-block' },
])
class2.deleteStyle(1) //! метод удаления должен идти первым
class2.getCss()
class2.writeStyle()




// //! Task 3. Реализовать класс, который описывает css класс. 
// //! Класс CssClass должен содержать внутри себя:
// //! ■ название css класса;
// //! ■ массив стилей;
// //! ■ метод для установки стиля;
// //! ■ метод для удаления стиля;
// //! ■ метод getCss(), который возвращает css код в виде строки.


// class CssClass2 {
//     className
//     mass
//     constructor(className:string,  mass:any[]) {
//         this.className = className
//         this.mass = mass
//     }

// setStyle () {
//     let x = this.mass[0]
//     document.body.innerHTML += `<div class="${this.className}" style="${this.mass[0]}">123 </div>`
//     console.log(`<div class="${this.className}" style="${this.mass[0]}">123 </div>`);
//     console.log(x);

// }


// }
// let st = new CssClass2 ('newClass', [{color:'red'}])
// st.setStyle()







//Отсортируйте 5 случайных чисел от 1 до 10 в порядке возрастания и затем в 
// порядке убывания.

let randomNumbers: number[] = []
for (let i = 1; i <= 5; i++) {
    randomNumbers.push(Math.round(Math.random() * 10));
}
console.log(randomNumbers.sort((a, b) => a - b));

//У нас есть объект:
let obj = {
    'name': ['Вася', 'Петя', 'Коля'],
    'age': [11, 30, 20],
}
//Получите Петю из массива arr.
//Посчитайте, сколько элементов находится в name.

console.log(Object.values(obj)[0][1]);
console.log(obj.name[1]);



//Дан массив с числами. Числа могут быть положительными и отрицательными. 
//Найдите сумму положительных элементов массива. 


let myArrr = [5, 7, -2, -6, 4, 1, -8]
let ac = 0
let sum = myArrr.map(e => {
    if (e > 0) {
        ac += e
    }
})
console.log(ac);

let sum2 = myArrr.reduce((a, e) => {
    if (e > 0) {
        a += e
    }
    return a //! фигурные скобки и return  тогда сработает!
}, 0)
console.log(sum2);





















//! Задание 2 
//! Реализуйте класс ExtendedDate, унаследовав его от стандарт
//! ного класса Date и добавив следующие возможности:
//!  ■ метод для вывода даты (числа и месяца) текстом;
//!  ■ метод для проверки – это прошедшая дата или будущая 
//! (если прошедшая, то метод возвращает false; если буду
//! щая или текущая, то true); 
//! ■ метод для проверки – високосный год или нет;
//!  ■ метод, возвращающий следующую дату.
//!  Создайте объект класса ExtendedDate и выведите на экран 
//! результаты работы новых методов

let today = new Date()
let today2 = new Date()

class ExtendedDate {
    year
    month
    day
    constructor(year: number, month: number, day: number) {
        this.year = year
        this.month = month
        this.day = day
    }


    printDate() {   //!  ■ метод для вывода даты (числа и месяца) текстом;
        let massWithDays = ['первое', 'второе', 'третье', 'четвертое', 'пятое', 'шестое', 'седьмое', 'восьмое', 'девятое', 'десятое',
            'одиннадцатое', 'двеннадцатое', 'триннадцатое', 'четырнадцатое', 'пятнадцатое', 'шестнадцатое', 'семьнадцатое',
            'восемьнадцатое', 'девятьнадцатое', 'двадцать', 'тридцать']
        let massWithMounth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабрь']


        let days = this.day
        let mounths = this.month
        if (days >= 1 && days <= 20) {
            console.log(massWithDays[days - 1], massWithMounth[mounths - 1]);
        } else if (days < 30) {
            console.log(massWithDays[19], massWithDays[days - 21], massWithMounth[mounths - 1])
        } else if (days == 30) {
            console.log(massWithDays[20], massWithMounth[mounths - 1])
        } else if (days == 31) {
            console.log(massWithDays[20], massWithDays[days - 31], massWithMounth[mounths - 1])
        } else {
            console.log(`Число ${days} вне диапазона`);
        }
    }


    //! ■ метод для проверки – это прошедшая дата или будущая (если прошедшая, то метод 
    //! возвращает false; если будущая или текущая, то true); 
    checkDate() {
        let str = ''
        let strToday = ''

        str += this.year + '' + this.month + '' + this.day
        strToday += today.getFullYear() + '' + 0 + (today.getMonth() + 1) + '' + 0 + (today.getDate())

        if (strToday >= str) {
            console.log('true, дата текущая или будущая');
        } else {
            console.log('false, дата прошлая');
        }

        console.log(today.getFullYear());
        // console.log(today.getMonth());
        // console.log(today.getDate());
        // console.log(str);
        // console.log(strToday);        
    }


    //! ■ метод для проверки – високосный год или нет;
    checkLeapYear() {
        console.log(this.year % 4 == 0 ? 'Год високосный' : 'Год не високосный');
    }



    //!  ■ метод, возвращающий следующую дату.
    nextDay() {
        let year = this.year
        let mounth = this.month
        let day = this.day

        if (day >= 32) return 'Введите корректный день'
        if (day == 31 && (mounth == 4 || mounth == 6 || mounth == 9 || mounth == 11)) return 'Введите корректный день'
        if (day >= 30 && mounth == 2 || day == 29 && mounth == 2 && year % 4 != 0) return 'Введите корректный день'
        if (mounth >= 13) return 'Введите корректный месяц'
        if (day <= 0 || mounth <= 0 || year <= 0) return 'введите положительное число'

        if (day == 31 && mounth == 12) {
            year += 1, mounth = 1, day = 1
        } else if (day == 30 && (mounth == 4 || mounth == 6 || mounth == 9 || mounth == 11)) {
            day = 1
            mounth += 1
        } else if (day == 31 && (mounth == 3 || mounth == 5 || mounth == 7 || mounth == 8 || mounth == 10 || mounth == 12)) {
            day = 1
            mounth += 1
        } else if (day == 28 && mounth == 2 && year % 4 != 0 || day == 29 && mounth == 2 && year % 4 == 0) {
            day = 1
            mounth += 1
        } else {
            day += 1
        }
        return `«${year}.${mounth}.${day}»`
    }

}

let newDay2 = new ExtendedDate(2012, 10, 10)
newDay2.printDate()
newDay2.checkDate()
newDay2.checkLeapYear()
console.log(newDay2.nextDay())


var tomorrow = new Date();  //! возвращает завтрашний день от текущего дня
tomorrow.setDate(tomorrow.getDate() + 1);
















// // повторить с интервалом 2 секунды
// let timerId = setInterval(() => console.log('tick'), 2000);

// // остановить вывод через 5 секунд
// setTimeout(() => { 
//     clearInterval(timerId); console.log('stop'); 
// }, 5000);



//? let acc = 0 
//? setInterval(() => {
//?     setInterval(() => {
//?         acc+=1
//?         console.log(acc);

//?     }, 1000);
//? }, 1000);









console.log(today.getDate());
today.setDate(23)
console.log(today);









//!!!!!!!!!!!!!!!!!!!!!!! getter и setter !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



let user = {
    name:'Ivan',
    surname: 'Ivanov',
    get fullname() {
        return `${this.name} ${this.surname}` //! в gete всегда пишем return
    },

    set fullname (val) { //! обязательно один параметр
        if (this.name.length<=4) {
            console.log(val = 'имя короткое!');
         return   
        }
        [this.name, this.surname] = val.split(',') 
    }
    
}
console.log(user.fullname);



user.fullname = 'Petya, Petrov' as any //! устанавливаю сеттер
console.log(user);

console.log('______________');











//! Задание 2
//!  Реализовать класс, описывающий новость (заголовок, текст, 
//! массив тегов, дата публикации). В классе необходимо реализовать 
//! один метод print, который выводит всю информацию в таком 
//! виде, как на рисунке 1.
//!  Обратите внимание на то, как выводится дата:
//!  ■ если с даты публикации прошло менее дня, то выводится 
//! «сегодня»;
//!  ■ если с даты публикации прошло менее недели, то выво
//! дится «N дней назад»;
//!  ■ в остальных случаях, полная дата в формате «дд.мм.гггг».

let news = document.getElementById('news') as HTMLDivElement

class News {
    header
    tag
    date
    #test = 100 //! защищенное свойство
    constructor(header:any, tag:string, date:any) {
        this.header = header
        this.tag = tag
        this.date = date
    }
    printText(titleName:any, text:any) {
    let todayDateString = today.toLocaleDateString().split('.').reverse().join('') //! перевод даты в строку

    let userDate = this.date.split('.').join('')
    let userDate2 = this.date.split('.').reverse().join('.')
    
    let infoAboutDate = ''
        if (Number(todayDateString)-userDate==0) {
            infoAboutDate =  '"сегодня"' + this.#test
        } else if (Number(todayDateString)-userDate>=0 && Number(todayDateString)-userDate<=7 ) {
            infoAboutDate =  `${Number(todayDateString)-userDate} ${Number(todayDateString)-userDate<=4 ? 'дня' : 'дней' } назад`
        } else if (Number(todayDateString)-userDate>7) {
            infoAboutDate =  userDate2
            }
        
        
        news.innerHTML += `
        <${this.header}>${titleName}</${this.header}>
        <${this.tag}>Новость опубликована: ${infoAboutDate}</${this.tag}>
        <${this.tag}>${text}</${this.tag}>
        <${this.tag}>${text}</${this.tag}>
        
        `
        
    }
   
}


class Films extends News {

}
let film1 = new Films('12sd', 'sdf', '234')


let new1 = new News('h3', 'p', '2025.05.12')
// console.log(new1.test);


new1.printText(
    'Просто заголовок', 
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsa quos voluptatum modi perferendis excepturi sit omnis iste sint error veritatis quo')

let new2 = new News('h2', 'p', '2025.05.08')
new2.printText('Новая информация', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsa quos voluptatum modi perferendis excepturi sit omnis iste sint error veritatis quo')

let new3 = new News('h2', 'p', '2012.10.10')
new3.printText('Что-то хорошее','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsa quos voluptatum modi perferendis excepturi sit omnis iste sint error veritatis quo')





//!!!!!!!!!!!!!!!!!!! Задача на setTimeout и setInterval !!!!!!!!!!!!!!!!!!!!!!!!1

//! При перезагрузке страницы у пользователя выскакивает реклама (модальное окно)
//! задание:
//! - модальное окно появляется через 3 секунды после загрузки страницы
//! - сделать так, чтобы пользователь мог закрыть рекламу по прошествии 10 секунд
//! (выскакивает крестик)
//! - в модальном окне реализовать таймер, который будет отсчитывать время

// let window = document.getElementById('window') as HTMLDivElement
// let timer = document.getElementById('timer') as HTMLDivElement
// let cross = document.getElementById('cross') as HTMLDivElement

// setTimeout(() => {
//     window.style.display = 'block'
// }, 3000);


// let time = 13 as any
// let stopTimer =  setInterval(() => {
//     time--
//     timer.innerHTML=time
// }, 1000);


// setTimeout(() => {
//     clearInterval(stopTimer)
//     cross.style.display = 'block'
// }, 13000);

// cross.addEventListener('click', ()=>{
//     window.style.display = 'none'
// })








//! Задание 1
//!  Реализовать класс, описывающий окружность. В классе долж
//! ны быть следующие компоненты:
//!  ■ поле, хранящее радиус окружности;
//!  ■ get-свойство, возвращающее радиус окружности;
//!  ■ set-свойство, устанавливающее радиус окружности;
//!  ■ get-свойство, возвращающее диаметр окружности;
//!  ■ метод, вычисляющий площадь окружности;
//!  ■ метод, вычисляющий длину окружности.
//!  Продемонстрировать работу свойств и методов.

class Circle {
    radius

    constructor(radius:number) {
        this.radius = radius
    }
    get Radius(){
        return console.log('радиус = ' + this.radius + ' метров')
    }
    set Radius(value:any) {
        console.log(`радиус установлен на ${this.radius = value} метров`)
    }
    get Diametr() {
        return console.log(`диаметр = ${this.radius * 2} метров`);  
    }
    circleLength() {
        console.log(`длина окружности = ${Math.round(2 * this.radius * Math.PI)} метров`);
    }
    circleSquare() {
        console.log(`площадь окружности= ${Math.round(this.radius * this.radius * Math.PI)} метров`);
    }

}

let circle1 = new Circle(10)
circle1.Diametr

circle1.Radius = 5
circle1.Diametr
circle1.circleLength()
circle1.circleSquare()



circle1.Radius = 100
circle1.circleLength()
circle1.circleSquare()

//! Задание 2 
//! Реализовать класс, описывающий геометрическую фигуру со 
//! свойствами и методами:
//!  ■ get-свойство для получения названия фигуры;
//!  ■ метод для вывода информации о фигуре (стороны и их 
//! длина);
//!  ■ метод для вычисления площади фигуры;
//!  ■ метод для вычисления периметра фигуры.
//!  Реализуйте классы-наследники: квадрат, прямоугольник и 
//! треугольник. Переопределите методы вывода и вычислений в 
//! классах-наследниках.
//!  Создайте массив с различными фигурами и выведите инфор
//! мацию о каждой фигуре, включая площадь и периметр.

// class Figure {
//     name
//     side
//     sideLength
//     constructor(name:string, side:number, sideLength:number[]) {
//         this.name = name
//         this.side = side
//         this.sideLength = sideLength
//     }
//     get figureName () {
//         return console.log(this.name);
//     }
//     set figureName (value) {
//          console.log(this.name + ' = ' + value);
          
//     }
        
//     showInfo () {
//         console.log(`фигура ${this.name} имеет ${this.side} стороны длинной ${this.sideLength} метров` );
//     }
//     showSquare() {
//         console.log(`площадь фигуры: ${this.sideLength[0] * this.sideLength[1]} метров`);
//     }
//     showPerimetr() {
//         console.log(`периметр фигуры: ${(this.sideLength[0] * this.sideLength[1]) * 2} метров`);
//     }
// }
// let figures = ['figure1','figure2','figure3'] //! массив с фигурами

// let square = new Figure (figures[0], 4, [10])
// square.figureName
// square.showInfo()
// square.showSquare()
// square.showPerimetr()

// console.log(square.sideLength);

// square.figureName = '300' as any 
// square.figureName


console.log('==============')
console.log('==============')
console.log('==============')




//! Реализовать класс, описывающий геометрическую фигуру со 
//! свойствами и методами: 
//! ■ get-свойство для получения названия фигуры;
//! ■ метод для вывода информации о фигуре (стороны и их длина);
//! ■ метод для вычисления площади фигуры; 
//! ■ метод для вычисления периметра фигуры.

//! Реализуйте классы-наследники: квадрат, прямоугольник и треугольник. 

//! Переопределите методы вывода и вычислений в 
//! классах-наследниках. 

//! Создайте массив с различными фигурами и выведите информацию о каждой фигуре, 
//! включая площадь и периметр.


class Figures {
    name
    side
    constructor(name:string, side:any[]=[]) {
        this.name = name
        this.side = side
    }
    get showName() {
        return console.log(`Название фигуры: ${this.name}`)
    }
    showInfo() {
        console.log(`Информация о сторонах фигуры:${JSON.stringify(this.side)}`);
        // console.log(...this.side);
    }
    findSquare() {
        return 'Площадь фигуры = ' + this.side[0].a * this.side[1].b + ' метров'
    }
    findPerimetr() {
        let acc = 0
        for (const el of this.side) {
                for (const key in el) {
                    acc+= el[key]
                }            
        }
        return('Периметр фигуры = ' + acc);
    }
}

// let testFigure = new Figures('square', [{a:5}, {b:7}, {c:5}, {d:7}])
// testFigure.showName
// testFigure.showInfo()
// testFigure.findSquare()
// console.log(testFigure.findPerimetr())




//! КВАДРАТ
class Square extends Figures {
    constructor(name:string, side:any[]=[]) {
        super(name, side)
    }
   
    findPerimetr(): any {
        let a = this.side[0].a
        return 'Периметр квадрата = ' + a * 4 + ' метров'
    }
    findSquare() {
        let a = this.side[0].a 
        return 'Площадь квадрата = ' + (a * a)  + ' метров'
    }

}

let square = new Square('квадрат', [{a:30}])
square.showName
square.showInfo()
console.log(square.findPerimetr())
console.log(square.findSquare())
console.log('==============')


//! ТРЕУГОЛЬНИК
class Triangle extends Figures {
    constructor(name:string, side:any[]=[]) {
        super(name, side)
    }
    findSquare() {
        let perimetr = (super.findPerimetr())
        const onlyNums = Number(perimetr.replace(/\D/g, '')) //! ТОЛЬКО  числа
        const per = onlyNums/2  //! находим полупериметр!
        let a = this.side[0].a 
        let b = this.side[1].b 
        let c = this.side[2].c 
        return 'Площадь треугольника = ' + Math.sqrt(per*(per-a)*(per-b)*(per-c))
    }
}

let triangle = new Triangle('треугольник', [{a:30}, {b:40}, {c:50}])

triangle.showName
triangle.showInfo()
console.log(triangle.findPerimetr())
console.log(triangle.findSquare())
console.log('==============')




//! ПРЯМОУГОЛЬНИК
class Rectangle extends Figures {
    constructor(name:string, side:any[]=[]) {
        super(name, side)
    }
    findPerimetr(): any {
        return 'Периметр ' +  this.name + 'a = '  + (this.side[0].a + this.side[1].b) * 2 + ' метров'
    }

}
let rectangle = new Rectangle('прямоугольник', [{a:30}, {b:40}])
rectangle.showName
rectangle.showInfo()
console.log(rectangle.findPerimetr())
console.log(rectangle.findSquare())
console.log('==============')






// let abr = "Абра23кадабра"
//!РАВНОЗНАЧНЫ
// console.log(abr.replace(/[^0-9]/g, '')); 
// console.log(abr.replace(/\D/g, ''));
 






//! Изменение цвета шрифта у body
// setInterval(() => {
//     document.body.style.color = 'red'
// }, 2000);

// setTimeout(() => {
//     setInterval(() => {
//         document.body.style.color = 'white'
//     }, 2000);
// }, 1000);




//! НАВИГАЦИЯ!

console.log(document.head);
console.log(document.body.lastElementChild);

let letter_acc = document.getElementById('letter_acc')  as HTMLDivElement
// console.log(letter_acc.childNodes[2]);


// console.log(letter_acc.previousElementSibling.placeholder);
// console.log(letter_acc.nextElementSibling);

// console.log(letter_acc.childNodes[0] == letter_acc.firstChild); //! с 'текстом'
// console.log(letter_acc.childNodes[0]); //! с 'текстом'
// console.log(letter_acc.children[1]); //! сами дивы
// console.log(letter_acc.hasChildNodes()); //! есть ли дети


// for (const el of letter_acc.childNodes) {
//     console.log(el);  
// }






// console.log(letter_acc.parentNode); //! показывает родителя
console.log(letter_acc);

// let d1 = new Date()
// console.log(d1.getTime());


// let showBodyElement = document.querySelector('#showBodyElement') as HTMLDivElement

// for (const el of document.body.childNodes) {
//     showBodyElement.innerHTML+= el  + '<br>'
//     console.log(el);
    
// }


// let d2 = new Date()
// console.log(d2.getTime());
// console.log(Number(d2)-Number(d1));

// console.log(document.body.getHTML());

console.log(letter_acc.parentElement?.style);

 

console.log(window.innerHeight);


console.log(document.body.previousElementSibling);

let digitals = document.querySelector('#digitals') as HTMLDivElement
console.log(digitals.parentNode == digitals.parentElement);
console.log(digitals.firstElementChild);




console.log(digitals.lastElementChild);





//  let divs = document.getElementsByTagName('div')
//  divs[5].style.color = 'red'
//  for (const el of divs) {
     
// }
//  console.log(divs.length); //!количество дивов
//  console.log(divs[5]);
 





//!!!!!!!!!!!!!!!!!!!!!!!!! КАЛЬКУЛЯТОР!!!!!!!!!!!!!!!!!!!!!!!!!
 
// calc.value+=232+10+Number(seven.innerHTML)
// let 8 = 8
// let 9 = 9
// let + = +
// let 4 = 4
// let 5 = 5
// let 6 = 6
// let - = -
// let 1 = 1
// let 2 = 2
// let 3 = 3
// let * = *
// let 0 = 0
// let = = =





let calc = document.getElementById('calc_buttons') as any
let calcInput = document.getElementById('calcInput') as any






for (const el of calc.children) {
    el.addEventListener('click', ()=> {
        let symb = el.innerHTML
        if (symb>=0 && symb<=9) {
            calcInput.value+= Number(symb)
            console.log(calcInput.value);
            console.log(Number(calcInput.value));
            console.log(Number(symb));
        } else {
            calcInput.value+=symb
            console.log(calcInput.value);
        }

    })
}


calc.children[13].addEventListener('click', ()=> {
    
    let a = 5
    let b = 4
    let symb = ''
            switch (symb) {
                case '+':
                    console.log(a + b);
                    break;
                case '-':
                    console.log(a - b);
                    break;
                case '/':
                    console.log(a / b);
                    break;
                case '*':
                    console.log(a * b);
                    break;
                default:
                    console.log('не могу обработать');
                    break;
            }
    // console.log(calcInput.value); 
} )


// console.log(calcInput.value);



// for (let i = 0; i < calc.children.length; i++) {    
    //     calc.children[i].addEventListener('click', ()=> {
        //         let symb = calc.children[i].innerHTML
        //         if (symb>=0 && symb<=9) {
            //             console.log(Number(symb));
            //         } else {
                //             console.log(symb);
                //         }
                
                //     })
                
                // }
                
                // console.log(calc.children.length);  
                
// console.log(calc.firstElementChild);
// console.log(calc.children[5]);






let inp = document.getElementsByTagName('input')
console.log(`количество input в элементе = ${inp.length}`);

let div = document.getElementsByTagName('div')
console.log(`количество input в элементе = ${div.length}`);


//! принадлежность классу-конструктору!
console.log(aircraftFirst instanceof Aircraft); 

console.dir(aircraftFirst)
console.log(aircraftFirst)

console.dir(Aircraft)
console.log(Aircraft)


let lorem = document.getElementById('lorem') as HTMLDivElement



// //! querySelector возвращает первый элемент  
// let digitCalc = document.querySelector('.digitCalc') 

// //! querySelectorAll - возвращает ВСЕ элементы  
// let digitCalc = document.querySelectorAll('.digitCalc') 
// console.log(digitCalc);


// //! closest ищет первого предка соответствующему условию
// let show = document.getElementById('show') as HTMLElement
// console.log(show.closest('button')); 

//! getElementsByTagName - ищет все теги документа
let btns = document.getElementsByTagName('button')
console.log(btns.length);

console.dir(btns);

//! nodeName и tagName- сообщает имя тега в CAPSLOCK
console.log(lorem.nodeName);
console.log(lorem.tagName);

//! - textContent - срезает и оставляет только текст
console.log(lorem.textContent); 


//! -  на innerHTML лучше не навешивать события, т.к. кнопки могут перезаписываться
// lorem.innerHTML='555'
console.log(lorem.innerHTML);

//! outerHTML -  выводи текст вместе с тегами(редко используется)
console.log(lorem.outerHTML); 


//! textContent -  выводи текст (похож на innerHTML)
console.log(lorem.textContent); 

let comment = lorem.nextSibling
console.log(comment); 

//!  hidden - самый простой способ скрыть элемент а index.HTML
// lorem.hidden = 'true' as any спрятали div
// $0.hidden = 'true'
// $0.style.color = 'red'





let massive = [0, 5, 2, 4, 3, 8 ]
// console.log(massive.sort((a, b) => a - b));

let massive2 = [
    {a:1},
    {b:2},
    {c:4},
    {d:3},
]

// massive2.forEach(el=> 
//     console.log(Object.values(el).sort((a, b)=> a - b))
// )




// console.log(...massive2.sort((a, b) => a - b));
// console.log(massive2[0].a);
// console.log(massive2[1].b);

// for (let i = 0; i < massive2.length; i++) {
//     Object.values(massive2[i])

//     console.log(Object.values(massive2[i]).sort());
    
// }
// console.log(Object.values(massive2[0]) > Object.values(massive2[1]));





 
// console.log(document.body instanceof HTMLBodyElement);
// console.log(document.body instanceof HTMLElement);
// console.log(newsPage instanceof HTMLElement);
// console.log(newsPage instanceof EventTarget);
// console.log(newsPage instanceof Node);
// console.log(newsPage.parentNode);



// document.body.imperator = {
//     name: 'Caesar',
//     age : 2000,
// }
// console.log(imperator.name);


// document.body.myData = {
//   name: 'Caesar',
//   title: 'Imperator'
// }
// console.log(myData);

// document.body.myData.innerHTML = '333'

let myData = document.querySelector('#myData') as HTMLDivElement
// console.log(myData.hasAttribute('class'));
// console.log(myData.hasAttribute('id'));
// console.log(myData.getAttributeNames());

// myData.setAttribute('class', "test")

// console.log(myData.hasAttribute('class'));
// console.log(myData.getAttributeNames());


// console.log(myData.outerHTML);


console.log(document.body.dataset.aboutNew)

console.log(myData.getAttributeNames());

let attr = document.querySelector('[data-about]') //можем извлекать также как обычный id
console.log(attr);

// myData.myDat = {
//   name: 'Caesar',
//   title: 'Imperator'
// };

// console.log(myData.myDat.title);

console.log(myData.hasAttribute('data-about')); //! наличие атрибута
console.log(myData.getAttribute('data-about')); //! значение атрибута
myData.setAttribute('data-about2', 'newAtrr') //! устанавливает атрибут
// console.log(myData.removeAttribute('data-about2')) //! удаляет атрибут

console.log(myData.dataset.about2);
console.log(myData.attributes); //! коллекция ВСЕХ атрибутов 



let inputId = document.querySelector('#inputId') as HTMLInputElement
console.log(inputId.getAttribute('value'));
console.log(inputId.getAttribute('type'));
console.log(inputId.dataset.colorOrangeRed);// в кэмелкэйснотэйшэн читаеется


console.log(inputId.attributes);



//!!!!!!!!!!!!!!!!!!!!! Изменение документа !!!!!!!!!!!!!!!!!!!!1

let divStart =  document.createElement('div')  // в скобках имя тега
divStart.innerHTML= 'начало документа (через prepend)'
document.body.prepend(divStart) //! добавление в НАЧАЛО документа

let divEnd =  document.createElement('div')  // в скобках имя тега
divEnd.innerHTML = 'конец документа (через append)'
document.body.append(divEnd) //! добавление в КОНЕЦ документа
// console.log(div2.innerHTML);














//! Задание 3 //?JS_DZ_Modul_2_Week_5
//!  Реализовать класс Employee, описывающий работника, и со
//! здать массив работников банка.
//!  Реализовать класс EmpTable для генерации html кода таблицы 
//! со списком работников банка. Массив работников необходимо 
//! передавать через конструктор, а получать html код с помощью 
//! метода getHtml().
//!  Создать объект класса EmpTable и вывести на экран результат 
//! работы метода getHtml().

let workers = document.querySelector('#workers') as HTMLDivElement

class Employee {
    name
    age
    city
    position
    constructor(name:string, age:number, city:string, position:string) {
            this.name = name
            this.age = age
            this.city = city
            this.position = position
    }
    pushInMassive() {
        workers.innerHTML+=`<div>${JSON.stringify(this)}<div>`
    }
} 



let worker1 = new Employee('Dima', 30, 'Sochi', 'programmer')
worker1.pushInMassive()

let worker2 = new Employee('Pasha', 27, 'Moscow', 'designer')
worker2.pushInMassive()


//!  Реализовать класс EmpTable для генерации html кода таблицы 
//! со списком работников банка. Массив работников необходимо 
//! передавать через конструктор, а получать html код с помощью 
//! метода getHtml().

let workerTable = document.querySelector('#workerTable') as HTMLElement

class EmpTable extends Employee {
    constructor (name:string, age:number, city:string, position:string) {
        super(name, age, city, position) 
    }
    getHTML() {
  workerTable.innerHTML+=`<tr><td>${this.name}</td>
  <td>${this.age}</td><td>${this.city}</td><td>${this.position}</td></tr>`
    }       
} 

let worker3 = new EmpTable('Slava', 35, 'Krasnodar', 'programmer')
worker3.pushInMassive()
worker3.getHTML()

let worker4 = new EmpTable('Sveta', 23, 'Voronezh', 'software tester')
worker4.pushInMassive()
worker4.getHTML()

let worker5 = new EmpTable('Dasha', 28, 'Peterburg', 'software tester')
worker5.pushInMassive()
worker5.getHTML()

let worker6 = new EmpTable('Lena', 25, 'Voronezh', 'programmer')
worker6.pushInMassive()
worker6.getHTML()

let worker7 = new EmpTable('Natasha', 27, 'Krasnodar', 'software tester')
worker7.pushInMassive()
worker7.getHTML()

 





// let add_worker = document.querySelector('#add_worker') as HTMLButtonElement // кнопка добавления работника

// let delete_inputs = document.querySelector('#clean_inputs') as HTMLButtonElement // кнопка добавления работника

// let delete_worker = document.querySelector('#delete_worker') as HTMLButtonElement // кнопка удаления работника

// let new_worker_form = document.querySelector('#new_worker_form') as HTMLFormElement // окошки, с вводимой информацией

// let table_with_workers = document.querySelector('#table_with_workers') as HTMLFormElement // таблица

// // console.log(new_worker_form.children[0]);
// // console.log(new_worker_form.children[1]);
// // console.log(new_worker_form.children[2]);
// // console.log(new_worker_form.children[3]);


// add_worker.addEventListener('click', ()=> {
//     console.log(new_worker_form.children[0].value);
//     table_with_workers.innerHTML+=`<tr>
//     <td>${new_worker_form.children[0].value}</td>
//     <td>${new_worker_form.children[1].value}</td>
//     <td>${new_worker_form.children[2].value}</td>
//     <td>${new_worker_form.children[3].value}</td>
//     </tr>`
// })

// delete_inputs.addEventListener('click', ()=> {
//     new_worker_form.children[0].value = ''
//     new_worker_form.children[1].value = ''
//     new_worker_form.children[2].value = ''
//     new_worker_form.children[3].value = ''
//     // console.log();
    
// })

// delete_worker.addEventListener('click', ()=> {
//     // console.log(table_with_workers.children[0]);
    
//     // table_with_workers.children[1].innerHTML=''
//     table_with_workers.lastChild.innerHTML = ''
// })

// console.log(table_with_workers.children);



let addElem = document.querySelector('#addElem') as HTMLDivElement

let prepand = document.createElement('div')
prepand.innerHTML = ' prepand'
addElem.prepend(prepand)


let append = document.createElement('div')
append.innerHTML = ' append'
addElem.append(append)

let before = document.createElement('div')
before.innerHTML = ' before'
addElem.before (before)

let after = document.createElement('div')
after.innerHTML = 'after'
addElem.after(after, document.createElement('br'))



let masive = ['fg', 'sgfh', 'fgfdg', 'werwt']
console.log(masive);



// document.body.insertAdjacentText('div', `<i>123</i>`)
// document.body.innerText= `<i>123</i>`
let sortTable = document.querySelectorAll('#workerTable tbody tr') 
let tableArr = Array.from(sortTable)
// tableArr.sort((el)=>(el.children[1], el.children[1])=> {
    // el.children[1] - el.children[1]})
// let tableAge = tableArr[3].children[1]
// console.log(tableArr[3].children[1]);



// console.log(cssClass.className);



// document.body.addEventListener('click', ()=> {
// document.body.classList.toggle('styleForbody')

// console.log(document.body.getAttribute('class')); //название класса
// console.log(document.body.className); // тоже название класса
// console.log(document.body.contains('styleForbody'));
// })






//!  Задание 3
//!  Реализуйте класс ExtentedArray, унаследовав его от стандарт
//! ного класса Array и добавив следующие методы:
//!  ■ метод getString(separator) – для получения строки со 
//! всеми элементами массива, перечисленными через ука
//! занный разделитель: запятая, тире, пробел и т. д.;
//!  ■ метод getHtml(tagName) – для получения строки с html 
//! кодом, где каждый элемент массива будет обернут в ука
//! занный тег (учтите, если указывается тег li, то все эле
//! менты дополнительно необходимо обернуть в ul).
//!  Создайте объект класса ExtentedArray, заполните его данны
//! ми и выведите на экран результаты работы методов getString() 
//! и getHtml().

let arrStr = document.querySelector('.ExtentedArr') as HTMLDivElement
let strWithInfo = ''

class ExtentedArray {
    text
    separate
    teg
    constructor(text:any, separate:any, teg:any) {
            this.text = text
            this.separate = separate
            this.teg = teg
    }
    getString() {
        let separatedText = this.text 
        strWithInfo = separatedText.split(`${this.separate}`).join(' | ')
         arrStr.innerHTML+= strWithInfo + ' - разделитель : "' + this.separate + '"' + '<br>' 
    }
    getHtml() {
        for (let i = 0; i < strWithInfo.split('|').length; i++) {
            if (this.teg=='li') {
                arrStr.innerHTML+=`<ul><${this.teg}>${strWithInfo.split('|')[i]}</${this.teg}</ul>`
            } else {
                arrStr.innerHTML+=`<${this.teg}>${strWithInfo.split('|')[i]}</${this.teg}> `
            }       
        }
    }
}



let str = new ExtentedArray('Через указанный разделитель: запятая, тире, пробел и т. д.', ',', 'li')
str.getString()
str.getHtml()

let str2 = new ExtentedArray('Вторая проверочная : строчка которая : проверяет', ':', 'div')
str2.getString()
str2.getHtml()




//! Задание 3
//!  Реализовать класс, описывающий новостную ленту. 
//! Класс должен содержать:
//!  ■ массив новостей;
//!  ■ get-свойство, которое возвращает количество новостей;
//!  ■ метод для вывода на экран всех новостей;
//!  ■ метод для добавления новости;
//!  ■ метод для удаления новости;
//!  ■ метод для сортировки новостей по дате (от последних но
//! востей до старых);
//!  ■ метод для поиска новостей по тегу (возвращает массив 
//! новостей, в которых указан переданный в метод тег).
//!  Продемонстрировать работу написанных методов.

let newsPage = document.querySelector('#newsPage') as HTMLDivElement
let newsArray = [['Consectetur, adipisicing elit ', '30.06.2020'], 
['Lorem ipsum dolor sit ', '20.08.2021'], 
['Esse ipsum qui eaque eius', '18.06.2019']
] as any

let accNews = newsArray.length
class newsLine {
    text
    date
    constructor (text:string, date:string) {
        this.text = text
        this.date = date
    }
    
    get quantatyNews () {
        return  newsPage.innerHTML+=`Количество новостей : ${accNews}`
    }

    showMassNews () {
        // console.log(this.text[0][1]);
        for (let i = 0; i < newsArray.length; i++)
             {
            newsPage.innerHTML+=`<div>Новость: ${newsArray[i][0]}; <br>
            Дата публикации: ${newsArray[i][1]}<br><br>
            </div>`
        }
        return newsPage.innerHTML
    }

    addNews() {
        newsArray.push([this.text, this.date])
        accNews++
    }

    deleteNews(num:number) {
        newsPage.children[num].innerHTML = ''
        accNews--
    }
    sortByDate() {
        let mass = [] as any
        for (let i = 0; i < newsArray.length; i++) {
            // .sort((a,b)=>{a-b})
            mass.push()
            let dates = newsArray[i][1].split('.').reverse().join('')
            // let a = newsArray[i]
            // let b = newsArray[i]
            console.log(...newsArray);
            
            newsPage.innerHTML+=`<div>[i]Новость: ${newsArray[i][0]}; <br>
            Дата публикации: ${newsArray[i][1]}<br><br>
            </div>`
        }
        
    }

}
let news1 = new newsLine ('jewsArray', '23.08.2019')
let news2 = new newsLine ('12345jewsArray', '15.06.2018')


news1.addNews()
news2.addNews()

news1.showMassNews() // потом show
news1.deleteNews(0) // delete потом show

news1.quantatyNews // показывает количество новостей 

news1.sortByDate()

console.log(news1.sortByDate());

console.log(newsArray[0]);

 

let table_calender = document.querySelector('#table_calender')as HTMLTableElement

console.log(table_calender);

let calender_day = new Date ('1991-03-28')
console.log(calender_day);

console.log(calender_day.getDate()); // календарный день
console.log(calender_day.getDay()); // день недели


console.log(calender_day.getDate()%7); // начало месяца
console.log(calender_day.getDay()-calender_day.getDate()%7+1);  // начало месяца


let coordinate = document.querySelector('#coordinate') as HTMLDivElement

document.addEventListener('mousemove', (e)=> {
    coordinate.innerHTML= `
    <br>
    по документу:
    ось Х = ${e.pageX} px
    ось Y = ${e.pageY} px
    <br>
    по окну:
    ось Х = ${e.clientX} px
    ось Y = ${e.clientY} px
    <br>
    ось Х = ${e.screenX} px
    <br>
    
    ` as any
    
    

})






let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};
console.log(data.Деревья);
