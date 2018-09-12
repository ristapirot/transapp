<template>
    <v-container>
        <section>
            <v-layout>
                <v-text-field
                  :value="user.name"
                  :disabled="true"
                  label="Username"
                >
                </v-text-field>
            </v-layout>
            <v-layout>
                <v-text-field
                  v-model="fullName"
                  :placeholder="user.fullName"
                  label="Full name"
                >
                </v-text-field>
            </v-layout>
            <v-layout>
                <v-text-field
                  v-model="company"
                  :placeholder="user.company"
                  label="Company"
                ></v-text-field>
            </v-layout>
            <v-layout>
                <v-text-field
                  v-model="phone"
                  :placeholder="user.phone"
                  label="Phone"
                ></v-text-field>
            </v-layout>
            <v-layout>
                <v-text-field
                  v-model="skypeName"
                  :placeholder="user.skypeName"
                  label="Skype name"
                ></v-text-field>
            </v-layout>
            <v-layout>
                <v-text-field
                  v-model="email"
                  :placeholder="user.email"
                  label="E-mail"
                ></v-text-field>
            </v-layout>
            <v-layout>
                <v-btn @click="save">save</v-btn>
            </v-layout>
        </section>
    </v-container>    
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data () {
        return {
            user: '',
            fullName: '',
            company: '',
            phone: '',
            skypeName: '',
            email: '',
        }
    },
    mounted () {
        this.user = JSON.parse(localStorage.getItem('user'))
    },
    methods: {
        ...mapActions([
            'updateProfile'
        ]),

        save () {
            var newUser = {
                fullName: this.fullName !== '' ? this.fullName : this.user.fullName,
                company: this.company !== '' ? this.company : this.user.company,
                phone: this.phone !== '' ? this.phone : this.user.phone,
                skypeName: this.skypeName !== '' ? this.skypeName : this.user.skypeName,
                email: this.email !== '' ? this.email : this.user.email
            }
            // TO DO: Updating profile, currently not working..
            this.updateProfile(newUser)
            this.user = newUser
        }
    }
}
</script>

<style scoped>

</style>


