<template>
    <v-container>
        <section>
            <v-layout
                column
                align-center
                justify-center
                class="mb-5">
                <div class="text-xs-center">
                    <h2 class="display-2">Add new fleet</h2>
                </div>
            </v-layout>
        </section>

        <section>
                <v-layout
                    column
                    align-center
                    justify-center
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
                                v-model="loadingCountry"
                                :rules="[v => !!v || 'Item is required']"
                                clearable
                                class="mx-2"
                            ></v-autocomplete>
                            <v-text-field
                                label="Loading city"
                                v-model="loadingCity"
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
                                v-model="unloadingCountry"
                                :rules="[v => !!v || 'Item is required']"
                                clearable
                                class="mx-2"
                            ></v-autocomplete>
                            <v-text-field
                                label="Unloading city"
                                v-model="unloadingCity"
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
                            <v-text-field
                                label="Price"
                                v-model="price"
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
                            <v-flex xs12>
                                <v-menu
                                    ref="dateMenu"
                                    :close-on-content-click="false"
                                    v-model="dateMenu"
                                    :nudge-right="40"
                                    :return-value.sync="loadingDate"
                                    lazy
                                    transition="scale-transition"
                                    offset-y
                                    full-width
                                    min-width="290px"
                                >
                                    <v-text-field
                                    slot="activator"
                                    v-model="loadingDate"
                                    label="Loading date"
                                    prepend-icon="event"
                                    readonly
                                    ></v-text-field>
                                    <v-date-picker v-model="loadingDate" @input="$refs.dateMenu.save(loadingDate)"></v-date-picker>

                                </v-menu>
                            </v-flex>
                        </v-toolbar>
                        <v-toolbar 
                            dark
                            color="blue lighten-2"
                            class="my-2 py-3">
                            <v-text-field
                                label="Weight (tons)"
                                v-model="weight"
                                class="mx-2"
                                color="white"
                                type="number"
                                prepend-icon="view_agenda"
                            >
                            </v-text-field>
                        </v-toolbar>
                        <v-toolbar 
                            dark
                            color="blue lighten-2"
                            class="my-2 py-3">
                            <v-text-field
                                label="Contact person"
                                :value="contactPerson.fullName"
                                class="mx-2"
                                color="white"
                                prepend-icon="person"
                                :disabled="true"
                            >
                            </v-text-field>
                        </v-toolbar>
                        <v-toolbar 
                            dark
                            color="blue lighten-2"
                            class="my-2 py-3">
                            <v-text-field
                                label="Contact phone"
                                :value="contactPerson.phone"
                                class="mx-2"
                                color="white"
                                prepend-icon="phone"
                                :disabled="true"
                            >
                            </v-text-field>
                        </v-toolbar>
                        <v-flex xs12 class="my-4">
                            <v-btn
                            @click="submit"
                            >
                            submit
                            </v-btn>
                            <v-btn @click="clear">clear</v-btn>
                        </v-flex>
                    </v-form>
                </v-layout>
        </section>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            loadingCountry: '',
            loadingCity: '',
            unloadingCountry: '',
            unloadingCity: '',
            price: null,
            loadingDate: null,
            dateMenu: false,
            weight: null,
            contactPerson: 'Nemanja Ristic',
            phone: '+38166450066'
        }
    },
    computed: {
      ...mapGetters([
        'getCountries',
        'getLoggedUser'
      ])      
    },
    mounted () {
        this.contactPerson = JSON.parse(localStorage.getItem('user'))
    },
    methods: {
        ...mapActions([
            'addFleet'
        ]),

        submit () {
            var newFleet = {
                    loadingCountry: this.loadingCountry,
                    loadingCity: this.loadingCity,
                    unloadingCountry: this.unloadingCountry,
                    unloadingCity: this.unloadingCity,
                    price: this.price,
                    loadingDate: this.loadingDate,
                    weight: this.weight,
                    createdBy: this.contactPerson._id,
                    phone: this.phone
                }

            if (this.$refs.form.validate()) {
                this.addFleet(newFleet)
            }
        },
         clear () {
            this.loadingCountry = ''
            this.loadingCity = ''
            this.unloadingCountry = ''
            this.unloadingCity = ''
            this.price = null
            this.loadingDate = null
            this.dateMenu = false
            this.weight = null
        }
    }
}
</script>

<style scoped>

</style>


