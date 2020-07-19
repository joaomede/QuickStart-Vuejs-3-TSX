import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup (p, ctx) {
    return () => {
      return (
        <div id={'app'}>
          <router-view/>
        </div>
      )
    }
  }
})
