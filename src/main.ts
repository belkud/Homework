import './style.css'


const home = document.querySelector ('#home') as HTMLDivElement
const app = document.querySelector ('#app') as HTMLDivElement
  setInterval(() => {
    if (home.style.color =='orange') {
      home.style.color= 'greenyellow'
      app.innerHTML = `greenyellow`
      app.style.color= 'greenyellow'
    } else {
      home.style.color = 'orange'
      app.innerHTML = `orange`
      app.style.color = 'orange'
    }
    
  }, 1000);
   
  

console.log(home.style.color);


