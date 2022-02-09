import { defineComponent, reactive } from 'vue'
import * as Comps from 'vuetify/components'

const Vuetify = Comps as any

export default defineComponent({
  name: 'HelloWorld',
  setup () {
    const state = reactive({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader'
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify'
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify'
        }
      ],
      importantLinks: [
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com'
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify'
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs'
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify'
        }
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com'
        },
        {
          text: 'Roadmap',
          href: 'https://vuetifyjs.com/en/introduction/roadmap/'
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
        }
      ]
    })

    return () => {
      return (
        <Vuetify.VContainer>
          <Vuetify.VRow class={'text-center'}>
            <Vuetify.VCol cols={'12'}>
              <Vuetify.VImg
                src={require('../assets/logo.svg')}
                class={'my-3'}
                contain
                height={'200'}
              />
            </Vuetify.VCol>

            <Vuetify.VCol class={'mb-4'}>
              <h1 class={'display-2 font-weight-bold mb-3'}>
                Welcome to Vuetify V3 Alpha
              </h1>

              <p class={'subheading font-weight-regular'}>
                For help and collaboration with other Vuetify developers,
                <br />
                please join our online
                <a href={'https://community.vuetifyjs.com'} target={'_blank'}>
                  Discord Community
                </a>
              </p>
            </Vuetify.VCol>

            <Vuetify.VCol class={'mb-5'} cols={'12'}>
              <h2 class={'headline font-weight-bold mb-5'}>What's next?</h2>

              <Vuetify.VRow justify={'center'}>
                {state.whatsNext.map((next) => {
                  return (
                    <a
                      href={next.href}
                      class={'subheading mx-3'}
                      target={'_blank'}
                    >
                      {next.text}
                    </a>
                  )
                })}
              </Vuetify.VRow>
            </Vuetify.VCol>

            <Vuetify.VCol class={'mb-5'} cols={'12'}>
              <h2 class={'headline font-weight-bold mb-5'}>Important Links</h2>

              <Vuetify.VRow justify={'center'}>
                {state.importantLinks.map((link) => {
                  return (
                    <a
                      href={link.href}
                      class={'subheading mx-3'}
                      target={'_blank'}
                    >
                      {link.text}
                    </a>
                  )
                })}
              </Vuetify.VRow>
            </Vuetify.VCol>

            <Vuetify.VCol class={'mb-5'} cols={'12'}>
              <h2 class={'headline font-weight-bold mb-5'}>Ecosystem</h2>
              <Vuetify.VRow justify={'center'}>
                {state.ecosystem.map((eco) => {
                  return (
                    <a
                      href={eco.href}
                      class={'subheading mx-3'}
                      target={'_blank'}
                    >
                      {eco.text}
                    </a>
                  )
                })}
              </Vuetify.VRow>
            </Vuetify.VCol>
          </Vuetify.VRow>
        </Vuetify.VContainer>
      )
    }
  }
})
