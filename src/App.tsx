import { defineComponent } from 'vue'
import * as Comps from 'vuetify/components'

const Vuetify = Comps as any

export default defineComponent({
  name: 'App',
  setup () {
    return () => {
      return (
        <Vuetify.VApp>
          <Vuetify.VMain>
            <router-view />
          </Vuetify.VMain>
        </Vuetify.VApp>
      )
    }
  }
})
