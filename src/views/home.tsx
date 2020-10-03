import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  setup (p, ctx) {
    return () => {
      return (
        <div>
          <div class="row">
            <div class="col s12 m4 l4">
              <div class="card">
                <div class="card-content">
                  <span class="card-title">Card Title</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                  <a href="#" class={'btn blue lighten-1'} style={{ margin: '20px' }}>This is a link</a>
                  <a href="#" class="btn blue darken-1">This is a link</a>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col s12 m4 l4">
              <div class="card">
                {/* <div class={'card-image'}>
                  <img src="https://materializecss.com/images/sample-1.jpg" class="img-responsive">
                  <span class="card-title">Card Title</span>
                </div> */}
                <div class="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
})
