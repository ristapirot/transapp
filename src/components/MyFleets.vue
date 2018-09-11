<template>
    <section>
        <v-layout>
            <v-expansion-panel>
                <v-expansion-panel-content
                    v-for="(fleet,i) in getFleetsByUser"
                    :key="i"
                >
                    <div slot="header" class="title"><span class="blue--text headline lighten-1 text-capitalize font-weight-medium">{{ fleet.loadingCountry }}</span>, {{ fleet.loadingCity }} - <span class="blue--text font-weight-medium headline text-capitalize lighten-1">{{ fleet.unloadingCountry }}</span>, {{ fleet.unloadingCity }}</div>
                    <v-card justify-center>
                    
                    <v-layout
                        column
                        align-center
                        justify-center
                        class="mx-3"
                        >
                        <v-form ref="form" lazy-validation>
                            <v-toolbar
                                dark
                                color="blue lighten-2"
                                class="my-2 py-3">
                                <v-autocomplete
                                    :items="getCountries"
                                    item-text="name"
                                    color="white"
                                    label="Loading country"
                                    id="loadingCountryId"
                                    :placeholder="fleet.loadingCountry"
                                    v-model="loadingCountry"
                                    :rules="[v => !!v || 'Item is required']"
                                    clearable
                                    class="mx-2"
                                ></v-autocomplete>
                                <v-text-field
                                    label="Loading city"
                                    :placeholder="fleet.loadingCity"
                                    v-model="loadingCity"
                                    id="loadingCityId"
                                    :rules="[v => !!v || 'Item is required']"
                                    class="mx-2"
                                    color="white"
                                >
                                </v-text-field>
                            </v-toolbar>
                            <v-toolbar 
                                dark
                                color="blue lighten-2"
                                class="my-2 py-3">
                                <v-autocomplete
                                    :items="getCountries"
                                    item-text="name"
                                    color="white"
                                    label="Unloading country"
                                    :placeholder="fleet.unloadingCountry"
                                    v-model="unloadingCountry"
                                    :rules="[v => !!v || 'Item is required']"
                                    id="unloadingCountryId"
                                    clearable
                                    class="mx-2"
                                ></v-autocomplete>
                                <v-text-field
                                    label="Unloading city"
                                    :placeholder="fleet.unloadingCity"
                                    v-model="unloadingCity"
                                    :rules="[v => !!v || 'Item is required']"
                                    id="unloadingCityId"
                                    class="mx-2"
                                    color="white"
                                >
                                </v-text-field>
                            </v-toolbar>
                            <v-toolbar 
                                dark
                                color="blue lighten-2"
                                class="my-2 py-3">
                                <v-text-field
                                    label="Price"
                                    :placeholder="String(fleet.price)"
                                    v-model="price"
                                    id="priceId"
                                    class="mx-2"
                                    color="white"
                                    type="number"
                                    prepend-icon="euro_symbol"
                                >
                                </v-text-field>
                            </v-toolbar>
                            <v-toolbar 
                                dark
                                color="blue lighten-2"
                                class="my-2 py-3">
                                    <v-text-field
                                        label="Loading date"
                                        :placeholder="fleet.loadingDate"
                                        v-model="date"
                                        id="loadingDateId"
                                        class="mx-2"
                                        color="white"
                                        type="date"
                                        prepend-icon="euro_symbol"
                                    >
                                    </v-text-field>
                                </v-toolbar>
                                <v-toolbar 
                                    dark
                                    color="blue lighten-2"
                                    class="my-2 py-3">
                                    <v-text-field
                                        label="Weight (tons)"
                                        :placeholder="String(fleet.weight)"
                                        v-model="weight"
                                        class="mx-2"
                                        id="weightId"
                                        color="white"
                                        type="number"
                                        prepend-icon="view_agenda"
                                    >
                                    </v-text-field>
                                </v-toolbar>
                                <v-flex xs12 class="my-4">
                                    <v-btn
                                    @click="submit(fleet._id)"
                                    >
                                    submit
                                    </v-btn>
                                    <v-btn @click="clear(fleet._id)">delete</v-btn>
                                </v-flex>
                            </v-form>
                        </v-layout>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-layout>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data () {
        return {
            newFleets: [],
            loadingCountry: '',
            loadingCity: '',
            unloadingCountry: '',
            unloadingCity: '',
            price: null,
            menu: false,
            date: null,
            weight: null
        }
    },
    computed: {
      ...mapGetters([
        'getFleets',
        'getFleetsByUser',
        'getCountries'
      ])
    },
    methods: {
      ...mapActions([
        'getFleetsToStore',
        'updateFleetsByUser',
        'deleteFleets'
      ]),

      submit (fleetId) {
          var postId = fleetId
          var updateValues = {
              loadingCountry: document.getElementById('loadingCountryId').value !== '' ? document.getElementById('loadingCountryId').value : this.getFleets.filter(el => el._id === postId)[0].loadingCountry, 
              loadingCity: document.getElementById('loadingCityId').value !== '' ? document.getElementById('loadingCityId').value : this.getFleets.filter(el => el._id === postId)[0].loadingCity,
              unloadingCountry: document.getElementById('unloadingCountryId').value !== '' ? document.getElementById('unloadingCountryId').value : this.getFleets.filter(el => el._id === postId)[0].unloadingCountry,
              unloadingCity: document.getElementById('unloadingCityId').value !== '' ? document.getElementById('unloadingCityId').value : this.getFleets.filter(el => el._id === postId)[0].unloadingCity,
              price: document.getElementById('priceId').value !== '' ? document.getElementById('priceId').value : this.getFleets.filter(el => el._id === postId)[0].price,
              loadingDate: document.getElementById('loadingDateId').value !== '' ? document.getElementById('loadingDateId').value : this.getFleets.filter(el => el._id === postId)[0].loadingDate,
              weight: document.getElementById('weightId').value !== '' ? document.getElementById('weightId').value : this.getFleets.filter(el => el._id === postId)[0].weight
          }

          this.updateFleetsByUser({ postId, creds: updateValues })
      },
      clear (fleetId) {
          var postId = fleetId
          if (confirm('Are you sure?')) {
              this.deleteFleets(postId)
          }
      }
    },
    beforeMount () {
        this.getFleetsToStore()
    }
}
</script>
<style scoped>

</style>
