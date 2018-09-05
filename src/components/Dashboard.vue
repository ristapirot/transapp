<template>
    <v-content>
        <v-navigation-drawer
            v-model="drawer"
            fixed
            app
        >
        <v-list dense>
            <router-link to="/dashboard/find-fleet" tag='a'>
                <v-list-tile>
                <v-list-tile-action>
                    <v-icon>near_me</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Find fleets</v-list-tile-title>
                </v-list-tile-content>
                </v-list-tile>
            </router-link>
            <v-list-tile>
            <v-list-tile-action>
                <v-icon>add_circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Add new fleet</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
            <v-list-tile-action>
                <v-icon>work</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>My company</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
            <v-list-tile-action>
                <v-icon>build</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Settings</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
        </v-list>
        </v-navigation-drawer>
        <v-toolbar color="blue lighten-2" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Dashboard {{ getLoggedUser.isLogged }}</v-toolbar-title>
        <v-toolbar-title @click="userLogout">Logout</v-toolbar-title>
        </v-toolbar>
        <v-content>
        <v-container fluid fill-height>
            <v-layout
            justify-center
            align-center
            >
            <router-view></router-view>
            </v-layout>
        </v-container>
        </v-content>
    </v-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    },
    beforeMount () {
        if (!this.getLoggedUser.isLogged) {
            this.$router.push('/')
        }
    },
    computed: {
        ...mapGetters([
            'getLoggedUser'
        ])
    },
    methods: {
        ...mapActions([
            'logout'
        ]),
        userLogout () {
            this.logout().then(() => {
                this.$router.push('/')
            })
        }
    }
  }
</script>

<style scoped>
    .router-link-active, a {
        text-decoration: none;
        color: inherit
    }
    
</style>
