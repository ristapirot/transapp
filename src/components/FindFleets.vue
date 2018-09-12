<template>
    <v-container>
        <section>
            <v-layout
                column
                align-center
                justify-center
                class="">
                <div class="text-xs-center">
                    <h2 class="display-2">See how it works!</h2>
                    <h2 class="mt-3">Choose loading and unloading country!</h2>
                </div>
            </v-layout>
        </section>

        <section>
      <v-layout
        column
        wrap
        class="my-5"
      >
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
                  <div slot="header" class="title" @click="selectFleet(fleet)"><span class="blue--text headline lighten-1 text-capitalize font-weight-medium">{{ fleet.loadingCountry }}</span>, {{ fleet.loadingCity }} - <span class="blue--text font-weight-medium headline text-capitalize lighten-1">{{ fleet.unloadingCountry }}</span>, {{ fleet.unloadingCity }}</div>
                  <v-card justify-center>
                    <v-card-text class="title"><v-icon>euro_symbol</v-icon> {{ fleet.price }}</v-card-text>
                    
                    <v-card-text class="title" @click="showFleet(fleet)"><v-icon>calendar_today</v-icon> {{ fleet.loadingDate.slice(0,10) }}</v-card-text>
                    
                    <v-dialog
                      v-model="dialog"
                      width="500"
                    >

                      <v-card-text 
                        class="title"
                        slot="activator"  
                      ><v-icon>person</v-icon> {{ fleet.createdBy.name }} <br> <span class="blue--text lighten-2 caption">Click to see details</span></v-card-text>

                      <v-card>
                        <v-card-title
                          class="headline grey lighten-2"
                          primary-title
                        >
                          <v-icon class="">person</v-icon>  {{selectedFleet.createdBy.name}}
                        </v-card-title>
                        
                        <v-card-text>
                          <span class="font-weight-bold blue--text lighten-2">Name: </span>{{selectedFleet.createdBy.fullName}}
                        </v-card-text>

                        <v-card-text>
                          <v-icon class="blue--text lighten-2">business</v-icon> {{selectedFleet.createdBy.company}}
                        </v-card-text>

                        <v-card-text>
                          <v-icon class="blue--text lighten-2">email</v-icon> {{selectedFleet.createdBy.email}}
                        </v-card-text>

                        <v-card-text>
                          <v-icon class="blue--text lighten-2">phone</v-icon> {{selectedFleet.createdBy.phone}}
                        </v-card-text>

                        <v-card-text>
                          <span class="font-weight-bold blue--text lighten-2">Skype:</span> {{selectedFleet.createdBy.skypeName}}
                        </v-card-text>
                        
                      </v-card>
                    </v-dialog>
                    
                    <v-card-text class="title"><v-icon>view_agenda</v-icon> {{ fleet.weight }} tons</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data () {
      return {
        loginUser: '',
        loginPassword: '',
        loading: false,
        loading2: false,
        items: [],
        items2: [],
        newFleets: [],
        selectedFleet: {
          createdBy: {
            name: '',
            fullName: '',
            company: '',
            skypeName: '',
            email: '',
            phone: ''
          }
        },
        search: null,
        search2: null,
        select: null,
        select2: null,
        dialog: false
      }
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
    computed: {
      ...mapGetters([
        'getCountries',
        'getFleets'
      ])
    },
    methods: {
      ...mapActions([
        'getFleetsToStore'
      ]),

      selectFleet(fleet) {
        this.selectedFleet = fleet
        console.log(this.selectedFleet)
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

<style>
</style>


