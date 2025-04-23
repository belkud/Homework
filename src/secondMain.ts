
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

        for (let i = 0; i < num; i++) {
            if (text[i]=='_') {
                symbols.innerHTML+=`<span style="color: ${this.color}; 
                opacity: ${1+i/num};">${text[i]}</span>`
            } else {
                symbols.innerHTML+=`<span style="color: ${this.color}; 
                opacity: ${1-i/num};">${text[i]}</span>`
            }
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

let marker1 = new Marker('red', 15)
marker1.print('1_2_3_4_5_6_9_8_8901234567890')


let marker2 = new Marker('orange', 25)
marker2.print('123456789')











