import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup (p, ctx) {
    const state = reactive({
    })

    return () => {
      return (
        <div id="app">
          <router-view/>
        </div>
      )
    }
  }
})
