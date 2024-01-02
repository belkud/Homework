import './style.css'


// await fetch('https://jsonplaceholder.typicode.com/photos')


// const url = fetch('http://localhost:5173/Homework/')

const persons = document.querySelector('#persons') as HTMLDivElement











persons.innerHTML =''


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
            document.body.append('yyy')
            // setTimeout(() => {
            //    persons.innerHTML = `<div id="request">Запрос выполнен</div>` 
            // }, 6000);
        } else {
            persons.innerHTML += 'Ошибка сервера <br>'     
        }
        const photo = await response.blob()
        console.log(response.ok);
        console.log(response.status);
        
        console.log(photo);
        
    } catch (error:any) {
        persons.innerHTML += `ошибка: ${error.message}`
    }
}

gitPhoto()

const url2 = fetch('https://api.github.com/users/belkud')
.then(mylog=>mylog.json())
.then(login =>console.log(login.login))

async function learnJS () {
    const response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    const json = await response.json()
    console.log(json);
    
    
}

learnJS()
















async function users() {
    try {
        
        const resp = await fetch('https://jsonplaceholder.typicode.com/users', {
            //     method:'POST',
            //     headers: {
                //         "Content-type":"application/json"
                //     },
                //     body:JSON.stringify({
                    //         name: "Mary"
                    // })
                })
                
                const json = await resp.json()
                
                //! splice - выводит по id
                console.log(json.splice(5,10));
                let key
                for (key in json) {
                    json[key]
                    console.log(json[key]);
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

//   const json = await response.text()
//   console.log(json);
  
  
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