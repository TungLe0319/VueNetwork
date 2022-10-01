import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'

const root = createApp(App)
registerGlobalComponents(root)
  import 'vuesax3/dist/vuesax.css'; //Vuesax styles
   import Vuesax from 'vuesax3';
root
  .use(router).use(Vuesax)
  .mount('#app')

  
 
   //npm i vuesax3
   //root.use(router).use(Vuesax).mount('#app');

    // import { defineComponent } from 'vue'
    //  import { NButton , NCard, NCarousel ,N} from 'naive-ui'
   
    //  export default defineComponent({
    //    components: {
    //      NButton, NCard, NCarousel
    //    }
    //  })
     // note to use this in a template you just need to
     // npm i -D naive-ui  
     // they look like <n-button></n-button>
   //to use the ones you want go into import and 
   //type N and you will see a list of option
   