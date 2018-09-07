import axios from 'axios'
import config from '@/config'

export default {
    instance: axios.create({
      baseURL: config.API_URL,
      timeout: 2000,
      headers: {'x-access-token': localStorage.getItem('token')}
    }),

    login (creds) {
      return this.instance.post(config.login_url, creds)
    },

    addFleet(creds) {
      return this.instance.post(config.add_fleet_url, creds)
    },

    getFleets() {
      return this.instance.get(config.get_fleets_url)
    }
  }