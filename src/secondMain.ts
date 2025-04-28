
console.clear()


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

const dog1 = new Dog ('Spark', 'orange')
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
        console.log(num);

        symbols.innerHTML+='<br>'

        marker_info.innerHTML += `
        Цвет маркера:${this.color} <br>
        Количество введенных символов: ${this.ink}<br>
        Символов не напечаталось: ${text.length - this.ink} <br>
        
        <br>
        `
}
}

let marker1 = new Marker('red', 45)
marker1.print('1_  s dfg sdf sdf dfsdfsdf 2_3_4_5_6_')


let marker2 = new Marker('orange', 25)
marker2.print('12345678 90 ')



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


console.log(String('а').codePointAt(0));
console.log(String('я').codePointAt(0));


let firstLetter = String('а').codePointAt(0) as any
let lastLetter = String('я').codePointAt(0) as any

// let acc = 0
// setInterval(() => {
// for (let i = firstLetter; i <= lastLetter; i++) {
//         acc++;
//     console.log(acc);           
// }
// }, 10000);




