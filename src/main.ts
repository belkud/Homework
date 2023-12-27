import './style.css'


const digitals = document.querySelector ('#digitals') as HTMLDivElement

const digitalColor = document.querySelector ('#digitalColor') as HTMLDivElement
  setInterval(() => {
    if (digitals.style.color =='orange') {
      digitals.style.color= 'greenyellow'
      digitalColor.innerHTML = `greenyellow`
      digitalColor.style.color= 'greenyellow'
    } else {
      digitals.style.color = 'orange'
      digitalColor.innerHTML = `orange`
      digitalColor.style.color = 'orange'
    }
    
  }, 10000);
   
  digitalColor.addEventListener ('click', ()=>{console.log(46);
  })

// console.log(digitals.style.color);




// fetch ('https://jsonplaceholder.typicode.com/users')

async function ozon() {
  const response = await fetch ('https://www.ozon.ru/category/smartfony-15502/')
  console.log(response);

  const json = await response.text()
  // console.log(json);
  console.log(json);
  
  
}
ozon()

digitals.innerHTML += `
<img src=https://ir.ozone.ru/s3/multimedia-1/wc500/6847439437.jpg>
<img id="avatar" src="https://avatars.githubusercontent.com/u/126806058?v=4 " alt="" srcset="">
`

// console.log('https://www.ozon.ru/category/smartfony-15502/')


// console.log(
//   fetch('https://www.ozon.ru/category/smartfony-15502/')
//   );