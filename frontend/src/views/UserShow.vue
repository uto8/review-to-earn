<template>
  <v-app>
    <div class="d-flex">
      <NavBar/>
      <div class="container">
        <h4>{{name}}</h4>
        <small>{{email}}</small>
        <v-toolbar
          flat
          prominent
        >
          <template v-slot:extension>
            <v-tabs
              v-model="tabs"
              centered
            >
              <v-tab>
                <v-icon>mdi-message-text</v-icon>
              </v-tab>
              <v-tab>
                <v-icon>mdi-heart</v-icon>
              </v-tab>
              <v-tab>
                <v-icon>mdi-account-box</v-icon>
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tabs">
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                自分の投稿内容
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-title class="text-h5">
                自分のいいねした投稿
              </v-card-title>
              <v-card-text>
                <p>
                  Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.
                </p>

                <p>
                  Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.
                </p>

                <p class="mb-0">
                  Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-title class="text-h5">
                 自分のその他
              </v-card-title>
              <v-card-text>
                <p>
                  Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus arcu quis ante.
                </p>

                <p class="mb-0">
                  Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>
  </v-app>
</template>
<script>
  // import axios from 'axios';
  import NavBar from '../components/NavBar.vue'
  export default {
    data () {
      return {
        name: window.localStorage.getItem('name'),
        email: window.localStorage.getItem('uid'),
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
    components: {
      NavBar
    }
  }
</script>
<style>
  .v-application--wrap{
    display: flex;
  }
</style>
