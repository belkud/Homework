
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



function Dog (Nickname:string, color:string) {
    this.Nickname = Nickname,
    this.color = color
    this.welcome = ()=> {
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
class Aircraft  {
    company = 'Boeng'
    country = 'Russia'
    constructor(model:any, age:number) {
        this.model = model
        this.age = age
        // this.details = {
        //     wheels : 'колёса'
        // }
    }
    fly () { //!  метод без параметров
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
        return  `${this._age}`
    }
    
    set age(value:any) { 
        if(value<10) {
                this._age = value + ' лет, самолет новый'; 
            //  return
        } else {
            this._age = value + ' лет, самолет старый'
        // return
        }   
    }

    }
    let aircraftFirst = new Aircraft(1777, 15)
    console.log(aircraftFirst);
    
    

    


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
    name : 'transport',
    glass : true,
    wheels: true,
    brake () {
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
    name : 'bus',
    stear : true,
    drivers : false,
    __proto__: transport, //! первый способ записи 'proto'
}

let car = {
    name : 'car',
    color: 'gray',
    odometr: '100.000',
    __proto__:bus,
} as any

let bycicle = {
    name : 'bycicle',
    cost : 18000,
    color : 'red',
    brake () {
        return `давайте ремонтировать`
    },

} as any

bycicle.__proto__  = car //! второй способ записи

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
    display : 15.6,
}
// Object.getPrototypeOf(note) = bycicle


let animal = {
    eat: true,
}


function Anim (name:string) {
    this.name = name
}
Anim.prototype = animal

let cat = new Anim ('мяу')
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


let extraAnim  = {
    eats:false,
    runs:true,
    toString() {
        return 'что-то делает'
    }
}

function Fox (name:string, forest:string) {
    this.name = name
    this.forest=forest
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

    Number.prototype.show = ()=>{console.log('Добавили новый метод');
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

    constructor(fontSize:any, color:any, fontFamily:string){
        this.fontSize = fontSize
        this.color = color
        this.fontFamily = fontFamily
    }
    print(text:any) {
        printText.innerHTML+= `
        <div style="font-size: ${this.fontSize}; color: ${this.color}; 
        font-family: ${this.fontFamily}; background:${this.background}">${text}</div>`
    }
}

let writeText1 = new PrintMaсhine('2em', 'red', 'Franklin Gothic Medium')
writeText1.print('Печатаем тестовый текст')

let writeText2 = new PrintMaсhine('1.5em', 'green', 'Franklin Gothic Medium')
writeText2.print('Печатаем ещё один текст')



//! Задание 1 // JS_PZ_Modul_2_Week_5
//! Реализовать класс Button, который содержит ширину, высоту, 
//! текст кнопки и метод showBtn(), который выводит кнопку на экран 
//! с помощью тега button и функции document.write(). 


class Button {
    width:string
    color:any
    background:any
    value:any
    constructor(width:any, color:any, background:any, value:any) {
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
let button1 = new Button ('120px', 'white', 'red', 'Нажми меня')
button1.showBtn()

let button2 = new Button ('80px', 'red', 'black', 'Удалить')
button2.showBtn()

console.log(window);


console.log(button1);



class Lights extends Button {
//     brightness:any
    // constructor (brightness:any) {
    //     // this.brightness = brightness
    //     this.color = color


    // }






 delete() {
    super.delete()
 }

 //! если метод, то просто пишем, без 'прекрас'

 delete2() {
    return 'удалить'
 }
}

let light1 = new Lights()
console.log(light1.delete());
console.log(light1.delete2());


let input_marker = document.querySelector('#input_marker') as HTMLInputElement
input_marker.addEventListener('input', (e)=>{
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




console.log(Button.prototype);





















//!!!!!!!!!!!!!!!!!!!!!!!!!!! Наследование классов !!!!!!!!!!!!!!!!!!!!!!!!!1


class City {
    name
    age
    constructor(name='nnnnnn', age =1000000) { //! задание параметров по умолчанию
        this.name = name 
        this.age = age
    }
    welcome() {
        return `Добро пожаловать в ${this.name} `
    }
    population = (people:number)=>{
        return `население города ${this.name} = ${people} человек`
    }
}

class Country extends City {
    speed
    country
    constructor (name:string,  country:string, age=55555, speed=100) { //! задание параметров по умолчанию
        super(name, age)  //! super работает ТОЛЬКО внутри нашего конструктора
        this.country = country
        this.speed = speed
    }
    run () {
        return `${this.name} ${super.welcome()} едем со скоростью ${this.speed}` //!можем
        //! возвращать родительский метод
    }
}


let Msc = new City('Moscow')
console.log(Msc);

let Spb = new City('Saint-Petersburg', 300)
console.log(Spb);

let msc2 = new Country ('Moscow2','Russia')
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
    constructor(color:string, ink:number){
        this.color = color
        this.ink = ink //количество чернил (на 50 символов)
    }

    print (text:string) {
        let num = this.ink

        for (let i = 0; i < text.length; i++) {
            symbols.innerHTML+=`<span style="color: ${this.color}; 
            opacity: ${1-i/num};">${text[i]}</span>`
        }
        console.log(text.length);

        symbols.innerHTML+='<br>'
        
        marker_info.innerHTML += `
        Цвет маркера:<div style="color:${this.color}">${this.color}</div> <br>
        Количество введенных символов: <span style="color: red; font-size:25px">
        ${text.length<this.ink ? text.length : this.ink}</span><br>   
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
    constructor(className:string, cssArray:any[]) {
        this.className = className
        this.cssArray = cssArray
    }
    
    getCss() {  //! метод для установки стиля;
        for (const obj of this.cssArray) { //! массив закидываем в цикл
            for (const key in obj) { //! объекты закидываем в цикл
                string += key + ':' + obj[key] + '; ';
            }    
        }
        cssClass.innerHTML+=`
        <div id="${this.className}" style="${string}"> Название класса: ${this.className} <br><br> </div>`
    }
    
    writeStyle() { //! метод для вывода стилей текстом в HTML
        cssClass.innerHTML+=`Стили класса ${this.className}: ${string}`
    }

    deleteStyle(num:number) {
        delete this.cssArray[num]
        // cssClass.innerHTML = '' //! вообще все полностью удалить
    }
    
}

let class1 = new CssClass('block1', [
    {background:'orange'},
    {color:'blue'}, 
    {margin:'30px'}, 
    {width: '120px'},
    {display: 'inline-block'},
])
class1.getCss()
class1.writeStyle()


let class2 = new CssClass('block2', [
    {background:'pink'},
    {color:'green'}, 
    {padding:'5px'}, 
    {width: '300px'},
    {height: '300px'},
    {display: 'inline-block'},
])
class2.deleteStyle(1) //! метод удаления должен идти первым
class2.getCss()
class2.writeStyle()

























function findInd (str:string, symb:any) {
    let mass = str.split('')
    let acc = 0
    let accIndex = ''
    for (let i = 0; i < mass.length; i++) {
        if (str[i]==symb) {
            acc+=symb.length
            accIndex+= i + ' ' 
        }
    }

    return `буква '${symb}' встречается ${acc} ${acc>=2 && acc<=4 ? 'раза' : 'раз'} на индексах: ${accIndex}`
}

console.log(findInd('Написать функцию, которая принимает строку и символ и выводит индексы, по которым находится этот символ в строке', 'е'))
console.log(findInd('которым находится этот символ в старкоторым находится этот символ в старкоторым находится этот символ в староке', 'а'))



let test  = 10
console.log(test < 5 ? 'число большое' : 'число маленькое');








// Задча 10. Написать функцию, которая принимает строку и символ
// и выводит индексы, по которым находится этот символ в
// строке. Также вывести, сколько всего раз встречается этот
// символ в строке.

function findIn (str:string, symb:any) {
let acc = 0
let mass = [] as any
    str.split('').forEach((el,i)=> {
        if (el==symb) {
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

console.log(`документ отрендерился за ${Number(date2)-Number(date1)} миллисекунды`);


let date3 = new Date() 
console.log(date3.getTime()); //! перевод в timestamp

let date4 = date3.getTime() 
console.log(new Date(date4)); //! перевод обратно в дату !

let date5 = new Date('1991-03-28') //! первый способ записи
console.log(date5);
console.log(date5.getDay());

let date6 = new Date(1991,2,28)  //! второй способ записи
console.log(date6);


let date7 = new Date()
console.log(date7);

date7.setHours(36)
console.log(date7);

// date7.setDate(20)
// console.log(date7);

let newYear = new Date(2026,0,1) //!считаем дни до Нового года
console.log(newYear);

let quantityDays = Number(newYear) - Number(date3)  
console.log(`до нового года осталось: ${parseInt(quantityDays/24/60/60/1000)} дней`);

console.log(Date.parse('2019-10-05')); //! :DDD




