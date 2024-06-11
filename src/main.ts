import './style.css'











// await fetch('https://jsonplaceholder.typicode.com/photos')


// const url = fetch('http://localhost:5173/Homework/')

const persons = document.querySelector('#persons') as HTMLDivElement



// let formData = new FormData([form])


const name = document.querySelector('#name') as HTMLInputElement
console.log(name);

name.addEventListener('click', ()=> {
   
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








const url = fetch('https://api.github.com/users/belkud')


async function gitPhoto () {
    try {
        const response = await url
  
        //! Проверка статуса сервера
        if(response.ok) {
            setTimeout(()=> {
                persons.innerHTML += `<div id="request">Запрос выполнен</div>
                <img id="avatar" src="https://avatars.githubusercontent.com/u/126806058?v=4" alt="">`
            },0) 
            // setTimeout(() => {
            //    persons.innerHTML = `<div id="request">Запрос выполнен</div>` 
            // }, 6000);
        } else {
            persons.innerHTML += 'Ошибка сервера <br>'     
        }
        const photo = await response.blob()
        console.log(response.ok);
        console.log(response.headers.get('Content-length'));
        console.log(response.headers.get('Content-type'));
        
        console.log(photo);
        
    } catch (error:any) {
        persons.innerHTML += `ошибка: ${error.message}`
    }
}

gitPhoto()

const check = document.querySelector('#check') as HTMLDivElement
check.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>')

const pig = document.querySelector('#pig') as HTMLDivElement
pig.style.backgroundColor = 'aqua'
pig.style.border = '2px solid red'

//! два способа написания
pig.style.height = '250px'
// pig.style.height = 250 + 'px'

pig.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>')
pig.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>')
pig.insertAdjacentHTML('afterend', '<p>afterend</p>')
pig.insertAdjacentHTML('beforeend', '<p>beforeend</p>')

pig.innerHTML +='<img src="public/vite.svg">'



let divStart = document.createElement('div') as HTMLDivElement
divStart.innerHTML = 'DIV создан в ts prepend'
divStart.style.backgroundColor = 'pink'
divStart.style.color = 'aliceblue'

// <img src=https://ir.ozone.ru/s3/multimedia-1/wc500/6847439437.jpg>






let divEnd = document.createElement('div') 
divEnd.innerHTML = 'создан в ts, метод prepand'
divEnd.style.color = 'white'
divEnd.style.backgroundColor = 'yellowgreen'
pig.append(divEnd)


const url2 = fetch('https://api.github.com/users/belkud')
.then(mylog=>mylog.json())
.then(login =>console.log(login.login))
console.log(url2);














async function learnJS () {
    const response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    const json = await response.json()
    // console.log(json);
    
    
}

learnJS()
















async function users() {
    try {
        
        const resp = await fetch('https://jsonplaceholder.typicode.com/users', {
                method:'POST',
                headers: {
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify({
                            name: "Mary",
                        formData: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                })
                
        const json = await resp.json()
        console.log(json);
        
                
                //! splice - выводит по id
                // console.log(json.splice(5,10));
                let key
                for (key in json) {
                    json[key]
                    // console.log(json[key]);
                } 
            } catch (error) {
                console.log(error);
                
            }
        }
    
        users()

    
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

stars.addEventListener('click', (event)=> {
    const target = event.target as HTMLDivElement
    
    if (target.dataset.set) {
        let x = +target.dataset.set 
        for (let i of stars.children) {
            const el = i as HTMLDivElement
         if (el.dataset.set && +el.dataset.set<=x) {
            el.style.color = 'white'
        } else {
            el.style.color = 'black'
         }    
        }
    }
    
})

