




const nam = ()=> {
    console.log('Vladimir');
}

const surname = ()=> {
    console.log('Kudarenko');
}


let mounthMounth = {
    январь: 'первый',
    февраль: 'второй',
    март: 'третий',
    апрель: 'четвёртый',
    май: 'пятый',
    июнь: 'шестой',
    июль: 'седьмой',
}


function multNumbers(a:any, b:any) {
    return console.log('ответ = ' + Number(a*b))
}

let objObj = {
    ответ: multNumbers
}

export   {nam, surname, mounthMounth, multNumbers, objObj}