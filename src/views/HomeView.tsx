import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld'

export default defineComponent({
  name: 'HomeView',
  setup () {
    return () => {
      return <HelloWorld/>
    }
  }
})
