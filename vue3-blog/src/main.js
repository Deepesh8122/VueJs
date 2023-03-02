import { createApp } from 'vue'
import App from './App.vue'

import router from './routes'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


// App.directives('h_Size',{
//     bind(el,binding){
//         el.style.fontSize = '60px'

//         if(binding.vale == 'small'){
//             el.style.fontSize = '20px'
//         }else  if(binding.vale == 'normal'){
//             el.style.fontSize = '26px'
//         } else if(binding.vale == 'medium'){
//             el.style.fontSize = '32px'
//         } else if (binding.vale == 'large'){
//             el.style.fontSize = '70px'
//         } else {
//             el.style.fontSize = '22'
//         }
//     }
// })

createApp(App).use(router).mount('#app')
