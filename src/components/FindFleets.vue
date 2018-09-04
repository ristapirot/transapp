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
                  <div slot="header" class="title"><span class="blue--text headline lighten-1 text-capitalize font-weight-medium">{{ fleet.startCountry }}</span>, {{ fleet.startCity }} - <span class="blue--text font-weight-medium headline text-capitalize lighten-1">{{ fleet.endCountry }}</span>, {{ fleet.endCity }}</div>
                  <v-card justify-center>
                    <v-card-text class="title"><v-icon>euro_symbol</v-icon> {{ fleet.price }}</v-card-text>
                    <v-card-text class="title"><v-icon>calendar_today</v-icon> {{ fleet.startDate }}</v-card-text>
                    <v-card-text class="title"><v-icon>person</v-icon> {{ fleet.person }}</v-card-text>
                    <v-card-text class="title"><v-icon>phone</v-icon> {{ fleet.phone }}</v-card-text>
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
export default {
    
}
</script>

<style>
</style>


