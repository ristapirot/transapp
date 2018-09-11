<template>
  <v-content>
    <section>
      <v-parallax src="https://images.pexels.com/photos/37728/pexels-photo-37728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" height="700">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="../assets/logo.png" class="logo" alt="Pirokom" height="200">
            <h1 class="white--text mb-2 display-2 text-xs-center">Trans<span class="blue--text lighten-1">App</span>.com</h1>
            <!-- <div class="subheading mb-3 text-xs-center">Find fleet, fast</div> -->
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
            >
              get started
            </v-btn>
          </v-layout>
        </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="display-2">See how it works!</h2>
            <h2 class="mt-3">Choose loading and unloading country!</h2>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-x2>
            <v-layout row wrap align-center justify-center>
              <v-flex xs12 md5 class="mx-1 my-1">
                <v-toolbar
                  dark
                  color="blue lighten-2"
                >
                  <v-toolbar-title>Loading place</v-toolbar-title>
                  <v-autocomplete
                    :loading="loading"
                    :items="items"
                    :search-input.sync="search"
                    v-model="select"
                    cache-items
                    class="mx-2"
                    flat
                    clearable
                    hide-no-data
                    hide-details
                    label="Select loading place?"
                    solo-inverted
                    @change="searchPlace"
                  ></v-autocomplete>
                </v-toolbar>
              </v-flex>
              <v-flex xs12 md5 class="mx-1 my-1">
                <v-toolbar
                  dark
                  color="blue lighten-2"
                >
                  <v-toolbar-title>Unloading place</v-toolbar-title>
                  <v-autocomplete
                    :loading="loading"
                    :items="items"
                    :search-input.sync="search2"
                    v-model="select2"
                    cache-items
                    class="mx-2"
                    flat
                    clearable
                    hide-no-data
                    hide-details
                    label="Select unloading place?"
                    solo-inverted
                    @change="searchPlace"
                  ></v-autocomplete>
                </v-toolbar>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12>
          <v-container>
            <v-layout justify-center>
              <v-flex xs12 md6>
                <v-expansion-panel>
                <v-expansion-panel-content
                  v-for="(fleet,i) in newFleets"
                  :key="i"
                >
                  <div slot="header" class="title"><span class="blue--text headline lighten-1 text-capitalize font-weight-medium">{{ fleet.loadingCountry }}</span>, {{ fleet.loadingCity }} - <span class="blue--text font-weight-medium headline text-capitalize lighten-1">{{ fleet.unloadingCountry }}</span>, {{ fleet.unloadingCity }}</div>
                  <v-card justify-center>
                    <v-card-text class="title"><v-icon>error</v-icon> Login to see details</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    
    <section>
      
        <v-layout 
          column
          wrap
          align-center
          justify-center
          class="blue lighten-2 mt-5 py-5"
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center display-1">
              <h2>You need to login to see fleet details! It is <span class="white--text">FREE</span>!</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-x2>
              <v-layout row wrap align-center justify-center>
                <v-flex xs12 md4 class="mx-4 my-4">
                  <h1 class="white--text mb-2 display-2 text-xs-center my-4">Have an account, login!</h1>
                  <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                      <v-toolbar-title>Login</v-toolbar-title>
                      <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                      <v-form>
                        <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="loginUser"></v-text-field>
                        <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="loginPassword"></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="userLogin">Login</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4 class="mx-4 my-4">
                  <h1 class="white--text mb-2 display-2 text-xs-center my-4">Don't have? Register!</h1>
                  <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                      <v-toolbar-title>Register</v-toolbar-title>
                      <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                      <v-form>
                        <v-text-field prepend-icon="person" name="user" label="Login" type="text" v-model="registerUser"></v-text-field>
                        <v-text-field prepend-icon="email" name="email" label="Email" type="email" v-model="registerEmail"></v-text-field>
                        <v-text-field id="passwordRegister" prepend-icon="lock" name="passwordRegister" label="Password" type="password" v-model="registerPassword"></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="userRegister">Register</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
    </section>

    <section>
      <v-layout 
        class="grey darken-3 py-5" 
        justify-center 
        align-center
        column
      >
        <v-flex xs12 class="white--text display-2">
          <p>Contact us</p>
        </v-flex>

        <v-flex xs12>
          <v-list class="transparent">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon class="blue--text text--lighten-2">phone</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="white--text">+38166450066 - Nemanja, CEO</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon class="blue--text text--lighten-2">email</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="white--text">nemanja@transapp.com</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </section>
  </v-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      loginUser: '',
      loginPassword: '',
      loading: false,
      loading2: false,
      items: [],
      items2: [],
      newFleets: [],
      fleets: [],
      search: null,
      search2: null,
      select: null,
      select2: null,
      registerUser: '',
      registerEmail: '',
      registerPassword: ''
    }
  },
  computed: {
    ...mapGetters([
      'getLoggedUser',
      'getCountries',
      'getFleets'
    ])
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    },
    search2 (val) {
      val && val !== this.select2 && this.querySelections(val)
    }
  },
  created () {
    this.getFleetsToStore()
  },
  methods: {
    ...mapActions([
      'login',
      'register',
      'getFleetsToStore'
    ]),

    userLogin () {
      if (this.loginUser === '' || this.loginPassword === '') {
        return alert('Fill all fields!')
      }
      this.login({
        name: this.loginUser,
        password: this.loginPassword
      }).then(() => this.$router.push('/dashboard/find-fleet'))
    },

    userRegister () {
      var newUser = {
        name: this.registerUser,
        password: this.registerPassword,
        email: this.registerEmail,
        phone: '',
        skypeName: '',
        fullName: '',
        company: ''
      }

      this.register(newUser)
    },

    querySelections (v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.getCountries.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
    searchPlace () {
      if (this.select) {
        this.newFleets = this.getFleets.filter(el => el.loadingCountry === this.select)
      }

      if (this.select2) {
        this.newFleets = this.getFleets.filter(el => el.unloadingCountry === this.select2)
      }

      if (this.select && this.select2) {
        this.newFleets = this.getFleets.filter(el => el.loadingCountry === this.select && el.unloadingCountry === this.select2)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1 {
  text-align: center;
}

h2 {
  text-align: center;
  color: black;
  font-weight: 300;
  line-height: 1em;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

p {
  text-align: center;
}

.v-parallax__image {
  filter: blur(5px) opacity(0.85);
}
</style>
