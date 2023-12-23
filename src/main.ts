import './style.css'


const home = document.querySelector ('#home') as HTMLDivElement
// home.addEventListener ('click', ()=> {
  setInterval(() => {
    if (home.style.color =='orange') {
      home.style.color= 'greenyellow'
    } else {
      home.style.color = 'orange'
    }
    
  }, 1000);
   
  
// })

