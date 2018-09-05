import axios from 'axios'
import config from '@/config'

export default {

    login (creds) {
      return axios.post(config.login_url, creds)
    }
  }