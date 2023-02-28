import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

// import router from './routes'


Vue.config.productionTip = false


// Vue.filter('uCase',function(val) {
//   return val.toUpperCase();
// })
// Vue.filter('dollerToINR',function(val){
//   return val*70
// })
// Vue.filter('INRTodoller',function(val){
//   return val/70
// })

Vue.directive('h_Size',{
  bind(el,binding){
    if(binding.value=='small'){
      el.style.fontSize='1rem'
    }
    else if(binding.value=='normal'){
      el.style.fontSize='22px'
    }
    else if(binding.value=='medium'){
      el.style.fontSize='30px'
    }
    else if(binding.value=='large'){
      el.style.fontSize='42px'
    }
    else if(binding.value==this.value){
      el.style.fontSize=this.value
    }
    else {
      el.style.fontSize='20px'
    }
  }
})



new Vue({
  // router: router,
  // vuetify,
  render: h => h(App),
}).$mount('#app')
